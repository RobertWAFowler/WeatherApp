/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var WeatherBG = {
    "Cold": "./img/Cold.jpeg",
    "Cool": "./img/Cool.jpeg",
    "Moderate": "./img/Moderate.jpeg",
    "Warm": "./img/Warm.jpeg",
    "Hot": "./img/Hot.jpeg"
};

window.onload = function () {

    document.getElementById("bgImage").style.backgroundImage = url(WeatherBG.Cool);

    document.getElementById("bgImage").style.backgroundImage = "url('img/Cool.jpeg')";

};
