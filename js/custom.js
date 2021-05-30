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
    let formData = $(this).serializeArray();
    let obj = {};
    formData.forEach((item) => {
      if (item.name) obj[item.name] = item.value || "";
    });

    let data = {
      user_id: "user_okwQj9dnUhQFaApHUSHLW",
      accessToken: "9eacfd17554dde5a3fd54bf259b15207",
      service_id: "iamrajatsingh1_u3n6c0isa",
      template_id: "reply_template_rajat",
      template_params: {
        subject: `${obj.name} messaged you from your Portfolio.`,
        user_name: obj.name,
        user_email: obj.email,
        message: `${obj.message || `${obj.name} tried contacting you.`}`,
        my_name: "Rajat Singh",
        my_email: "iamrajatsingh1@gmail.com",
        reply_to: obj.email,
      },
    };
    $("#submitFormStatus").empty().append("Sending...");
    $.ajax("https://api.emailjs.com/api/v1.0/email/send", {
      type: "POST",
      data: JSON.stringify(data),
      contentType: "application/json",
    })
      .done(function () {
        $("#submitFormStatus").empty().append("Submitted successfully.");
      })
      .fail(function (error) {
        $("#submitFormStatus")
          .empty()
          .append(
            "Could not send the email, please try again or call at Phone number."
          );
      });
  });
})(jQuery);
