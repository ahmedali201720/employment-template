$(document).ready(function() {

    var swiper = new Swiper(".header-swiper", {

        spaceBetween: 30,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },

    });

    $('#userNum').counterUp({
        delay: 10,
        time: 2000
    });

    $('#jobNum').counterUp({
        delay: 10,
        time: 2000
    });

    $('#holdersNum').counterUp({
        delay: 10,
        time: 2000
    });

    $('#hoursNum').counterUp({
        delay: 10,
        time: 1000
    });

    // How To Section

    const howToWaypoints = $('#howToSection').waypoint(function(direction) {
        $("#howToSection").find('.item').css({
            'transform': 'scale(1)'
        })
    }, {
        offset: '100%'
    })

    const categorySection = $('#categoriesSection .item').waypoint(function(direction) {
        $('#categoriesSection .item').css({
            'transform': 'scale(1)'
        })
    }, {
        offset: '100%'
    })

    const infoSection = $('#infoSection .list').waypoint(function(direction) {
        $('#infoSection *').css({
            'transform': 'scale(1)'
        })
    }, {
        offset: '90%'
    })

    const blogSection = $('#blogSection .blog-item').waypoint(function(direction) {
        $('#blogSection .section-head').css({
            'transform': 'scale(1)'
        })
        $('#blogSection .blog-item').css({
            'transform': 'scale(1)'
        })
    }, {
        offset: '100%'
    })

    const companySection = $('#companySection .item').waypoint(function(direction) {
        $('#companySection .section-head').css({
            'transform': 'scale(1)'
        })
        $('#companySection .item').css({
            'transform': 'scale(1)'
        })
    }, {
        offset: '100%'
    })

    const authSection = $('#authSection .form-content').waypoint(function(direction) {
        $('#authSection .form-content').css({
            'transform': 'scale(1)'
        })
    }, {
        offset: '100%'
    })

    var testSwiper = new Swiper(".testomonial-swiper", {
        direction: "horizontal",
        loop: true,
        center: true,
        preloadImages: false,
        lazy: true,
        keyboard: {
            enabled: true,
        },
        autoplay: {
            delay: 2500
        },
        navigation: {
            nextEl: ".testomonial-swiper .swiper-button-next",
            prevEl: ".testomonial-swiper .swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 50,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 50,
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 60,
            }
        }
    });

    var jobsSwiper = new Swiper(".jobs-swiper", {
        direction: "horizontal",
        loop: true,
        center: true,
        preloadImages: false,
        lazy: true,
        keyboard: {
            enabled: true,
        },
        autoplay: {
            delay: 3500
        },
        navigation: {
            nextEl: ".jobs-section .swiper-button-next",
            prevEl: ".jobs-section .swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
            992: {
                slidesPerView: 1.2,
                spaceBetween: 20,
            },
            1200: {
                slidesPerView: 2,
                spaceBetween: 20,
            }
        }
    });

    var blogsSwiper = new Swiper(".blogs-swiper", {
        direction: "horizontal",
        loop: true,
        center: true,
        preloadImages: false,
        lazy: true,
        keyboard: {
            enabled: true,
        },
        autoplay: {
            delay: 3500
        },
        navigation: {
            nextEl: ".blogs-section .swiper-button-next",
            prevEl: ".blogs-section .swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
            576: {
                slidesPerView: 1.5,
                spaceBetween: 30,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 40,
            }
        }
    });


});