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

});