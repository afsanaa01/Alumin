$(window).scroll(function () {
  updateNav();
});

function updateNav() {
  if ($(window).scrollTop() > 30) {
    $(".navbar").addClass("scrolled");
  } else {
    $(".navbar").removeClass("scrolled");
  }
}

$(".modal-btn").on("click", function () {
  $(".modal-open").show();
});

function myFunction(x) {
  x.classList.toggle("change");
}

$(".owl-carousel").owlCarousel({
  center: true,
  items: 5,
  loop: true,
  margin: 30,
  dots: false,
  nav: true,
  navText: [
    "<div class='nav-button owl-prev'>‹</div>",
    "<div class='nav-button owl-next'>›</div>",
  ],
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 5,
    },
    1000: {
      items: 5,
    },
  },
});

var owl = $(".owl-two");
owl.owlCarousel({
  items: 6,
  nav: false,
  dots: false,
  loop: true,
  margin: 15,
  autoplay: true,
  autoplayTimeout: 1500,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 4,
    },
    1000: {
      items: 6,
    },
  },
});
var owl1 = $(".owl-three");
owl1.owlCarousel({
  items: 6,
  nav: false,
  dots: false,
  loop: true,
  margin: 15,
  autoplay: true,
  autoplayTimeout: 1500,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 4,
    },
    1000: {
      items: 6,
    },
  },
});
