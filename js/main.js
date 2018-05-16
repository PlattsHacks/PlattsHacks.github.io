(function($) {
    function particleInit() {
        particlesJS.load('particles-js', '/particles.json', function() {
            console.log("particles js loaded");
        });
    }

    function scrollInit() {
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
    }

    function mmenu() {
        $("#navbar").mmenu({
        	extensions: ["fx-menu-slide", "pagedim-black", "theme-dark", "position-right"]
        });

        var API = $("#navbar").data("mmenu");

        $("#menu-mobile-button").click(function() {
            API.open();
        });
    }

    $(document).ready(function(){
        particleInit();
        scrollInit();
        mmenu();
    });

})(jQuery);
