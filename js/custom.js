(function ($) {
  "use strict";

  // COLOR MODE
  // From Nav
  $(".color-mode ").click(function () {
    $(".color-mode-icon").toggleClass("active");
    $("body").toggleClass("dark-mode");
  });
  // From menu
  // $(".float-theme-toggle-button").click(function () {
  //   $(".color-mode-icon").toggleClass("active");
  //   $("body").toggleClass("dark-mode");
  // });

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
    $(".nav-link, .custom-btn-link, .button-goto-top").on(
      "click",
      function (event) {
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
      }
    );
  });

  // TOOLTIP
  $(".social-links a").tooltip();
  $("").$;
  //

  $("#contact-form-details").submit(function (event) {
    event.preventDefault();
    // let formData = $(this).serializeArray();
    $("#submitFormStatus").empty().append("Submitted successfully.");
    // $.ajax({
    //   type: "POST",
    //   url: "",
    //   data: formData,
    //   success: (resp) => {
    //     if (resp.status) {
    //       // $( "#result" ).empty().append( response );
    //       alert(resp);
    //     } else alert("Something went wrong.");
    //   },
    //   dataType: "JSON",
    // });
  });
})(jQuery);
