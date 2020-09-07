var button = document.querySelector(".button");
var inputValue = document.querySelector('.inputValue');
var name = document.querySelector('.name');
var desc = document.querySelector('desc');
var temp = document.querySelector('.temp');

fetch('api.openweathermap.org/data/2.5/weather?q="+inputValue.value+"&appid=403f69cea330b6713e726d6736d05afc');