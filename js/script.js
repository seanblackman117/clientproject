/* global $ */

console.log('hi');



var endpoint = "https://api.openweathermap.org/data/2.5/weather?zip=11216,us&appid=3bb00f30e525b91a1deb9cbd20254379";
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