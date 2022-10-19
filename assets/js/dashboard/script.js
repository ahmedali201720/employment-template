$(document).ready(function () {
  $(".nice-selector").niceSelect();
  CKEDITOR.replace("desc");

  /* Multi Select */

  $(".select2").select2({
    placeholder: "Select Option / Multiple",
  });
});
