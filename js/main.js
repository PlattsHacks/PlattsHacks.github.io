(function($) {
    function particleInit() {
      // only enable particlesjs if the container is presented
      if ($('#particles-js').length != 0) {
        particlesJS.load('particles-js', '/particles.json', function() {
            console.log("particles js loaded");
        });
      }
    }

    function scrollInit() {
      $("a").on('click', function(event) {
        if (this.hash !== "" && $(this.hash).length != 0) {
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
        "iconbar": {
          "add": true,
          "top": [
            '<a href="https://www.facebook.com/PlattsHack/"><i class="fab fa-facebook-square"></i></a>',
          ]
        },
      	extensions: ["fx-menu-slide", "pagedim-black", "theme-dark", "position-right"]
      });

      var API = $("#navbar").data("mmenu");

      $("#menu-mobile-button").click(function() {
        API.open();
      });
    }

    function loadBackground() {
      setTimeout(function() {
        $('.hero').css({
          'opacity': '1'
        });
      }, 500);
    }

    function masonryInit() {
      if ($('.grid').length != 0) {
        $('.grid').masonry({
          itemSelector: '.grid-item',
          columnWidth: '.grid-sizer',
          percentPosition: true,
          gutter: 15
        });
      }
    }

    $(document).ready(function(){
        particleInit();
        scrollInit();
        mmenu();
        loadBackground();
        masonryInit();
    });

})(jQuery);
