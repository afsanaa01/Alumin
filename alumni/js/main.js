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


var owl = $(".owl-two");
owl.owlCarousel({
  items: 1,
  nav: true,
  dots: true,
  loop: true,
  margin: 0,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});
var owl1 = $(".owl-three");
owl1.owlCarousel({
  items: 1,
  nav: true,
  dots: false,
  loop: true,
  margin: 15,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});

$(".owl-carousel").owlCarousel({
  center: true,
  items: 5,
  loop: true,
  margin: 30,
  dots: false,
  nav: true,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 5,
    },
  },
});

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 10,
  slidesPerView: 10,
});
var swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  spaceBetween: 10,
  effect: "fade",
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});
