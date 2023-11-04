$(document).ready(function(){
    console.log("loaded")
    $(window).on('load scroll',function(){
        console.log("here")
        if($(window).scrollTop() > 60){
            $('.header-2').addClass('header-active');
        }else{
            $('.header-2').removeClass('header-active');
        }
    })
})