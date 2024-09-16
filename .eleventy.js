const { EleventyI18nPlugin } = require("@11ty/eleventy");
const Image = require("@11ty/eleventy-img");
const outdent = require("outdent");

const imageShortcode = async (...args) => {
  // Algunas constantes...

  let widths = [200, 300, 450, 600, 800, 1200, 2000];
  let formats = ["jpeg", "webp"];

  let extraAttributes = {};
  // Check if the last argument is an object and not an array (to collect extra named parameters)
  if (
    args.length > 0 &&
    typeof args[args.length - 1] === "object" &&
    !Array.isArray(args[args.length - 1])
  ) {
    extraAttributes = args.pop(); // Remove the last argument and assign it to extraAttributes
  }

  // Now extract the known positional arguments
  let [src, alt, type = "full", caption = ""] = args;

  // Collect data-pswp-* attributes from extraAttributes
  const dataPswpAttributes = Object.keys(extraAttributes)
    .filter((key) => key.startsWith("dataPswp"))
    .reduce((obj, key) => {
      // Remove 'dataPswp' prefix
      const attributeName = key.slice(8); // Removes 'dataPswp' (8 characters)

      // Convert attributeName from camelCase to kebab-case
      const kebabAttributeName = attributeName.replace(
        /[A-Z]/g,
        (match) => `-${match.toLowerCase()}`
      );

      // Construct the full attribute name
      const fullAttributeName = `data-pswp${kebabAttributeName}`;

      // Assign the attribute value
      obj[fullAttributeName] = extraAttributes[key];
      return obj;
    }, {});

  const imageMetadata = await Image(src, {
    widths: widths,
    formats: formats,
    outputDir: "docs/assets/images",
    urlPath: "/assets/images",
    cacheOptions: {
      duration: "10d",
      key: new Date().getTime(),
    },
    filenameFormat: function (id, src, width, format, options) {
      const extension = format === "jpeg" ? "jpg" : format;
      const originalName = src
        .split("/")
        .pop()
        .replace(/\.[^/.]+$/, "");
      return `${originalName}-${id}-${width}.${extension}`;
    },
  });

  const validImageMetadata = Object.values(imageMetadata).filter(
    (images) => images.length > 0
  );

  if (validImageMetadata.length === 0) {
    throw new Error(
      `No valid images generated for ${src}. Check the image path or formats.`
    );
  }

  let className = "imagenFull";
  let sizes = "";

  switch (type) {
    case "imagenFull":
    case "imagenSimple":
      sizes =
        "(min-width: 1200px) 730px, (min-width: 992px) 610px, (min-width: 768px) 690px, (min-width: 576px) 510px, (max-width: 575px) 420px,  50vw";
      className = "imagenFull";
      break;

    case "imagenIzq":
      sizes = "(min-width: 575px) 50vw, (max-width: 575px) 100vw";
      className = "imagenIzq";
      break;
    case "imagenDer":
      sizes = "(min-width: 575px) 50vw, (max-width: 575px) 100vw";
      className = "imagenDer";
      break;
    case "imagenThumb":
      sizes = "120px";
      className = "projectThumb";
      break;
    case "extra-large":
      sizes = "90vw";
      className = "imagenExtraLarge";
      break;
    default:
      sizes = "100%"; // Fallback size
      className = "imagenDefault";
      break;
  }

  const sourceHtmlString = validImageMetadata
    .map((images) => {
      const { sourceType } = images[0];
      const sourceAttributes = stringifyAttributes({
        type: sourceType,
        srcset: images.map((image) => image.srcset).join(", "),
        sizes,
      });
      return `<source ${sourceAttributes}>`;
    })
    .join("\n");

  const imgAttributes = stringifyAttributes({
    src: validImageMetadata[0][0].url,
    alt,
    loading: "lazy",
    decoding: "async",
  });

  const imgHtmlString = `<img ${imgAttributes}>`;

  const captionHtml = caption
    ? `<figcaption class="image-caption">${caption}</figcaption>`
    : "";

  // Estos tipos de imagen no usan lightbox

  if (type == "imagenSimple" || type == "imagenThumb") {
    return `<figure class="${className}">
        <picture>
          ${sourceHtmlString}${imgHtmlString}
        </picture>
        ${captionHtml}
      </figure>`;
  }

  const jpegImages = imageMetadata["jpeg"] || imageMetadata["jpg"];

  if (!jpegImages || jpegImages.length === 0) {
    throw new Error(`No JPEG images generated for ${src}.`);
  }

  const dataPswpSrcset = jpegImages
    .map((image) => `${image.url} ${image.width}w`)
    .join(", ");

  // Get the largest image for the href attribute
  const largestImage = jpegImages.reduce((prev, current) => {
    return current.width > prev.width ? current : prev;
  });

  // Get the dimensions of the largest image
  const { width: maxWidth, height: maxHeight } = largestImage;

  // Build the <a> tag with the required data attributes
  const anchorAttributes = stringifyAttributes({
    href: largestImage.url,
    class: "lightbox",
    "data-pswp-srcset": dataPswpSrcset,
    "data-pswp-width": maxWidth,
    "data-pswp-height": maxHeight,
    "data-pswp-src": largestImage.url,
    "data-pswp-alt": alt,
    ...dataPswpAttributes, // Include additional data-pswp-* attributes
  });

  return `<figure class="${className}">
      <a ${anchorAttributes}>
        <picture>
          ${sourceHtmlString}
          ${imgHtmlString}
        </picture>
      </a>
      ${captionHtml}
    </figure>`;
};

const stringifyAttributes = (attributeMap) => {
  return Object.entries(attributeMap)
    .map(([attribute, value]) => {
      if (typeof value === "undefined") return "";
      return `${attribute}="${value}"`;
    })
    .join(" ");
};

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(EleventyI18nPlugin, {
    // any valid BCP 47-compatible language tag is supported
    defaultLanguage: "es", // Required, this site uses "en"
    filters: {
      // transform a URL with the current page’s locale code
      url: "locale_url",

      // find the other localized content for a specific input file
      links: "locale_links",
    },
  });

  eleventyConfig.addNunjucksAsyncShortcode("imagen", imageShortcode);

  eleventyConfig.addFilter("primeraOracion", function (value) {
    if (!value) return "";

    const sentences = value.match(/[^.!?]+[.!?]*/g);
    return sentences ? sentences[0].trim() : value.trim();
  });

  eleventyConfig.addFilter("restoDelTexto", function (value) {
    if (!value) return "";

    const sentences = value.match(/[^.!?]+[.!?]*/g);
    if (!sentences || sentences.length <= 1) return ""; // Return empty if there's only one sentence

    sentences.shift(); // Remove the first sentence
    return sentences.join(" ").trim();
  });

  // eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.setUseGitIgnore(false);

  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addWatchTarget("assets/css");

  return {
    passthroughFileCopy: true,
    markdownTemplateEngine: "njk",
    templateFormats: ["html", "njk", "md", "css"],
    dir: {
      input: "src",
      output: "docs",
      include: "includes",
    },
  };
};
