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

  console.log("haciendo el onclick");

  $("#botonLenguaje").on("click", function (event) {
    console.log("clic en boton");
    const lang = $(this).data("lang");
    // const currentLang = getCookie("siteLanguage") || defaultLanguage; // Get current language
    const newLang = lang ? lang : "es"; // Toggle language between "es" and "en"
    setLanguage(newLang); // Set the new language
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
