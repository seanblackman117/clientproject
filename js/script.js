/* global $ */

console.log('hi');

$('h1').click(function() {
    $('h1').css('color', 'green');
    $('h1').text('Ready to Code');
});

var endpoint = "https://api.openweathermap.org/data/2.5/weather?zip=11216,us&appid=3bb00f30e525b91a1deb9cbd20254379";
$.ajax({
    url: endpoint,
    success: function(response) {
        console.log(response);
    }
});

//function(console.log(response)){
