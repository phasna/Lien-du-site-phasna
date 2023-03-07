$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });

    $(window).on('scroll load',function(){
        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');

        if($(window).scrollTop() > 0 ){
            $('.top').show();
        }else{
            $('.top').hide();
        }

    });


    // smooth scrolling 

    $('a[href*="#"]').on('click' ,function(e){

        e.preventDefault();

        $('html, body').animate({

            scrollTop : $($(this).attr('href')).offset().top,

        },
        200,
        'linear'
        );

    });

});

    // background

var video = document.getElementById("background-video");

var btn = document.getElementById("btnVideo");

 

function playAndPause () {

if (video.paused) {

video.play();

btn.innerHTML = "Pause II";

} else {

video.pause();

btn.innerHTML = "Play ▶";

}

}