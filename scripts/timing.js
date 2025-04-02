"use strict";

$(function () {

    // $("#redbox").fadeOut(1000);
    // $("#greenbox").delay(1000).fadeOut(1000);
    // $("#bluebox").delay(2000).fadeOut(1000);

    $("#redbox").fadeOut(1000, function () {
        $("#greenbox").fadeOut(1000)
    })

    // $("#bluebox").fadeOut(1000, function () {
    //     alert("animation finished!");
    // })

})