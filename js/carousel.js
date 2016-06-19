(function() {
    $(document).ready(function(){
      $('.food--carousel').slick({
        infinite: false,
        slidesToShow: 3.5,
        nextArrow: '<i class="fa fa-chevron-right fa-5x food--arrow" aria-hidden="true"></i>',
        prevArrow: '<i class="fa fa-chevron-left fa-5x food--arrow" aria-hidden="true"></i>'
      });
    })
})();
