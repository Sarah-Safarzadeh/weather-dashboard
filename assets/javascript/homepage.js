var button = document.querySelector(".button");
var inputValue = document.querySelector('.inputValue');
var name = document.querySelector('.name');
var desc = document.querySelector('desc');
var temp = document.querySelector('.temp');

button.addEventListener('click', function() {
fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=403f69cea330b6713e726d6736d05afc')
.then(response => response.json())
.then(data => console.log(data))

.catch(err => alert("Could not locate that city!"))
});