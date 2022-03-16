var swiper = 
new Swiper('.swiper-container',{
  slidesPerView: '1',
  spaceBetween: 0,
  autoplay: false,
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows : true,
  },
  pagination: {
    el: '.swiper-pagination',
  },
  
});
$(document).ready(function(){
    
  $(function() {
      $('.place-card-1 .slide-show img:gt(0)').hide();
      setInterval(function(){
        $('.place-card-1 .slide-show :first-child').fadeOut()
        .next('img').fadeIn() 
        .end().appendTo('.place-card-1 .slide-show'); 
        }, 3000);
  })

  $(function() {
      $('.place-card-2 .slide-show img:gt(0)').hide();
      setInterval(function(){
        $('.place-card-2 .slide-show :first-child').fadeOut()
        .next('img').fadeIn() 
        .end().appendTo('.place-card-2 .slide-show'); 
        }, 3000);
  })

  $(function() {
      $('.place-card-3 .slide-show img:gt(0)').hide();
      setInterval(function(){
        $('.place-card-3 .slide-show :first-child').fadeOut()
        .next('img').fadeIn() 
        .end().appendTo('.place-card-3 .slide-show'); 
        }, 3000);
  })

  $(function() {
      $('.place-card-4 .slide-show img:gt(0)').hide();
      setInterval(function(){
        $('.place-card-4 .slide-show :first-child').fadeOut()
        .next('img').fadeIn() 
        .end().appendTo('.place-card-4 .slide-show'); 
        }, 3000);
  })

  $(function() {
      $('.place-card-5 .slide-show img:gt(0)').hide();
      setInterval(function(){
        $('.place-card-5 .slide-show :first-child').fadeOut()
        .next('img').fadeIn() 
        .end().appendTo('.place-card-5 .slide-show'); 
        }, 3000);
  })
  $(function() {
    $('.place-card-6 .slide-show img:gt(0)').hide();
    setInterval(function(){
      $('.place-card-6 .slide-show :first-child').fadeOut()
      .next('img').fadeIn() 
      .end().appendTo('.place-card-6 .slide-show'); 
      }, 3000);
  })

  $(function() {
    $('.place-card-7 .slide-show img:gt(0)').hide();
    setInterval(function(){
      $('.place-card-7 .slide-show :first-child').fadeOut()
      .next('img').fadeIn() 
      .end().appendTo('.place-card-7 .slide-show'); 
      }, 3000);
  })

  $(function() {
    $('.place-card-8 .slide-show img:gt(0)').hide();
    setInterval(function(){
      $('.place-card-8 .slide-show :first-child').fadeOut()
      .next('img').fadeIn() 
      .end().appendTo('.place-card-8 .slide-show'); 
      }, 3000);
  })

  $(function() {
    $('.place-card-9 .slide-show img:gt(0)').hide();
    setInterval(function(){
      $('.place-card-9 .slide-show :first-child').fadeOut()
      .next('img').fadeIn() 
      .end().appendTo('.place-card-9 .slide-show'); 
      }, 3000);
  })
  
  $(function() {
    $('.place-card-10 .slide-show img:gt(0)').hide();
    setInterval(function(){
      $('.place-card-10 .slide-show :first-child').fadeOut()
      .next('img').fadeIn() 
      .end().appendTo('.place-card-10 .slide-show'); 
      }, 3000);
  })

  $('.card-container').slick({
    isFinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fas fa-chevron-circle-left' aria-hidden='true'></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><i class='fas fa-chevron-circle-right' aria-hidden='true'></i></button>",
    responsive: [
      {
        breakpoint: 1276,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          inFinite: true,
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
    });
});

(function() {
    "use strict";
  
    /**
     * Easy selector helper function
     */
    const select = (el, all = false) => {
      el = el.trim()
      if (all) {
        return [...document.querySelectorAll(el)]
      } else {
        return document.querySelector(el)
      }
    }
  
    /**
     * Easy event listener function
     */
    const on = (type, el, listener, all = false) => {
      let selectEl = select(el, all)
      if (selectEl) {
        if (all) {
          selectEl.forEach(e => e.addEventListener(type, listener))
        } else {
          selectEl.addEventListener(type, listener)
        }
      }
    }
  
    /**
     * Easy on scroll event listener 
     */
    const onscroll = (el, listener) => {
      el.addEventListener('scroll', listener)
    }
  
    /**
     * Back to top button
     */
    let backtotop = select('.back-to-top')
    if (backtotop) {
      const toggleBacktotop = () => {
        if (window.scrollY > 100) {
          backtotop.classList.add('active')
        } else {
          backtotop.classList.remove('active')
        }
      }
      window.addEventListener('load', toggleBacktotop)
      onscroll(document, toggleBacktotop)
    }
  
    /**
     * Preloader
     */
    let preloader = select('#preloader');
    if (preloader) {
      window.addEventListener('load', () => {
        preloader.remove()
      });
    }
  })()

  
