(function ($) {
  "use strict";

  // function to set a given theme/color-scheme
  function setTheme(newTheme, cb) {
    cb = cb || function () {};
    window.localStorage.setItem("theme", newTheme);
    // let currentTheme = window.localStorage.getItem("theme");
    if (newTheme === "dark-mode") {
      $(".toggle-button").text("Set Color Mode");
      $(".color-mode-icon").removeClass("active");
    } else {
      $(".toggle-button").text("Set Dark Mode");
      $(".color-mode-icon").addClass("active");
    }
    $("body").removeClass();
    $("body").addClass(newTheme);
    cb();
  }

  // Immediately invoked function to set the theme on initial load

  function setThemeOnPageLoad() {
    let currentTheme = window.localStorage.getItem("theme");
    if (currentTheme) {
      setTheme(currentTheme);
    } else {
      setTheme("color-mode"); //1st time Color mode will be set
    }
  }
  setThemeOnPageLoad();

  // function to toggle between light and dark theme
  function toggleTheme() {
    let currentTheme = window.localStorage.getItem("theme");
    if (currentTheme === "dark-mode") {
      setTheme("color-mode");
    } else {
      setTheme("dark-mode");
    }
  }

  // COLOR MODE

  $(".toggle-button").click(function () {
    // $(".color-mode-icon").toggleClass("active");
    // $("body").toggleClass("dark-mode");
    toggleTheme();
  });

  // HEADER
  $(".navbar").headroom();

  // PROJECT CAROUSEL
  $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    nav: true,
  });

  // SMOOTHSCROLL
  $(function () {
    $(".nav-link, .custom-btn-link").on("click", function (event) {
      var $anchor = $(this);
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $($anchor.attr("href")).offset().top - 49,
          },
          1000
        );
      event.preventDefault();
    });
  });

  // Submit form details
  $("#contact-form-details").submit(function (event) {
    // alert("Form submitted successfully.");
    event.preventDefault();
    let formData = $(this).serializeArray();
    // console.log(formData);
  });
  // TOOLTIP
  $(".social-links a").tooltip();
})(jQuery);
