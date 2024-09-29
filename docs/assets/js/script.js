$(document).ready(function () {
  "use strict";

  const defaultLanguage = "es";

  let langCookie = getCookie("siteLanguage");

  if (!langCookie) {
    setCookie("siteLanguage", defaultLanguage);
    langCookie = defaultLanguage;
  }

  if (window.location.pathname === "/") {
    window.location.href = "/" + langCookie;
  }

  // Scroll to top
  $("a[href='#top']").click(function () {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });

  // Smooth scroll
  $("a.scroll-to").on("click", function (event) {
    var $anchor = $(this);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $($anchor.attr("href")).offset().top - 50,
        },
        700
      );
    event.preventDefault();
  });

  $(".site-testimonial-item").on("mouseenter", function () {
    $(".site-testimonial-item").addClass("inactive");
    $(this).removeClass("inactive").addClass("active");
  });
  $(".site-testimonial-item").on("mouseleave", function () {
    $(".site-testimonial-item").removeClass("inactive");
    $(".site-testimonial-item").removeClass("active");
  });

  $("#botonLenguaje").on("click", function (event) {
    console.log("clic en boton");
    const lang = $(this).data("lang");
    // const currentLang = getCookie("siteLanguage") || defaultLanguage; // Get current language
    const newLang = lang ? lang : "es"; // Toggle language between "es" and "en"
    setLanguage(newLang); // Set the new language
  });

  // Select all elements with the class "tituloFondo"
  //const textContainers = document.querySelectorAll(".tituloFondo");

  // Iterate over each element and apply the span wrapping
  // textContainers.forEach((textContainer) => {
  //   const text = textContainer.textContent.trim();
  //   const words = text.split(/\s+/);
  //   textContainer.innerHTML = words
  //     .map((word) => `<span>${word}</span>`)
  //     .join(" ");
  // });

  const textContainers = document.querySelectorAll(".tituloFondo");

  // Function to wrap each word in a span tag
  function wrapTextNodes(element) {
    // Loop over all child nodes of the element
    element.childNodes.forEach((node) => {
      // Check if the node is a text node
      if (node.nodeType === Node.TEXT_NODE) {
        const text = node.textContent.trim();
        if (text.length > 0) {
          const words = text.split(/\s+/);
          // Create a document fragment to hold the span-wrapped words
          const fragment = document.createDocumentFragment();
          words.forEach((word, index) => {
            const span = document.createElement("span");
            // span.style.marginRight = Math.random() * 10 + 3 + "px";
            span.textContent = word;
            fragment.appendChild(span);
            // Add a space after each word, except the last one
            // if (index < words.length - 1) {
            //   fragment.appendChild(document.createTextNode(" "));
            // }
          });
          // Replace the text node with the span-wrapped words
          node.replaceWith(fragment);
        }
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        // Recursively apply the same function to child elements
        wrapTextNodes(node);
      }
    });
  }

  // Iterate over each "tituloFondo" container and apply the function
  textContainers.forEach((textContainer) => {
    wrapTextNodes(textContainer);
  });
});

// Para expandir y encoger el encabezado al bajar

const shrinkThreshold = 140;
const expandThreshold = 60;

$(window).on("scroll", function () {
  var windscroll = $(window).scrollTop();

  if (windscroll >= shrinkThreshold) {
    $(".site-navigation").addClass("nav-bg");
    document.getElementById("navLinks").style.fontSize = "16px";
  }

  if (windscroll < expandThreshold) {
    $(".site-navigation").removeClass("nav-bg");
    document.getElementById("navLinks").style.fontSize = "22px";
  }
});

function getCookie(name) {
  let matches = document.cookie.match(
    new RegExp(
      "(?:^|; )" +
        name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
        "=([^;]*)"
    )
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

// Function to set a cookie
function setCookie(name, value, options = {}) {
  options = {
    path: "/",
    ...options,
  };

  let updatedCookie =
    encodeURIComponent(name) + "=" + encodeURIComponent(value);

  for (let optionKey in options) {
    updatedCookie += "; " + optionKey;
    let optionValue = options[optionKey];
    if (optionValue !== true) {
      updatedCookie += "=" + optionValue;
    }
  }

  document.cookie = updatedCookie;
}

// Function to set the language
function setLanguage(lang) {
  setCookie("siteLanguage", lang); // Set the language cookie
}
