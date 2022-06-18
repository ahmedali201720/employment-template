$(document).ready(function () {
  $(".side-item").on("click", function () {
    const container = $("#pageContainer");
    const menu = $(this).find(".submenu").first();
    const icon = $(this).find(".ico").first();
    container.removeClass("collapsed");
    if (menu.length) {
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
    }
  });

  $("#sidebarToggler").on("click", function () {
    handleSidebar();
  });

  function handleSidebar() {
    const container = $("#pageContainer");
    const sidebar = $("#dashboardSidebar");
    const subs = sidebar.find(".submenu");
    const icos = sidebar.find(".ico");
    if (!container.hasClass("collapsed")) {
      subs.slideUp(100);
      icos.css({
        transform: "rotateZ(0deg)",
      });
    }
    sidebar.find("*").animate(
      {
        opacity: 0,
      },
      200
    );
    setTimeout(function () {
      container.toggleClass("collapsed");
    }, 200);
    setTimeout(function () {
      sidebar.find("*").animate(
        {
          opacity: 1,
        },
        200
      );
    }, 500);
  }

  $("#sidebarCloser").on("click", function () {
    const sidebar = $("#dashboardSidebar");
    sidebar.animate(
      {
        right: "-800px",
      },
      300
    );
  });

  $("#mobileSidebarToggler").on("click", function () {
    const sidebar = $("#dashboardSidebar");
    sidebar.animate(
      {
        right: 0,
      },
      300
    );
  });
});
