// select elemet
let rootEle = document.querySelector(":root");
let toggleBtn = document.querySelector(".toggleBtn");

// add class to that element
rootEle.classList.add("light-mode");
toggleBtn.children[1].classList.add("displayNone");


function modeToggle(){
    // toggle (add and remove) class on click
    rootEle.classList.toggle("dark-mode");
    toggleBtn.classList.toggle("toggleBtndarkMode");
    toggleBtn.children[0].classList.toggle("displayNone");
    toggleBtn.children[1].classList.toggle("displayBlock");

}
// Adding a function to print the page
function printPage(){
    window.print();
}