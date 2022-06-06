window.onload = function(){

    AOS.init({
        offset: 50, 
        delay: 250, 
        duration: 1000, 
        easing: 'ease-in-out',
        once: false
    });

// Getting the current year 
let currentDate = document.querySelector("#currentDate");
let currentDate2 = document.querySelector("#currentDate2");
let newDate = new Date();
currentDate.textContent = newDate.getFullYear();
currentDate2.textContent = newDate.getFullYear();

//change background image of hero section
let hero = document.querySelector('#hero');
let next = document.querySelector('#next');
let previous = document.querySelector('#previous');

//Getting the urls of the background images
let urls = [
    "url('/assets/hero.jpg')", 
    "url('/assets/slideshow1.jpg')"
];

let paras = [
    "Relive your moments with Qlik Studios",
    "Timeless visual contents you will treasure for a lifetime",
    "Timeless visual contents you will treasure for a lifetime"
];

let headers = [
    "Welcome to Qlik Studio",
    "A place for your perfect and dream pictures",
    "A place for your perfect and dream pictures"
];

// Adding event listeners
next.addEventListener('click', changeNextUrl);
previous.addEventListener('click', changePrevUrl);

let count = 0;
function changeNextUrl(){
    count++;
    if(count > urls.length){
        count = 0;
    }

    hero.style.backgroundImage = urls[count];
    hero.style.transition = 'all 4s ease-in-out';
    hero.querySelector('p').innerHTML = paras[count];
    hero.querySelector('h3').innerHTML = headers[count];
}

function changePrevUrl(){
    count--;
    if(count < 0){
        count = urls.length-1;
    }
    hero.style.backgroundImage = urls[count];
    hero.style.transition = 'all 4s ease-in-out';
    hero.querySelector('p').innerHTML = paras[count];
    hero.querySelector('h3').innerHTML = headers[count];
}

//letting it run automatically
setInterval(changeNextUrl, 5000);


// End of background changing

}