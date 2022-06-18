$(document).ready(function () {
  $(".side-item").on("click", function () {
    const menu = $(this).find(".submenu").first();
    const icon = $(this).find(".ico").first();
    if (menu.is(":visible")) {
      menu.slideUp(400);
      icon.css({
        transform: "rotateZ(0deg)",
      });
    } else {
      menu.slideDown(400);
      icon.css({
        transform: "rotateZ(-90deg)",
      });
    }
  });
});
