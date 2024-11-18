
(function ($) {
    "use strict"; // Start of use strict
    // // Configure tooltips for collapsed side navigation
    //$('.navbar-sidenav [data-toggle="tooltip"]').tooltip({
    //    template: '<div class="tooltip navbar-sidenav-tooltip" role="tooltip" style="pointer-events: none;"><div class="arrow"></div><div class="tooltip-inner"></div></div>'
    //})
    // Toggle the side navigation
    //$("#sidenavToggler").click(function (e) {
    //    e.preventDefault();
    //    $("body").toggleClass("sidenav-toggled");
    //    $(".navbar-sidenav .nav-link-collapse").addClass("collapsed");
    //    $(".navbar-sidenav .sidenav-second-level, .navbar-sidenav .sidenav-third-level").removeClass("show");
    //});
    // Force the toggled class to be removed when a collapsible nav link is clicked
    //$(".navbar-sidenav .nav-link-collapse").click(function (e) {
    //    e.preventDefault();
    //    $("body").removeClass("sidenav-toggled");
    //});
    // Prevent the content wrapper from scrolling when the fixed side navigation hovered over
    //$('body.fixed-nav .navbar-sidenav, body.fixed-nav .sidenav-toggler, body.fixed-nav .navbar-collapse').on('mousewheel DOMMouseScroll', function (e) {
    //    var e0 = e.originalEvent,
    //        delta = e0.wheelDelta || -e0.detail;
    //    this.scrollTop += (delta < 0 ? 1 : -1) * 30;
    //    e.preventDefault();
    //});
    // Scroll to top button appear
    // $(document).scroll(function() {
    //   var scrollDistance = $(this).scrollTop();
    //   if (scrollDistance > 100) {
    //     $('.scroll-to-top').fadeIn();
    //   } else {
    //     $('.scroll-to-top').fadeOut();
    //   }
    // });
    // Configure tooltips globally
    $('[data-toggle="tooltip"]').tooltip()
    // Smooth scrolling using jQuery easing
    // $(document).on('click', 'a.scroll-to-top', function(event) {
    //   var $anchor = $(this);
    //   $('html, body').stop().animate({
    //     scrollTop: ($($anchor.attr('href')).offset().top)
    //   }, 1000, 'easeInOutExpo');
    //   event.preventDefault();
    // });

    //$(document).on('click', '#ToggleThem', function () {
    //    $('body').toggleClass("bg-dark")
    //    $('body').toggleClass("bg-light")
    //    //
    //    if ($('body').hasClass("bg-dark")) {
    //        localStorage.setItem("UserThem", 'dark')
    //    }
    //    if ($('body').hasClass("bg-light")) {
    //        localStorage.setItem("UserThem", 'light')
    //    }
    //})

    //$(document).on('click', '#HomePopUP', function () {
    //    $('#HomePopUPContent').toggle()
    //})

    //$(document).on('click', '#BtnAdmindropdown', function () {
    //    $('#Admindropdown').toggle()
    //})


    //let UserThem = localStorage.getItem("UserThem")
    //if (UserThem != undefined && UserThem != "") {
    //    if (UserThem == "light") {
    //        $('body').removeClass("bg-dark")
    //        $('body').addClass("bg-light")
    //    }
    //    if (UserThem == "dark") {
    //        $('body').removeClass("bg-light")
    //        $('body').addClass("bg-dark")
    //    }
    //}


    let cookie = `${document.cookie}`

    console.log(cookie.includes('ar-EG'))


    if (cookie.includes('ar-EG')) {


        $('html').attr("dir", 'rtl')
        $('html').attr('lang', 'ar')

    } else {


        $('html').attr("dir", 'ltr')
        $('html').attr('lang', 'en')
    }



    //$(document).on('mouseenter', 'body.sidenav-toggled li.nav-item', function () {
    //   // console.log($(this).offset())
    //    //console.log($(this).children().offset()) 
    //    let offset = $(this).offset()       
    //    $(this).children().css("top", `${offset.top - 60}px`)
    //    //$('body.sidenav-toggled #mainNav').hide()
    //    /*$('body.sidenav-toggled #mainNav').css("overflow-y", `hidden`)*/
    //    console.log('دخل في  الابن')
    //})
    //$(document).on('mouseenter', 'body.sidenav-toggled ul.sidenav-second-level li.nav-item', function () {
    //    let offset = $(this).offset()       
    //    $(this).children().css("top", `${offset.top - 60}px`)
    //    let HtmlLang = $('html').attr('lang')

    //    console.log(HtmlLang)

    //    if (HtmlLang == 'ar') {
    //        $(this).children().css("right", `285px`)

    //    }
    //    if (HtmlLang == 'en') {
    //        $(this).children().css("left", `270px`)

    //    }

    //    console.log('دخل في ابن الابن')

    //})



})(jQuery); // End of use strict