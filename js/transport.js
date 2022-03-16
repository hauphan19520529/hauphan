$(document).ready(function(){
    $('.card-container').slick({
      isFinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      variableWidth: false,
      prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fas fa-chevron-circle-left'></i></button>",
      nextArrow:"<button type='button' class='slick-next pull-right'><i class='fas fa-chevron-circle-right'></i></button>",
      responsive: [
        {
          breakpoint: 1276,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
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
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
      });

});