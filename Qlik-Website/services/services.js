window.onload = function(){
// Getting the current year 
let currentDate = document.querySelector("#currentDate");
let currentDate2 = document.querySelector("#currentDate2");
let newDate = new Date();
currentDate.textContent = newDate.getFullYear();
currentDate2.textContent = newDate.getFullYear();


// Function for the animation on scroll
function animate(obj, type, delay){
    obj.setAttribute('data-aos', type);
    obj.setAttribute('data-aos-delay', delay);
    // obj.setAttribute('data-aos-once', true);
}

let listItems = Array.from(document.querySelectorAll('#packages li'));
let buttons = Array.from(document.querySelectorAll('#packages button'));

listItems.forEach(item => {
    animate(item, 'fade-down', '800');
});

buttons.forEach(button => {
    animate(button, 'flip-right', '1000');
});

//initialising animations on scroll
AOS.init({
    offset: 80, 
    delay: 500, 
    duration: 1500, 
    easing: 'ease-in-out',
    once: false
});

}