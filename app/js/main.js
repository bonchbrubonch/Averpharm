$(function () {
  // Анімація випадаючого меню в хедері
  $('.header__item-child span').on('click', function () {
    $(this).next('.header__submenu').slideToggle();
  });

  // Анімація фільтрів в каталозі
  $(".catalog__filter-title").on("click", function () {
    $(this).toggleClass("active");
    $(this).next(".catalog__filter-list, .catalog__price-box").slideToggle();
  });

  // Кнопка відкриття галереї
  $(".gallery__btn").on("click", function () {
    $(this).parent().addClass("open");
  });

  /////////
  const titles = document.querySelectorAll('.product__box-title');

  titles.forEach(title => {
    title.addEventListener('click', () => {
      const nextElement = title.nextElementSibling; // отримуємо наступний елемент
      // Перевіряємо, чи це product__box-inner або ol
      if (nextElement && (nextElement.classList.contains('product__box-inner') || nextElement.tagName.toLowerCase() === 'ol')) {
        // Виконуємо слайд анімацію
        $(nextElement).slideToggle();

        // Додаємо клас hide до заголовка
        title.classList.toggle('hide');
      }
    });
  });

  $(".rateYo").rateYo({
    rating: 5,
    numStars: 5,
    starWidth: "17px",
    readOnly: true,
    spacing: "3px"
  });

  ///////////////
  if ($(".accordeon").length) {
    $(".accordeon dd").hide().prev().click(function () {
      $(this).parents(".accordeon").find("dd").not(this).slideUp().prev().removeClass("active");
      $(this).next().not(":visible").slideDown().prev().addClass("active");
      $("dl").removeClass("open");
      $(this).parent().toggleClass("open");
    });
  }

});

// Слайдер на головній сторінці
var swiper = new Swiper(".intro__slider", {
  effect: "fade",
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Слайдер продуктів
var swiper = new Swiper(".swiper-products", {
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
  breakpoints: {
    320: { slidesPerView: 2, grid: { rows: 2 }, spaceBetween: 15 },
    576: { slidesPerView: 2 },
    800: { slidesPerView: 3 },
    1200: { slidesPerView: 4, spaceBetween: 25 },
  }
});
// Слайдер продуктів модалка
$('[data-fancybox]').fancybox({
  afterShow: function (instance, current) {
    var swiper = new Swiper(".slider-modal", {
      spaceBetween: 30,
      loop: true,
      breakpoints: {
        320: { slidesPerView: 2, grid: { rows: 2 }, spaceBetween: 15 },
        576: { slidesPerView: 2 },
        800: { slidesPerView: 3 },
        1200: { slidesPerView: 4, spaceBetween: 25 },
      }
    });
  }
});


// Слайдер клмпонентів
var swiper = new Swiper(".components__slider", {
  spaceBetween: 20,
  slidesPerView: 1.3,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
  breakpoints: {
    576: { slidesPerView: 2 },
    800: { slidesPerView: 3 },
    1200: { slidesPerView: 4, spaceBetween: 25 },
  }
});

//слайдер history 
var swiper = new Swiper(".dss-history__slider", {
  slidesPerView: 1,
  spaceBetween: 25,
  centeredSlides: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: { slidesPerView: 1.2 },
  }
});

// Слайдер типів шкіри
var swiper = new Swiper(".swiper-skins", {
  spaceBetween: 25,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: { slidesPerView: 2, spaceBetween: 15 },
    576: { slidesPerView: 3 },
    800: { slidesPerView: 4 },
    1200: { slidesPerView: 6 },
  }
});

// Слайдер блогу
var swiper = new Swiper(".blog__slider", {
  spaceBetween: 15,
  slidesPerView: 2,
  breakpoints: {
    576: { slidesPerView: 2, spaceBetween: 25 },
    800: { slidesPerView: 3, spaceBetween: 25 },
    1200: { slidesPerView: 4, spaceBetween: 25 },
  }
});

// Слайдер відгуків
var swiper = new Swiper(".review__slider", {
  spaceBetween: 15,
  slidesPerView: 1.3,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    576: { slidesPerView: 2 },
    800: { slidesPerView: 3 },
    1200: { slidesPerView: 4 },
  }
});
///////////////
var swiper = new Swiper(".dss-review__slider", {
  spaceBetween: 15,
  slidesPerView: 1.3,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    576: { slidesPerView: 2 },
    1200: { slidesPerView: 3 },
  }
});

///////
var swiper = new Swiper(".product__slider-bot", {
  spaceBetween: 15,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".product__slider-top", {
  spaceBetween: 15,
  allowTouchMove: false,
  effect: "fade",
  thumbs: {
    swiper: swiper,
  },
});

// Меню гамбургер
const menuBtn = document.querySelector(".header__menu-btn");
const navMenu = document.querySelector(".header__box");
const header = document.querySelector(".header");

if (menuBtn && navMenu && header) {
  menuBtn.addEventListener("click", function () {
    const isSearchOpen = document.querySelector('.header__search').classList.contains('open');
    if (isSearchOpen) document.querySelector('.header__search').classList.remove('open');

    this.classList.toggle("active");
    navMenu.classList.toggle("open");

    if (this.classList.contains("active")) {
      document.body.classList.add("lock");
      header.classList.add("active");
    } else {
      document.body.classList.remove("lock");
      header.classList.remove("active");
    }
  });

  navMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function () {
      menuBtn.classList.remove("active");
      navMenu.classList.remove("open");
      document.body.classList.remove("lock");
      header.classList.remove("active");
    });
  });
}

// Пошук
document.querySelector('.header__search-icon').addEventListener('click', function () {
  if (menuBtn.classList.contains('active')) {
    menuBtn.classList.remove("active");
    navMenu.classList.remove("open");
  }
  document.querySelector('.header__search').classList.add('open');
  document.body.classList.add('lock');
});

document.querySelector('.header__search-close').addEventListener('click', function () {
  document.querySelector('.header__search').classList.remove('open');
  if (!menuBtn.classList.contains('active')) document.body.classList.remove('lock');
});

document.addEventListener('click', function (event) {
  const search = document.querySelector('.header__search');
  const container = document.querySelector('.header__search .container');
  if (!container.contains(event.target) && !event.target.closest('.header__search-icon') && search.classList.contains('open')) {
    search.classList.remove('open');
    if (!menuBtn.classList.contains('active')) document.body.classList.remove('lock');
  }
});

// Фільтри в каталозі
const filtersBtn = document.querySelector('.catalog__filter-btn');
const closeBtn = document.querySelector('.catalog__close');
const catalogFilter = document.querySelector('.catalog__left');
const body = document.body;

if (filtersBtn && closeBtn && catalogFilter) {
  filtersBtn.addEventListener('click', () => {
    catalogFilter.classList.add('open');
    body.classList.add('lock');
  });

  closeBtn.addEventListener('click', () => {
    catalogFilter.classList.remove('open');
    body.classList.remove('lock');
  });

  document.addEventListener('click', (event) => {
    if (!catalogFilter.contains(event.target) && !filtersBtn.contains(event.target) && catalogFilter.classList.contains('open')) {
      catalogFilter.classList.remove('open');
      body.classList.remove('lock');
    }
  });
}

//  інпут маска 
if (document.querySelectorAll('.phone-mask').length) {
  document.querySelectorAll('.phone-mask').forEach(input => {
    IMask(input, {
      mask: '+{38}(000)000-00-00'
    });
  });
}