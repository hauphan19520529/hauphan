/**
* Template Name: EstateAgency - v4.6.0
* Template URL: https://bootstrapmade.com/real-estate-agency-bootstrap-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

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

});
 

function toggleChevron(e) { 
  $(e.target)     .prev('.panel-heading') 
  .find("i.indicator")    
  .toggleClass('fa-caret-down fa-caret-right');   
}   

$('#accordion').on('hidden.bs.collapse', toggleChevron);    
$('#accordion').on('shown.bs.collapse', toggleChevron);

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

  
