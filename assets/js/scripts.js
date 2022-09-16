$(document).ready(function () {
  $(".nice-selector").niceSelect();
  $(".file-input-btn").on("click", function (e) {
    e.preventDefault();
    const targetInput = $(this).attr("data-input");
    if (targetInput.length) {
      $(targetInput).trigger("click");
    }
  });
});
