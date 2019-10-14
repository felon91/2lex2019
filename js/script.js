$(document).ready(function () {
  $('.carousel').owlCarousel({
    margin: 10,
    //autoWidth: true,
    nav: true,
    items: 1,
    dots: false,
    stagePadding: 20,
    navText: ['<svg class="arrow" width="25" height="44" viewBox="0 0 25 44">\n' +
    '<path d="M3.56071 44C2.85569 43.997 2.16727 43.7793 1.58201 43.3743C0.99674 42.9694 0.540745 42.3953 0.271344 41.7241C0.00194313 41.053 -0.0688418 40.3147 0.0678921 39.6023C0.204626 38.8898 0.542776 38.2349 1.03983 37.7198L16.3797 21.8995L1.03983 6.07931C0.454031 5.37467 0.147925 4.46827 0.182685 3.54124C0.217446 2.61422 0.590511 1.73484 1.22733 1.07885C1.86414 0.422853 2.71781 0.038554 3.61773 0.00274702C4.51766 -0.03306 5.39755 0.282262 6.0816 0.885702L23.9602 19.3027C24.6262 19.9929 25 20.9264 25 21.8995C25 22.8727 24.6262 23.8062 23.9602 24.4963L6.0816 42.9134C5.4141 43.6051 4.50752 43.9959 3.56071 44Z"/>\n' +
    '</svg>', '<svg class="arrow" width="25" height="44" viewBox="0 0 25 44">\\n\' +\n' +
    '      \'<path d="M3.56071 44C2.85569 43.997 2.16727 43.7793 1.58201 43.3743C0.99674 42.9694 0.540745 42.3953 0.271344 41.7241C0.00194313 41.053 -0.0688418 40.3147 0.0678921 39.6023C0.204626 38.8898 0.542776 38.2349 1.03983 37.7198L16.3797 21.8995L1.03983 6.07931C0.454031 5.37467 0.147925 4.46827 0.182685 3.54124C0.217446 2.61422 0.590511 1.73484 1.22733 1.07885C1.86414 0.422853 2.71781 0.038554 3.61773 0.00274702C4.51766 -0.03306 5.39755 0.282262 6.0816 0.885702L23.9602 19.3027C24.6262 19.9929 25 20.9264 25 21.8995C25 22.8727 24.6262 23.8062 23.9602 24.4963L6.0816 42.9134C5.4141 43.6051 4.50752 43.9959 3.56071 44Z"/>\\n\' +\n' +
    '      \'</svg>'],
    mouseDrag: false,
    responsive: {
      580: {
        items: 2,
      },
      780: {
        stagePadding: 30,
        items: 2,
      },
      980: {
        touchDrag: false,
        stagePadding: 30,
        items: 3,
      },
      1170: {
        items: 3,
        stagePadding: 30,
      }
    }
  });
  $('.case__carousel').owlCarousel({
    margin: 10,
    nav: true,
    items: 1,
    dots: false,
    stagePadding: 20,
    navText: ['<svg class="arrow" width="25" height="44" viewBox="0 0 25 44">\n' +
    '<path d="M3.56071 44C2.85569 43.997 2.16727 43.7793 1.58201 43.3743C0.99674 42.9694 0.540745 42.3953 0.271344 41.7241C0.00194313 41.053 -0.0688418 40.3147 0.0678921 39.6023C0.204626 38.8898 0.542776 38.2349 1.03983 37.7198L16.3797 21.8995L1.03983 6.07931C0.454031 5.37467 0.147925 4.46827 0.182685 3.54124C0.217446 2.61422 0.590511 1.73484 1.22733 1.07885C1.86414 0.422853 2.71781 0.038554 3.61773 0.00274702C4.51766 -0.03306 5.39755 0.282262 6.0816 0.885702L23.9602 19.3027C24.6262 19.9929 25 20.9264 25 21.8995C25 22.8727 24.6262 23.8062 23.9602 24.4963L6.0816 42.9134C5.4141 43.6051 4.50752 43.9959 3.56071 44Z"/>\n' +
    '</svg>', '<svg class="arrow" width="25" height="44" viewBox="0 0 25 44">\\n\' +\n' +
    '      \'<path d="M3.56071 44C2.85569 43.997 2.16727 43.7793 1.58201 43.3743C0.99674 42.9694 0.540745 42.3953 0.271344 41.7241C0.00194313 41.053 -0.0688418 40.3147 0.0678921 39.6023C0.204626 38.8898 0.542776 38.2349 1.03983 37.7198L16.3797 21.8995L1.03983 6.07931C0.454031 5.37467 0.147925 4.46827 0.182685 3.54124C0.217446 2.61422 0.590511 1.73484 1.22733 1.07885C1.86414 0.422853 2.71781 0.038554 3.61773 0.00274702C4.51766 -0.03306 5.39755 0.282262 6.0816 0.885702L23.9602 19.3027C24.6262 19.9929 25 20.9264 25 21.8995C25 22.8727 24.6262 23.8062 23.9602 24.4963L6.0816 42.9134C5.4141 43.6051 4.50752 43.9959 3.56071 44Z"/>\\n\' +\n' +
    '      \'</svg>'],
    mouseDrag: false,
    responsive: {
      980: {
        margin: 10,
        touchDrag: false,
        items: 2,
        stagePadding: 40,
      },
      1170: {
        autoWidth: false,
        items: 2,
        stagePadding: 40,
      }
    }
  });
  $('.documents__carousel').owlCarousel({
    margin: 10,
    autoWidth: true,
    nav: true,
    items: 2,
    dots: false,
    navText: ['<svg class="arrow" width="25" height="44" viewBox="0 0 25 44">\n' +
    '<path d="M3.56071 44C2.85569 43.997 2.16727 43.7793 1.58201 43.3743C0.99674 42.9694 0.540745 42.3953 0.271344 41.7241C0.00194313 41.053 -0.0688418 40.3147 0.0678921 39.6023C0.204626 38.8898 0.542776 38.2349 1.03983 37.7198L16.3797 21.8995L1.03983 6.07931C0.454031 5.37467 0.147925 4.46827 0.182685 3.54124C0.217446 2.61422 0.590511 1.73484 1.22733 1.07885C1.86414 0.422853 2.71781 0.038554 3.61773 0.00274702C4.51766 -0.03306 5.39755 0.282262 6.0816 0.885702L23.9602 19.3027C24.6262 19.9929 25 20.9264 25 21.8995C25 22.8727 24.6262 23.8062 23.9602 24.4963L6.0816 42.9134C5.4141 43.6051 4.50752 43.9959 3.56071 44Z"/>\n' +
    '</svg>', '<svg class="arrow" width="25" height="44" viewBox="0 0 25 44">\\n\' +\n' +
    '      \'<path d="M3.56071 44C2.85569 43.997 2.16727 43.7793 1.58201 43.3743C0.99674 42.9694 0.540745 42.3953 0.271344 41.7241C0.00194313 41.053 -0.0688418 40.3147 0.0678921 39.6023C0.204626 38.8898 0.542776 38.2349 1.03983 37.7198L16.3797 21.8995L1.03983 6.07931C0.454031 5.37467 0.147925 4.46827 0.182685 3.54124C0.217446 2.61422 0.590511 1.73484 1.22733 1.07885C1.86414 0.422853 2.71781 0.038554 3.61773 0.00274702C4.51766 -0.03306 5.39755 0.282262 6.0816 0.885702L23.9602 19.3027C24.6262 19.9929 25 20.9264 25 21.8995C25 22.8727 24.6262 23.8062 23.9602 24.4963L6.0816 42.9134C5.4141 43.6051 4.50752 43.9959 3.56071 44Z"/>\\n\' +\n' +
    '      \'</svg>'],
    responsive: {
      1170: {
        items: 3
      }
    }
  });
  $('.office__carousel').owlCarousel({
    margin: 10,
    nav: true,
    items: 2,
    autoWidth: true,
    dots: false,
    navText: ['<svg class="arrow" width="25" height="44" viewBox="0 0 25 44">\n' +
    '<path d="M3.56071 44C2.85569 43.997 2.16727 43.7793 1.58201 43.3743C0.99674 42.9694 0.540745 42.3953 0.271344 41.7241C0.00194313 41.053 -0.0688418 40.3147 0.0678921 39.6023C0.204626 38.8898 0.542776 38.2349 1.03983 37.7198L16.3797 21.8995L1.03983 6.07931C0.454031 5.37467 0.147925 4.46827 0.182685 3.54124C0.217446 2.61422 0.590511 1.73484 1.22733 1.07885C1.86414 0.422853 2.71781 0.038554 3.61773 0.00274702C4.51766 -0.03306 5.39755 0.282262 6.0816 0.885702L23.9602 19.3027C24.6262 19.9929 25 20.9264 25 21.8995C25 22.8727 24.6262 23.8062 23.9602 24.4963L6.0816 42.9134C5.4141 43.6051 4.50752 43.9959 3.56071 44Z"/>\n' +
    '</svg>', '<svg class="arrow" width="25" height="44" viewBox="0 0 25 44">\\n\' +\n' +
    '      \'<path d="M3.56071 44C2.85569 43.997 2.16727 43.7793 1.58201 43.3743C0.99674 42.9694 0.540745 42.3953 0.271344 41.7241C0.00194313 41.053 -0.0688418 40.3147 0.0678921 39.6023C0.204626 38.8898 0.542776 38.2349 1.03983 37.7198L16.3797 21.8995L1.03983 6.07931C0.454031 5.37467 0.147925 4.46827 0.182685 3.54124C0.217446 2.61422 0.590511 1.73484 1.22733 1.07885C1.86414 0.422853 2.71781 0.038554 3.61773 0.00274702C4.51766 -0.03306 5.39755 0.282262 6.0816 0.885702L23.9602 19.3027C24.6262 19.9929 25 20.9264 25 21.8995C25 22.8727 24.6262 23.8062 23.9602 24.4963L6.0816 42.9134C5.4141 43.6051 4.50752 43.9959 3.56071 44Z"/>\\n\' +\n' +
    '      \'</svg>'],
    responsive: {
      780: {
        margin: 25,
      },
      1170: {
        margin: 25,
        mouseDrag: false,
      }
    }
  });
  $('.hamburger').on('click', function () {
    $('.hamburger').addClass('active');
    $('.menu').addClass('menu--active');
  });
  $('.menu__close').on('click', function () {
    $('.hamburger').removeClass('active');
    $('.menu').removeClass('menu--active');
  });
  $('.menu__switch').on('click', function (e) {
    if (!$(e.target).hasClass('active')) {
      $('.menu__switch button').removeClass('active');
      $(e.target).addClass('active');
      let type = $(e.target).attr('data-type');
      if (type === 'left') {
        $('.menu__left').show();
        $('.menu__right').hide();
      } else {
        $('.menu__right').show();
        $('.menu__left').hide();
      }

    }
  });
  $('.questions__buttons').on('click', function (e) {
    if (!$(e.target).hasClass('active')) {
      $('.questions__buttons button').removeClass('active');
      $(e.target).addClass('active');
    }
  });
  $('.way__buttons').on('click', function (e) {
    if (!$(e.target).hasClass('active')) {
      $('.way__buttons button').removeClass('active');
      $(e.target).addClass('active');
    }
  });
  $('.filter__block p a').on('click', function (e) {
    e.preventDefault();
    if (!$(this).hasClass('active')) {
      $('.filter__block p a').removeClass('active');
      $(this).addClass('active');
      let textValue = $(this).text();
      $('.filter-top').html(`
              <div class="filter-top__item">
                  <a href="#">
                  <img src="img/close-mini.svg" alt="">
                  </a>
                 <span>${textValue}</span>
              </div>`);
    }
  });
  $('.filter-top').on('click', '.filter-top__item a', function (e) {
    e.preventDefault();
    $(this).parents('.filter-top__item').remove();
    $('.filter__block p a').removeClass('active');
  });
  $('.mask').mask('+7 (999) 999-99-99');

  $('.header--sticky').sticky();

  function t602_init() {
    var t602_lastCall, t602_timeoutId, t602_interval = 100;
    $(window).scroll(function () {
      let t602_now = new Date().getTime();
      if (t602_lastCall && t602_now < (t602_lastCall + t602_interval)) {
        clearTimeout(t602_timeoutId);
        t602_timeoutId = setTimeout(function () {
          t602_lastCall = t602_now;
          t602_setProgressBarWidth()
        }, t602_interval - (t602_now - t602_lastCall))
      } else {
        t602_lastCall = t602_now;
        t602_setProgressBarWidth();
      }
    })
  }

  function t602_setProgressBarWidth(recid) {
    let t602_windowScrollTop = $(window).scrollTop(), t602_docHeight = $(document).height(),
        t602_winHeight = $(window).height(),
        t602_scrollPercent = (t602_windowScrollTop / (t602_docHeight - t602_winHeight)) * 100;
    $(".header__indicator").css('width', t602_scrollPercent + '%');
  }

  t602_init();
  $('.table-of-contents__title').on('click', function() {
    $('.table-of-contents').toggleClass('table-of-contents--active');
  });

  $('.filter__title').on('click', function() {
    $('.filter__block').toggleClass('filter__block--active');
  });

  $('.table-of-contents').onePageNav({
    currentClass: 'table-of-contents__element--active'
  });

  $('.airSticky').airStickyBlock({
    debug: false,
    stopBlock: '.airSticky_stop-block',
    offsetTop: 60
  });

  $('.comments__answer').on('click', function (e) {
    e.preventDefault();
    $('.comments__textarea--child').remove();
    let html = `<div class="comments__textarea comments__textarea--child">
                  <textarea name="text" placeholder="Написать комментарий..."></textarea>
                  <button class="comments__cancel">Отмена</button>
                  <button class="comments__submit">Отправить</button>
                </div>`;
    $(this).after(html);
  });

  $('.comments__item').on('click', '.comments__textarea--child .comments__cancel', function (e) {
    $(this).parents('.comments__textarea--child').remove();
  });

  var inputs = document.querySelectorAll('.contacts-form__file input');
  Array.prototype.forEach.call(inputs, function(input){
    var label	 = input.nextElementSibling,
        labelVal = label.innerHTML;
    input.addEventListener('change', function(e){
      var fileName = '';
      if( this.files && this.files.length > 1 )
        fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
      else
        fileName = e.target.value.split( '\\' ).pop();
      if( fileName )
        label.querySelector( 'span' ).innerHTML = fileName;
      else
        label.innerHTML = labelVal;
    });
  });

  $('.container').on("click", '.contacts__office a', function (e) {
    e.preventDefault();
      $(".form-modal--office").addClass('form-modal--active');
  });

  $('.container').on("click", '.contacts__address a', function (e) {
    e.preventDefault();
      $(".form-modal--way").addClass('form-modal--active');
  });

  $('.container').on("click", '.modal-form', function (e) {
    e.preventDefault();
      $(".form-modal--form").addClass('form-modal--active');
  });

  $('.container').on("click", '.form-modal__center', function (e) {
    if ($(e.target).hasClass('form-modal__center')) {
      $(".form-modal").removeClass('form-modal--active');
    }
  });

  $('.container').on("click", '.form-modal__close', function (e) {
    e.preventDefault();
    $(".form-modal").removeClass('form-modal--active');
  });

});