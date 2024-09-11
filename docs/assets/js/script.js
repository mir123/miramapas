$(document).ready(function () {
  "use strict";
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

  //   const textContainer = document.querySelector(".tituloFondo");
  //   const text = textContainer.textContent.trim();
  //   const words = text.split(/\s+/);
  //   textContainer.innerHTML = words
  //     .map((word) => `<span>${word}</span>`)
  //     .join(" ");
});

$(window).on("scroll", function () {
  var windscroll = $(window).scrollTop();
  if (windscroll >= 100) {
    $(".site-navigation").addClass("nav-bg");
    // document.getElementById("navLogo").style.width = "84px";
    // document.getElementById("navbar").style.height = "80px";
    document.getElementById("navLinks").style.fontSize = "16px";
  } else {
    $(".site-navigation").removeClass("nav-bg");
    // document.getElementById("navLogo").style.width = "178px";
    // document.getElementById("navbar").style.height = "132px";
    document.getElementById("navLinks").style.fontSize = "22px";
  }
});
