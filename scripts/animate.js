"use strict";

$(function(){

    $("#pinkbox").animate({
        marginLeft: 200
    },2000)

    $("#greybox").animate({
        marginLeft: 200,
        height: 200
    },4000);

    $("#orangebox").animate({
        marginLeft: "+=200"
    },"fast")

    // jquery color script nodig

    $("#redbox").animate({
        backgroundColor: "yellow",
        borderRadius: "50%"
    },5000)

    $("p").animate({
        fontSize: 20
    },3000)

})