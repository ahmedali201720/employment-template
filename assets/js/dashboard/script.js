$(document).ready(function () {
  $(".nice-selector").niceSelect();
  if ($("#desc").length) {
    CKEDITOR.replace("desc");
  }

  /* Multi Select */

  $(".select2").select2({
    placeholder: "Select Option / Multiple",
  });
});
