$(document).ready(function(){
    $(window).on('load scroll',function(){
        if($(window).scrollTop() > 60){
            $('header .header-2').addClass('header-active');
        }
    })
})