"use strict";

$(function(){



    //$("body").css("background-color", "yellow");
    $("body").css("background-color", "rgba(50,180,30)");
    //$("body").addClass("bg-primary");
    $(".row").addClass("bg-warning");
    $("p").first().css("background-color", "pink");
    $("body").animate({
        backgroundColor: "red"
    },10000)

});
