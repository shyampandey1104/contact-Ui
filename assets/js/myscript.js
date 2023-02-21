$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        items: 3,
        loop: true,
        autoplay: 3000, // time for slides changes

        smartSpeed: 1000, // duration of change of 1 slide
        dots:true,
        // margin:10,
        center:true,
        nav:false, 
        responsive:{
            0:{
                items:1
            },
            767:{
                items:1
            },
            1000:{
                items:1
            }
        }   
    });

});
