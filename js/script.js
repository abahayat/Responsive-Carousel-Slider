$(document).ready(function(){
    
    /* owl carousl */
    $('.owl-carousel').owlCarousel({
        margin: 15,
        loop: true,
        autoplay: true,
        responsiveClass: true,
        responsiveRefreshRate: true,
        responsive: {
            0: {
                items: 1
            },
            578: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 3
            }
        }
    });
    
    /* wow */
    new WOW().init();
    
});