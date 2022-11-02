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
          transform: "rotateZ(0deg) scaleX(-1)",
        });
      } else {
        menu.slideDown(400);
        icon.css({
          transform: "rotateZ(-90deg) scaleX(-1)",
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
        transform: "rotateZ(0deg) scaleX(-1)",
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

var options = {
  series: [
    {
      name: "Sales",
      data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5],
    },
  ],
  chart: {
    height: 200,
    type: "line",
    toolbar: {
      show: false,
    },
  },
  stroke: {
    width: 7,
    curve: "smooth",
  },
  toolbar: {
    show: false,
  },
  grid: {
    show: false,
  },
  xaxis: {
    type: "datetime",
    categories: [
      "1/11/2000",
      "2/11/2000",
      "3/11/2000",
      "4/11/2000",
      "5/11/2000",
      "6/11/2000",
      "7/11/2000",
      "8/11/2000",
      "9/11/2000",
      "10/11/2000",
      "11/11/2000",
      "12/11/2000",
      "1/11/2001",
      "2/11/2001",
      "3/11/2001",
      "4/11/2001",
      "5/11/2001",
      "6/11/2001",
    ],
    tickAmount: 10,
  },
  yaxis: {
    show: false,
  },
  title: {
    align: "right",
    style: {
      fontSize: "16px",
      color: "#666",
    },
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "dark",
      gradientToColors: ["#FDD835"],
      shadeIntensity: 1,
      type: "horizontal",
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 100, 100, 100],
    },
  },
  yaxis: {
    show: false,
    min: -10,
    max: 40,
  },
};

var options2 = {
  series: [
    {
      name: "Sales",
      data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5],
    },
  ],
  chart: {
    height: 200,
    type: "line",
    toolbar: {
      show: false,
    },
  },
  stroke: {
    width: 7,
    curve: "smooth",
  },
  toolbar: {
    show: false,
  },
  grid: {
    show: false,
  },
  xaxis: {
    type: "datetime",
    categories: [
      "1/11/2000",
      "2/11/2000",
      "3/11/2000",
      "4/11/2000",
      "5/11/2000",
      "6/11/2000",
      "7/11/2000",
      "8/11/2000",
      "9/11/2000",
      "10/11/2000",
      "11/11/2000",
      "12/11/2000",
      "1/11/2001",
      "2/11/2001",
      "3/11/2001",
      "4/11/2001",
      "5/11/2001",
      "6/11/2001",
    ],
    tickAmount: 10,
  },
  yaxis: {
    show: false,
  },
  title: {
    align: "right",
    style: {
      fontSize: "16px",
      color: "#000000",
    },
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "light",
      gradientToColors: ["#000000"],
      shadeIntensity: 1,
      type: "horizontal",
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 100, 100, 100],
    },
  },
  yaxis: {
    show: false,
    min: -10,
    max: 40,
  },
};

var el1 = document.querySelector("#chart1");
var el2 = document.querySelector("#chart2");
var el3 = document.querySelector("#chart3");
var el4 = document.querySelector("#chart4");

if (el1) {
  var chart = new ApexCharts(el1, options);
}
if (el2) {
  var chart2 = new ApexCharts(el2, options2);
}
if (el3) {
  var chart3 = new ApexCharts(el3, options);
}
if (el4) {
  var chart4 = new ApexCharts(el4, options2);
}
if (chart) {
  chart.render();
}

if (chart2) {
  chart2.render();
}

if (chart3) {
  chart3.render();
}

if (chart4) {
  chart4.render();
}
