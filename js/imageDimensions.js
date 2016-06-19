;(function(){
    $(document).ready(function(){
        setImageDimensions();
    });

    $(window).resize(function(){
        setImageDimensions();
    });

    function setImageDimensions(){
        var extraPixels = 0,
            browserWidth = $(window).width(),
            browserHeight = $(window).height() + extraPixels;

        if(navigator.userAgent.indexOf('iPhone') != -1) {
          extraPixels = 60;
        }


        $('.section').each(function() {
            if($(this).height() < browserHeight) {
                $(this).css('height', browserHeight);
            }
            $(this).css('width', browserWidth);
        });
    }
})();
