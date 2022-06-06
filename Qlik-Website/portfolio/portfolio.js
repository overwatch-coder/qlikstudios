window.onload = function(){

    // Getting the current year 
    let currentDate = document.querySelector("#currentDate");
    let currentDate2 = document.querySelector("#currentDate2");
    let newDate = new Date();
    currentDate.textContent = newDate.getFullYear();
    currentDate2.textContent = newDate.getFullYear();

//change background image of hero section
let hero = document.querySelector('#hero-portfolio');
let next = document.querySelector('#next');
let previous = document.querySelector('#previous');

//Getting the urls of the background images
let urls = [
    "url('/assets/portfolio-bg.jpg')", 
    "url('/assets/portfolio-bg2.jpg')", 
    "url('/assets/portfolio-bg3.jpg')"
];

// Adding event listeners
next.addEventListener('click', changeNextUrl);
previous.addEventListener('click', changePrevUrl);

let count = 0;
function changeNextUrl(){
    count++;
    if(count >= urls.length){
        count = 0;
    }
    hero.style.backgroundImage = urls[count];
    hero.style.transition = 'all 3s ease-in-out';
    hero.style.animation = 'heroAnimate 4s ease-in-out infinite alternate';
}

function changePrevUrl(){
    count--;
    if(count <= 0){
        count = urls.length-1;
    }
    hero.style.backgroundImage = urls[count];
    hero.style.transition = 'all 3s ease-in-out';
    hero.style.animation = 'heroAnimate 4s ease-in-out infinite alternate';
}

//letting it run automatically
setInterval(changeNextUrl, 4000);


// End of background changing

// Image pop up and down on hover
let images = document.getElementsByClassName('portfolio-img');

for(let i=0; i< images.length; i++){
    let image = images[i];
    image.addEventListener('mouseover', popUp);
    image.addEventListener('mouseout', popDown);
    animate(image, '1000');
    
    function popUp(){
        image.style.transform = 'scale(1.15)';
        image.style.transition = '1s ease-out';
        image.style.opacity = '0.7';
    }

    function popDown(){
        image.style.transform = 'scale(1)';
        image.style.transition = '1s ease-in';
        image.style.opacity = '1';
    }
}

// Function for the animation on scroll
    function animate(obj, delay){
        obj.setAttribute('data-aos', 'flip-left');
        obj.setAttribute('data-aos-delay', delay);
    }

    //initialising animations on scroll
    AOS.init({
        offset: 100, 
        delay: 900, 
        duration: 1500, 
        easing: 'ease-in-out',
        once: true
    });

}
