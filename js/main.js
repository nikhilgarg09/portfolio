var navbar=document.querySelector(".navbar");
window.onscroll=()=>{
    this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}
const navMenu = document.querySelector(".menu");
      navToggle = document.querySelector(".menu-btn");
      if(navToggle){
        navToggle.addEventListener("click",()=>{
            navMenu.classList.toggle("active");
        })
      }
const navlink=document.querySelectorAll(".nav-link");
function linkAction(){
    const navMenu = document.querySelector(".menu");
    navMenu.classList.remove("active")
}
navlink.forEach(n => n.addEventListener("click",linkAction));