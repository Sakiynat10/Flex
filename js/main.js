const menuBtn = document.querySelector(".menu");
const navMenu = document.querySelector(".nav-menu");
const btnGroup = document.querySelector(".btn-group");
const toggleBtn = document.querySelector(".toggle");
const closeBtn = document.querySelector(".close");
const navRes = document.querySelector(".nav-res");



menuBtn.addEventListener("click" , function(){
    navMenu.classList.toggle("none")
    btnGroup.classList.toggle("none")
    toggleBtn.classList.toggle("none");
    closeBtn.classList.toggle("none");
    navRes.classList.toggle("show-res-nav")
})

menuBtn.addEventListener("click" , function(){

})