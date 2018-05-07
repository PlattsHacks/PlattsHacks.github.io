(function($) {
    particlesJS.load('particles-js', '/particles.json', function() {
        console.log('callback - particles.js config loaded');
    });

    $(document).ready(function(){
        $("a").on('click', function(event) {

            if (this.hash !== "") {
                event.preventDefault();

                var hash = this.hash;

                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 800, function(){
                    window.location.hash = hash;
                });
            }
        });


        $("#navbar").mmenu({
        	extensions: ["fx-menu-slide", "pagedim", "theme-dark", "position-right"]
        });
        var API = $("#navbar").data("mmenu");

        $("#menu-mobile-button").click(function() {
            API.open();
        });
    });

})(jQuery);
