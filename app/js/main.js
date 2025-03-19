$(function () {
  $('.header__item-child span').on('click', function () {
    $(this).next('.header__submenu').slideToggle();
  });





})

var swiper = new Swiper(".intro__slider", {
  effect: "fade",
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


var swiper = new Swiper(".swiper-products", {
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
  // autoplay: {
  //   delay: 5000,
  //   disableOnInteraction: false,
  // },
  breakpoints: {
    320: {
      slidesPerView: 2,
      grid: {
        rows: 2, // Додаємо два ряди
      },
      spaceBetween: 15, // Простір між слайдами
    },
    576: {
      slidesPerView: 2,
    },
    800: {
      slidesPerView: 3,
    },

    1200: {
      slidesPerView: 4,
      spaceBetween: 25,
    },
  }
});



var swiper = new Swiper(".swiper-skins", {
  spaceBetween: 25,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    576: {
      slidesPerView: 3,
    },
    800: {
      slidesPerView: 4,
    },

    1200: {
      slidesPerView: 6,
    },
  }
});

var swiper = new Swiper(".blog__slider", {
  spaceBetween: 15,
  slidesPerView: 2,
  breakpoints: {
    576: {
      slidesPerView: 2,
      spaceBetween: 25,
    },
    800: {
      slidesPerView: 3,
      spaceBetween: 25,
    },

    1200: {
      slidesPerView: 4,
      spaceBetween: 25,
    },
  }
});

var swiper = new Swiper(".review__slider", {
  spaceBetween: 15,
  slidesPerView: 1.3,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    800: {
      slidesPerView: 3,
    },

    1200: {
      slidesPerView: 4,
    },
  }
});




// меню гамбургер
const menuBtn = document.querySelector(".header__menu-btn");
const navMenu = document.querySelector(".header__box");
const header = document.querySelector(".header");

if (menuBtn && navMenu && header) {
  menuBtn.addEventListener("click", function () {
    this.classList.toggle("active");
    navMenu.classList.toggle("open");
    document.body.classList.toggle("lock");
    header.classList.toggle("active");
  });

  // Додаємо обробник події для всіх посилань всередині header__nav
  const navLinks = navMenu.querySelectorAll("a");
  navLinks.forEach(link => {
    link.addEventListener("click", function () {
      // При кліці на посилання прибираємо додаткові класи
      menuBtn.classList.remove("active");
      navMenu.classList.remove("open");
      document.body.classList.remove("lock");
      header.classList.remove("active");
    });
  });
}

///////////
document.querySelector('.header__search-icon').addEventListener('click', function () {
  document.querySelector('.header__search').classList.add('open');
  document.body.classList.add('lock');
});

document.querySelector('.header__search-close').addEventListener('click', function () {
  document.querySelector('.header__search').classList.remove('open');
  document.body.classList.remove('lock');
});

// Закриваємо при кліку поза межами контейнера
document.addEventListener('click', function (event) {
  const search = document.querySelector('.header__search');
  const container = document.querySelector('.header__search .container');

  // Перевіряємо, чи клік був за межами контейнера і чи відкрите пошукове поле
  if (!container.contains(event.target) && !event.target.closest('.header__search-icon') && search.classList.contains('open')) {
    search.classList.remove('open');
    document.body.classList.remove('lock');
  }
});

