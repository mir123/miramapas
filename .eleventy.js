const { EleventyI18nPlugin } = require("@11ty/eleventy");
const Image = require("@11ty/eleventy-img");
const outdent = require("outdent");

const imageShortcode = async (
  src,
  alt,
  type = "full", // default type
  caption = "", // New caption parameter
  widths = [200, 300, 450, 600, 800, 1200],
  formats = ["webp", "jpeg"]
) => {
  const imageMetadata = await Image(src, {
    widths: [...widths, null],
    formats: [...formats, null],
    outputDir: "docs/assets/images",
    urlPath: "/assets/images",
    cacheOptions: {
      duration: "10d", // Cache duration
      key: new Date().getTime(), // Force regeneration by using a unique key
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

  let className = "imagenMediana";
  let sizes = "";

  switch (type) {
    case "imagenFull":
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
    case "thumb":
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

  const largestUnoptimizedImg = validImageMetadata[0]?.pop();
  const imgAttributes = stringifyAttributes({
    src: largestUnoptimizedImg ? largestUnoptimizedImg.url : src, // Fallback to original src if no processed image
    alt,
    loading: "lazy",
    decoding: "async",
  });

  const imgHtmlString = `<img ${imgAttributes}>`;

  const captionHtml = caption
    ? `<figcaption class="image-caption">${caption}</figcaption>`
    : "";

  return `<figure class="${className}"><picture>${sourceHtmlString}${imgHtmlString}</picture>${captionHtml}</figure>`;
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

  // eleventyConfig.addPairedShortcode("imgMed", function (imagen) {
  //   return (
  //     "<img class='imagenMediana' src='/assets/images/" +
  //     imagen +
  //     "' width='100%' />"
  //   );
  // });

  // eleventyConfig.addPairedShortcode("imgIzq", function (imagen) {
  //   return (
  //     "<img class='imagenIzq' src='/assets/images/" +
  //     imagen +
  //     "' width='50%' />"
  //   );
  // });

  // eleventyConfig.addPairedShortcode("imgDer", function (imagen) {
  //   return (
  //     "<img class='imagenDer' src='/assets/images/" +
  //     imagen +
  //     "' width='50%' />"
  //   );
  // });

  // eleventyConfig.addShortcode("estring", function (objeto) {
  //   return console.log(objeto);
  // });

  // eleventyConfig.addFilter("sanitizarPalabras", function (string) {
  //   const sinTildes = string.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  //   const slug = "-";
  //   const sanitized = sinTildes
  //     .toLowerCase()
  //     .replace(/[^0-9a-z_]+/g, slug) // Replace invalid characters with slug
  //     .replace(new RegExp(`^${slug}+|${slug}+$`, "g"), ""); // Trim slug from start and end
  //   return sanitized;
  // });

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

  // eleventyConfig.watchIgnores.add("/assets/images/comida_files");
  // eleventyConfig.watchIgnores.add("/assets/images/pacifico_files");
  // eleventyConfig.watchIgnores.add("/assets/images/centroamerica_files");

  // eleventyConfig.ignores.add("/assets/images/comida_files");
  // eleventyConfig.ignores.add("/assets/images/pacifico_files");
  // eleventyConfig.ignores.add("/assets/images/centroamerica_files");

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
