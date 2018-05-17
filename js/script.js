/* global $ */

console.log('hi');



var endpoint = "https://api.openweathermap.org/data/2.5/weather?zip=11216,us&appid=3bb00f30e525b91a1deb9cbd20254379";
var endpoint = "https://api.opencagedata.com/geocode/v1/json?q=PLACENAME&key=YOUR-API-KEY"
$.ajax({
    url: endpoint,
    success: function(response) {
        console.log(response);
    }
});

$.ajax({
    url: endpoint,
    success: function(response) {
        $("body").append("<div>" + response.coord.lon + "</div>");
    }

});

//$("#searchButton").
$("#searchBar").click(function(){
    var dab = $("#searchButton").val();
    $("#bob").html(dab);
    map.flyTo({
        center: []
    })
    
});