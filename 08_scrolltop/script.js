$(function (){
    //jqueryを記述
    $(window).scroll(function(){
        $("p").html("Scroll:" + $(window).scrollTop() + "px")
    });
});