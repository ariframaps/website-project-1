const navbar_menu = document.querySelector(".navbar_menu");
const navbar_toggle = document.querySelector(".navbar_toggle");
const bar1 = document.querySelector(".bar:nth-child(1)");
const bar2 = document.querySelector(".bar:nth-child(2)");
const bar3 = document.querySelector(".bar:nth-child(3)");

const toggleFunction = function() {
    navbar_menu.classList.toggle("active");
    bar1.classList.toggle("firstChild");
    bar2.classList.toggle("secondChild");
    bar3.classList.toggle("thirdChild");
}

navbar_toggle.addEventListener("click", toggleFunction);

const home_button = document.querySelector("#home");
const about_button = document.querySelector("#about");
const services_button = document.querySelector("#services");
const button_button = document.querySelector("#button");

const buttonFunction = function(){
    navbar_menu.classList.toggle("active");
}

if(window.innerWidth <= 960){
    home_button.addEventListener('click', buttonFunction)
    about_button.addEventListener('click', buttonFunction)
    services_button.addEventListener('click', buttonFunction)
    button_button.addEventListener('click', buttonFunction)
}
