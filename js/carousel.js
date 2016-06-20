(function() {
    $(document).ready(function(){
      $('.food--carousel').slick({
        infinite: false,
        slidesToShow: 3.5,
        nextArrow: '<img src="images/arrow.png" class="food--arrow food--arrow-right" aria-hidden="true" />',
        prevArrow: '<img src="images/arrow.png" class="food--arrow food--arrow-left" aria-hidden="true" />',
        'responsive': [
            {
                'breakpoint': 800,
                'settings': {
                    'slidesToShow': 2.5,
                }
            },
            {
                'breakpoint': 600,
                'settings': {
                    'slidesToShow': 1.5,
                }
            },
        ],
      });
    })
})();
