"use strict";

$(function(){

    const picture = document.getElementById("picture");

    if(picture.complete) {
        showPicture();
    } else {
        $("#picture").on("load",showPicture);
    }
    
    // $(window).on("load",showPicture);
})

function showPicture() {
    $("#loader").fadeOut("slow",function(){
        $(".d-flex").removeClass("mt-5");
        $("#picture").animate({
            "opacity": "1"
        },"slow");
    })
}
