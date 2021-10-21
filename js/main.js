var button = document.getElementsByClassName('button');


var button1 = document.getElementById('button1');
var button2 = document.getElementById('button2');
var button3 = document.getElementById('button3');
var button4 = document.getElementById('button4');
var button5 = document.getElementById('button5')

var audio1 = document.getElementById('audio1');
var audio2 = document.getElementById('audio2');
var audio3 = document.getElementById('audio3');
var audio4 = document.getElementById('audio4');
var audio5 = document.getElementById('audio5');



button1.addEventListener('click', function(){
    audio1.play();
})
button2.addEventListener('click', function(){
    audio2.play();
})
button3.addEventListener('click', function(){
    audio3.play();
})
button4.addEventListener('click', function(){
    audio4.play();
    button4.style.backgroundImage = "url('./images/clubpenguindance.gif')";
})
button5.addEventListener('click', function(){
    audio5.play();
})


