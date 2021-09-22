 (function($) {
   "use strict"; // Start of use strict

   $(window).load(function() {

     /* Initialises all js code */
     $(".page-loader div").fadeOut();
     $(".page-loader").delay(200).fadeOut("slow");


     /* image slider on the 'Explore Art' pages */

     $('.fr-slider').fractionSlider({
       'fullWidth': true,
       'slideTransition': 'fade',
       'slideTransitionSpeed': 650,
       'slideEndAnimation': false,
       'controls': false,
       'pager': true,
       'speedOut': 2600,
       'timeout': 6000,
       'responsive': true,
       'increase': true,
       'dimensions': '1170 , 600',
     });

     var viewportWidth = $(window).width();
     var colWidth = $(".fraction-slider").width();
     var viewportHeight = $(window).height();
     var divideval = 2;
     var marginslidebg = (viewportWidth - colWidth) / divideval + 2;

     $(".slide-bg").css({
       "width": viewportWidth,
       "max-width": viewportWidth,
       "margin-left": "-" + marginslidebg + "px",
     });

     $(window).resize(function() {
       /* Resizing the images in the slider */
       $(".slide-bg").css({
         "width": viewportWidth,
         "max-width": viewportWidth,
         "margin-left": "-" + marginslidebg + "px",
       });

     });

     var $container = jQuery('.portfolio');
     $container.isotope({
       filter: '*',
       animationOptions: {
         duration: 750,
         easing: 'linear',
         queue: false,
       }
     });
     jQuery('.port-filter li a').click(function() {
       jQuery('.port-filter li').removeClass('active');
       jQuery(this).parent().addClass('active');

       var selector = jQuery(this).attr('data-filter');
       $container.isotope({
         filter: selector,
         animationOptions: {
           duration: 750,
           easing: 'linear',
           queue: false
         },
       });
       return false;
     });
     $container.isotope('layout');

     /******** append Portfolio item on click *******/
     $('.append-button').on('click', function() {
       // create new item elements 
       var $item_height = $('.gallery-portfolio .project-item').height();
       var $items = $('<div class="project-item  illustration" style="height:' + $item_height + 'px;"><div class="project-image"><img src="../images/gallery/i3.jpg" alt=""><div class="overlay"><div class="content-wrap"><div class="overlay-content"><h3><a href="../single-portfolio.html">WIDE GALLERY</a></h3> <ul class="entry-cat"> <li><a href="#">Motion </a></li> <li><a href="#">Photography</a></li></ul></div></div></div></div></div> <div class="project-item  illustration"><div class="project-image"><img src="../images/gallery/i8.jpg" alt=""><div class="overlay"><div class="content-wrap"><div class="overlay-content"><h3><a href="../single-portfolio.html">WIDE GALLERY</a></h3> <ul class="entry-cat"> <li><a href="#">Motion </a></li> <li><a href="#">Photography</a></li></ul></div></div></div></div></div> <div class="project-item  illustration"><div class="project-image"><img src="../images/gallery/i9.jpg" alt=""><div class="overlay"><div class="content-wrap"><div class="overlay-content"><h3><a href="../single-portfolio.html">WIDE GALLERY</a></h3> <ul class="entry-cat"> <li><a href="#">Motion </a></li> <li><a href="#">Photography</a></li></ul></div></div></div></div></div>');

       // append items to grid
       $container.append($items)
         // add and lay out newly appended items
         .isotope('appended', $items);

       $(".append-button").remove(".append-button");
       $container.isotope('layout');

     });

   });


   $(document).ready(function() {


     /* Navigation bar */

     $('ul.sf-menu').superfish({
       animation: {
         height: 'show'
       }, // slide-down effect without fade-in
       delay: 100 // 1.2 second delay
     });


     /******** Header two menu button *******/

     $("#mobnav-btn").click(function() {
       $(".sf-menu").slideToggle("slow");
     });

     $('.mobnav-subarrow').click(

       function() {
         $(this).siblings(".sub-menu").toggleClass("sub-menu-open");
       });

     $("#search-label").click(function() {
       $(".search-bar").slideToggle("slow");
     });

     $('.nav-button, .overlay-content-wrap').on('click', function() {
       $('.nav-button').toggleClass("active");
       $('.menu-content').fadeToggle();
       $('.overlay-content-wrap').toggleClass("overlay-active");
       $('body').toggleClass("overflow-hidden-header-three");

       var height = $(window).height();
       $(".menu-content-wrap").css('height', height);

     });

     /* Navigation Bar View */

     // code to hide header while scrolling down
     var didScroll;
     var lastScrollTop = 0;
     var delta = 5;
     var navbarHeight = $('.header-inner').outerHeight();

     $(window).scroll(function(event) {
       didScroll = true;
     });

     setInterval(function() {
       if (didScroll) {
         hasScrolled();
         didScroll = false;
       }
     }, 250);

     function hasScrolled() {
       var st = $(window).scrollTop();
       
       var conterner_width = $('.inner-conterner').width();
       if (Math.abs(lastScrollTop - st) <= delta)
         return;

       if (st > lastScrollTop && st > navbarHeight) {
         // Scroll Down
         $('.header-inner').removeClass('header-scroll-fixed').addClass('header-scroll-up');
       } else {
         // Scroll Up 
         if (st + $(window).height() < $(document).height()) {

           $('.header-inner').removeClass('nav-up').addClass('header-scroll-fixed').css({
             "width": conterner_width,
           });

         }
       }

       if (st < 50) {
         $('.header-inner').removeClass('header-scroll-fixed').removeClass('header-scroll-up');
       }

       lastScrollTop = st;
     }

     /* js for the slider on the homepages */

     $("#owl-slide").owlCarousel({
       autoPlay: 3000,
       stopOnHover: true,
       navigation: false,
       paginationSpeed: 1000,
       goToFirstSpeed: 2000,
       singleItem: true,
       autoHeight: true,
     });

     //owl slider
     var owl = $("#owl-single-port");
     owl.owlCarousel({
       navigation: false, // Show next and prev buttons
       slideSpeed: 1000,
       autoPlay: 100000000,
       paginationSpeed: 2000,
       singleItem: true,
       pagination: false,
     });

     $(".next").click(function() {
       owl.trigger('owl.next');
     })
     $(".prev").click(function() {
       owl.trigger('owl.prev');
     })

     function SetResizeContent() {
       var minheight = $(window).height();
       $(".full-screen").css({'min-height': minheight, 'height': minheight});
     }
     SetResizeContent();

     var owl = $("#client-list-slide");
     owl.owlCarousel({
       items: 5, 
       itemsDesktop: [1000, 5], 
       itemsDesktopSmall: [900, 3], 
       itemsTablet: [600, 2], 
       pagination: false,
       itemsMobile: true 
     });

     $(".next").click(function() {
       owl.trigger('owl.next');
     })
     $(".prev").click(function() {
       owl.trigger('owl.prev');
     })


     $('#cbox').jflickrfeed({
       limit: 6,
       qstrings: {
         id: '23588458@N00'
       },
       itemTemplate: '<li>' +
         '<a href="{{image_b}}" title="{{title}}">' +
         '<img src="{{image_q}}" alt="{{title}}" />' +
         '</a>' +
         '</li>'
     });

   });

   /* js for the functionality of the boxes on the bottom of the homepage */
   var wow = new WOW({
     boxClass: 'wow', 
     animateClass: 'animated',
     offset: 50,
     mobile: false
   });
   wow.init();



 })(jQuery)
