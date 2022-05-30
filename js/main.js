//sliders' code

$(".article-slider").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 2,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 4,
    },
  },
});

$(".course-slider").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 2,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 4,
    },
  },
});

//slidetoggle's code

$(document).ready(function () {
  $("#hamburger").click(function () {
    $(".hamburger-menu").slideToggle();
  });
});

$(document).ready(function () {
  $(".topbar-left-icons i.fa-search").click(function () {
    $(".searchbar").slideToggle();
  });
});

$(document).ready(function () {
  $("#hamberger").click(function () {
    $(".hamburger-menu").slideToggle();
  });

  $(".hamburger-menu .sub-menu-arrow").click(function () {
    if ($(this).hasClass("fa-arrow-circle-left")) {
      $(this).next(".hamburger-menu ul li > ul").slideToggle();
      $(this)
        .removeClass("fa-arrow-circle-left")
        .addClass("fa-arrow-circle-down");
    } else {
      $(this).next(".hamburger-menu ul li > ul").hide(300);
      $(this)
        .removeClass("fa-arrow-circle-down")
        .addClass("fa-arrow-circle-left");
    }
  });
});
