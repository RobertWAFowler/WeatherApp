/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var WeatherBG = {
    "Cold": "img/Cold.jpeg",
    "Cool": "img/Cool.jpeg",
    "Moderate": "img/Moderate.jpeg",
    "Warm": "img/Warm.jpeg",
    "Hot": "img/Hot.jpeg"
};

var API_Location = 'http://ip-api.com/json';
var apid = 'c2b005477afc17377035d6f32e4770f0';
var tempSymbol = String.fromCharCode(8451);
var temp = 0;

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setCelcius() {
    tempSymbol = String.fromCharCode(8451);
    $.getJSON(API_Location, getWeatherCelc);
}

function setFaren() {
    tempSymbol = String.fromCharCode(8457);
    $.getJSON(API_Location, getWeatherFaren);
}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var showWeather = function (data) {
    $("#temp").text(data.main.temp + tempSymbol);
    temp = data.main.temp;
    $("#description").text(data.weather[0].description);
    $("#place").text(data.name + ", " + data.sys.country);
    var img = new Image();
    img.src = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";

    $("#weatherIcon").empty().append(img);
    setWeather();
};

var getWeatherFaren = function (data) {
    $.getJSON('https://api.openweathermap.org/data/2.5/weather', {
        lat: data.lat,
        lon: data.lon,
        units: 'imperial',
        appid: apid
    }, showWeather, 'jsonp');
};
var getWeatherCelc = function (data) {
    $.getJSON('https://api.openweathermap.org/data/2.5/weather', {
        lat: data.lat,
        lon: data.lon,
        units: 'metric',
        appid: apid
    }, showWeather, 'jsonp');
};

function setWeather() {
    var thisWeatherBG = WeatherBG.Cool;
    var weatherNum = 3;
    if (tempSymbol === String.fromCharCode(8451)) {
        if (temp <= 0) {
            weatherNum = 1;
        } else if (temp > 0 && temp <= 15) {
            weatherNum = 2;
        } else if (temp > 15 && temp <= 25) {
            weatherNum = 3;
        } else if (temp > 25 && temp <= 35) {
            weatherNum = 4;
        } else {
            weatherNum = 5;
        }

    } else {
        if (temp <= 32) {
            weatherNum = 1;
        } else if (temp > 32 && temp <= 59) {
            weatherNum = 2;
        } else if (temp > 59 && temp <= 77) {
            weatherNum = 3;
        } else if (temp > 77 && temp <= 95) {
            weatherNum = 4;
        } else {
            weatherNum = 5;
        }
    }

    switch (weatherNum) {
        case 1:
            thisWeatherBG = WeatherBG.Cold;
            break;
        case 2:
            thisWeatherBG = WeatherBG.Cool;
            break;
        case 3:
            thisWeatherBG = WeatherBG.Moderate;
            break;
        case 4:
            thisWeatherBG = WeatherBG.Warm;
            break;
        case 5:
            thisWeatherBG = WeatherBG.Hot;
            break;

    }
    document.getElementById("bgImage").style.backgroundImage = "url('" + thisWeatherBG + "')";
}

$(document).ready(function () {

    $.getJSON(API_Location, getWeatherCelc);
});
