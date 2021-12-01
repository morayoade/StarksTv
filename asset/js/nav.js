const navToggle=document.querySelector(".nav-togglericon");
const menuBars=document.querySelector(".nav-bars");
const menuTimes=document.querySelector(".nav-times");
const navDropdrown=document.querySelector(".navbarDropdown");
const navHeading=document.querySelector(".navbar-heading");
const whiteLogo=document.querySelector(".ecohoroomwhitelogo");
const blackLogo=document.querySelector(".ecohoroomblacklogo")

let showMenu=false;

navToggle.addEventListener('click', toggleNavbar);
function toggleNavbar(){
    if(!showMenu){
        // menuBars.classList.add("menuTimes")
        menuBars.style.display="none";
        menuTimes.style.display="block";
        navDropdrown.style.display="block";

    //    reset showMenu
    showMenu=true;
     }
      else {
        menuBars.style.display="block";
        menuTimes.style.display="none";
        navDropdrown.style.display="none";

        showMenu=false;

    }
    
}
window.onscroll=()=>{
    if(window.scrollY >0){
        navHeading.classList.add("nav-active");
        blackLogo.style.display="block"
        whiteLogo.style.display="none"


    }else{
        navHeading.classList.remove("nav-active")
        whiteLogo.style.display="block"
        blackLogo.style.display="none"

    }
}
const activePage=window.location.pathname;

const navLinks=document.querySelectorAll(".navbar-active ").forEach(link=>{
    if(link.href.includes(`${activePage}`)){
        link.classList.add("activeclass")
    }
    // if(!link.href.includes(`${activePage}`)){
    //     link.classList.add('fadeoff')
    // }
})

