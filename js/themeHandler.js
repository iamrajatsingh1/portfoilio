// (function ($) {
//   "use strict";

//   // function to set a given theme/color-scheme
//   function setTheme(newTheme, cb) {
//     cb = cb || function () {};
//     window.localStorage.setItem("theme", newTheme);
//     // let currentTheme = window.localStorage.getItem("theme");
//     if (newTheme === "dark-mode") {
//       $(".toggle-button").text("Set Color Mode");
//       $(".color-mode-icon").removeClass("active");
//     } else {
//       $(".toggle-button").text("Set Dark Mode");
//       $(".color-mode-icon").addClass("active");
//     }
//     $("body").removeClass();
//     $("body").addClass(newTheme);
//     cb();
//   }

//   // Immediately invoked function to set the theme on initial load

//   function setThemeOnPageLoad() {
//     let currentTheme = window.localStorage.getItem("theme");
//     if (currentTheme) {
//       setTheme(currentTheme);
//     } else {
//       setTheme("color-mode"); //1st time Color mode will be set
//     }
//   }
//   setThemeOnPageLoad();

//   // function to toggle between light and dark theme
//   function toggleTheme() {
//     let currentTheme = window.localStorage.getItem("theme");
//     if (currentTheme === "dark-mode") {
//       setTheme("color-mode");
//     } else {
//       setTheme("dark-mode");
//     }
//   }

//   // COLOR MODE

//   $(".toggle-button").click(function () {
//     toggleTheme();
//   });
// })(jQuery);
