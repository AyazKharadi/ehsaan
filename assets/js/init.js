(function($) {
    $(function() {
        $('.button-collapse').sideNav();
        //up
        $("#up").on('click', function(event) {
            event.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 700);
        });

    }); // end of document ready
})(jQuery); // end of jQuery name space
