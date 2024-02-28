
var choice_white = document.querySelector('.card-color-white');
var image = document.querySelector('#sneaker');
var tittle = document.querySelector('.card-tittle');
var button_1 = document.querySelector('.btn-1');
var button_2 = document.querySelector('.btn-2');
var cost = document.querySelector('.card-price');
var cardColor = document.querySelector('.card');

choice_white.addEventListener('click', function() {
    image.src = 'image/Nike-Airforce-White.png';
    tittle.style.color = 'white';  
    button_1.style.backgroundColor = 'white';
    button_2.style.backgroundColor = 'white';
    button_1.style.color = '#272d40';
    button_2.style.color = '#272d40';
    cost.innerHTML = '$99';
})

var choice_green = document.querySelector('.card-color-green');
choice_green.addEventListener('click', function() {
    image.src = 'image/Nike-Airforce.png';
    tittle.style.color = '#4daf54';
    button_1.style.backgroundColor = '#4daf54';
    button_2.style.backgroundColor = '#4daf54';
    button_1.style.color = 'white';
    button_2.style.color = 'white';
    cost.innerHTML = '$50';
})

var choice_black = document.querySelector('.card-color-black');
choice_black.addEventListener('click', function() {
    image.src = 'image/Nike-Airforce-Panda.png';
    tittle.style.color = 'white';
    button_1.style.backgroundColor = 'black';
    button_2.style.backgroundColor = 'black';
    button_1.style.color = 'white';
    button_2.style.color = 'white';
    cost.innerHTML = '$199';
    cardColor.style.backgroundColor = '#2c3245';
})