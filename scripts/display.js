"use strict";

// alles binnen $(function()) wordt pas uitgevoerd
// nadat de browser de volledige HTML code verwerkt heeft
// het dollar-teken is de verkorte versie van het woord jQuery
$(function () {

    // fadeOut --> opacity op 0 en uiteindelijk ook display none
    // parameter: aantal milliseconden
    $("#redbox").fadeOut(2000);
    $("#bluebox").fadeOut(3000);
    $("#redbox").fadeIn(2000);

    // fadeTo --> naar bepaalde opacity gaan over bepaalde duur
    // eerste parameter: hoe lang moet het duren
    // tweede parameter: welke opacity (0 onzichtbaar, 1 volledig zichtbaar)
    $("#greenbox").fadeTo(2000, 0.3);
    $("#greenbox").fadeTo(1000, 1);

    // fadeToggle --> als het volledig zichtbaar is, onzichtbaar maken
    // als het onzichtbaar is, weer zichtbaar maken
    $("#blackbox").fadeToggle(2000);
    $("#blackbox").fadeToggle(2000);

    // slideUp --> element verdwijnt door hoogte aan te passen naar 0
    $("#yellowbox").slideUp(2000);

    // slideDown --> tegenovergestelde
    $("#yellowbox").slideDown(2000);

    // slideToggle --> zelfde principe als bij fadeToggle
    $("#orangebox").slideToggle();

    // knop gebruiken om element te doen verdwijnen
    // of weer zichtbaar te maken
    // $("#slideButton").on("click",function(){
    //     $("#pinkbox").slideToggle(1000);
    // })

    // knop gebruiken om element te doen verdwijnen
    // maar niet uit de 'flow' van het document te halen
    $("#slideButton").on("click", function () {
        // controleren wat de huidige opacity value is
        // als de opacity momenteel 1 is, dan is het volledig zichtbaar
        if ($("#pinkbox").css("opacity") == 1) {
            // onzichtbaar maken
            $("#pinkbox").fadeTo(1000,0);
        } else {
            // zichtbaar maken
            $("#pinkbox").fadeTo(1000,1);
        }
    })    

    // div aanmaken en koppelen aan constante
    const newBox = $("<div>"); // in gewone javascript document.createElement("div")
    // id instellen voor nieuwe div via .attr()
    newBox.attr("id","purplebox");
    // kleur instellen
    newBox.css("background-color","purple");
    // hoogte instellen div
    newBox.css("height","85px");
    // width instellen div
    newBox.css("width","85px");
    // tekst toevoegen aan div
    newBox.text("Purple");
    console.log(newBox);
    // box toevoegen aan newdiv element
    $("#newdiv").append(newBox);

})