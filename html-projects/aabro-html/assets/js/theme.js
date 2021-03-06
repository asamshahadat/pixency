// -----------------------------

//   js index
/* =================== */
/*  
    

    

*/
// -----------------------------


(function($) {
    "use strict";



    /*---------------------
    preloader
    --------------------- */

    $(window).on('load', function() {
        $('#preloader').fadeOut('slow', function() { $(this).remove(); });
    });


    
    /*-----------------
    sticky
    -----------------*/
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 85) {
            $('header').addClass('navbar-fixed-top');
        } else {
            $('header').removeClass('navbar-fixed-top');
        }
    });

    /*-----------------
    scroll-up
    -----------------*/
    $.scrollUp({
        scrollText: '<i class="fa fa-arrow-up" aria-hidden="true"></i>',
        easingType: 'linear',
        scrollSpeed: 1500,
        animation: 'fade'
    });

    /*------------------------------
         counter
    ------------------------------ */
    // $('.counter-up').counterUp();


    /*---------------------
    smooth scroll
    --------------------- */
    $('.smoothscroll').on('click', function(e) {
        e.preventDefault();
        var target = this.hash;

        $('html, body').stop().animate({
            'scrollTop': $(target).offset().top - 80
        }, 1200);
    });


    /*---------------------
    countdown
    --------------------- */
    $('[data-countdown]').each(function() {
        var $this = $(this),
            finalDate = $(this).data('countdown');
        $this.countdown(finalDate, function(event) {
            $this.html(event.strftime('<span class="cdown days"><span class="time-count">%-D</span> <p>Days</p></span> <span class="cdown hour"><span class="time-count">%-H</span> <p>Hour</p></span> <span class="cdown minutes"><span class="time-count">%M</span> <p>Min</p></span> <span class="cdown second"> <span><span class="time-count">%S</span> <p>Sec</p></span>'));
        });
    });

    /*---------------------
    Testimonial carousel
    --------------------- */
    function testimonial_carousel() {
        var owl = $(".testimonial-carousel");
        owl.owlCarousel({
            loop: true,
            margin: 30,
            responsiveClass: true,
            navigation: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            nav: true,
            items: 5,
            smartSpeed: 2000,
            dots: true,
            autoplay: true,
            autoplayTimeout: 4000,
            center: false,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                1200: {
                    items: 2
                }
            }
        });
    }
    testimonial_carousel(); 

    // Testimonial Video Play Pause On click
    $('#testimonialVideoPopup').on('hidden.bs.modal', function () {
        $('#testimonial-vid-1').trigger('pause'); 
    }) 
    $('#testimonialVideoPopup').on('show.bs.modal', function () {
        $('#testimonial-vid-1').trigger('play');
    });


    // Init Wow jS 
    if ($('.wow').length > 0) {
        new WOW().init();
    }


    // Category Menu And Filter Click Event On Click
    $('.mobilecategorybtn').on('click', function(){
        $('.aabro-resource-filter-area').addClass('showMobileCat');
        $('.closeMobileCatFilter').addClass('showMobileCatCloseIcon');
    });
    $('.mobilefilter-btn').on('click', function(){
        $('.aabbro-category').addClass('showMobileCat');
        $('.closeMobileCatFilter').addClass('showMobileCatCloseIcon');
    });

    $('.closeMobileCatFilter').on('click', function(){
        $('.aabro-resource-filter-area').removeClass('showMobileCat');
        $('.aabbro-category').removeClass('showMobileCat');
        $('.closeMobileCatFilter').removeClass('showMobileCatCloseIcon');
    });
    
    $('.filter-submit-btn').on('click', function(){
        $('ul.filter-lists').toggleClass('hide');
         
    });



    $('.toggle-password').click(function(){
        $(this).children().toggleClass('mdi-eye-outline mdi-eye-off-outline');
        let input = $(this).prev();
        input.attr('type', input.attr('type') === 'password' ? 'text' : 'password');
    });





    // Mobile Nav JS Toggle
    $(".dashboard-header button.navbar-toggler").on("click", function(){
        $(".dash-board-mobile-menu ").addClass("showInMobile");
    });
    $(".close-dm").on("click", function(){
        $(".dash-board-mobile-menu ").removeClass("showInMobile");
        $(".dashboard-sidebar ").removeClass("showInMobile");
    });
     

    $(".sidemenu-toggler button.navbar-toggler").on("click", function(){
        $(".dashboard-sidebar ").addClass("showInMobile");
        
    });
    


    // Data Table
    $(window).on("load", function () {
        
        if ($('#supportTicketTable').length > 0) {
            $('#supportTicketTable').DataTable();
        }
    });




    // Service Carousel
   

    


    function servicehero_carousel() {
        var owl = $(".service-carousel");
        owl.owlCarousel({
            loop: true,
            margin: 0,
            responsiveClass: true,
            navigation: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            nav: false,
            items: 5,
            smartSpeed: 2000,
            dots: true,
            autoplay: false,
            autoplayTimeout: 4000,
            center: false,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                760: {
                    items: 1
                }
            }
        });

        $('.owl-dot-service').click(function () {
            owl.trigger('to.owl.carousel', [$(this).index(), 300]);
        });
    }
    servicehero_carousel(); 

    



     /*---------------------
    Client carousel
    --------------------- */
    function sclient_carousel() {
        var owl = $(".client-carousel");
        owl.owlCarousel({
            loop: true,
            margin: 20,
            responsiveClass: true,
            navigation: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            nav: false,
            items: 1,
            smartSpeed: 2000,
            dots: true,
            autoplay: false,
            autoplayTimeout: 4000,
            center: false,
            responsive: {
                0: {
                    items: 2,
                    center: true
                },
                768: {
                    items: 3
                },
                1200: {
                    items: 5
                }
            }
        });
    }
    sclient_carousel(); 
    


    // Gallery Carousel Slider 
    $("a.carousel-control-next").on("click",function(){ 
        var parentofslide = $('.product-gallary-carousel .carousel-inner').children();
        var i = $(parentofslide).filter('.active').index();
        $(parentofslide[i]).removeClass('active');
        $(parentofslide[(i+1)%parentofslide.length]).addClass('active'); 
    });

    $("a.carousel-control-prev").on("click",function(){ 
        //alert("prev");
       var prevCustSlide = $(".product-gallary-carousel .carousel-inner .carousel-item.active").prev();

       if ($(".product-gallary-carousel .carousel-inner .carousel-item.active").prev().length === 0) {
            console.log("No Prev Slide Available");
            $(".product-gallary-carousel .carousel-inner .carousel-item:last-child").addClass("active"); 
        }else {
            $(".product-gallary-carousel .carousel-inner .carousel-item").removeClass("active"); 
        } 
        prevCustSlide.addClass('active');
    });


    $("#custCarousel .carousel-indicators li a").on("click", function(){
        var custslidenumber = $(this).attr("id").replace('carousel-selector-','');
        var custNumberFinal = parseInt(custslidenumber) + 1;
        // alert(custNumberFinal);
         $(".product-details-area .product-gallary-carousel .carousel-item").removeClass("active");
         $(".product-details-area .product-gallary-carousel .carousel-item:nth-child("+custNumberFinal+")").addClass("active");
    }); 
    // Gallery Carousel Slider End


}(jQuery));
