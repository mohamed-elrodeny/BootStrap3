$(document).ready(function(){

    "use strict";
    //nice scroll
    $("html").niceScroll({
        zindex: "9999"
    });

    $('.carousel').carousel({
        interval:5000
    });

    $(".gear-check").click(function(){
        $(".color-option").fadeToggle();
    });

    var ColorLi = $('.color-option ul li');

    ColorLi
        .eq(0).css("backgroundColor","#E41B17").end()
        .eq(1).css("backgroundColor","#951385").end()
        .eq(2).css("backgroundColor","#8f550d").end()
        .eq(3).css("backgroundColor","#0895D1");

    ColorLi.click(function(){

       $("link[href*='theme']").attr("href",$(this).attr("data-value"));
    });

    var scrollButton = $("#scroll-top");

    $(window).scroll(function(){
        //$(this).scrollTop() >= 700 ? scrollButton.show():  scrollButton.hide();

        if ($(this).scrollTop() >= 700){
            scrollButton.show();
        }
        else {
            scrollButton.hide();
        }
    });

    scrollButton.click(function(){

        $("html,body").animate({scrollTop : 0},10000)
    });

});




$(window).on('load',function(){

    $('.loading-overlay .spinner').fadeOut(2000,function(){

        $('body').css("overflow","auto");
        $(this).parent().fadeOut(2000,function(){
            $(this).remove();
        });
    });
});