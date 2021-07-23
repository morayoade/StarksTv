const navToggle=document.querySelector(".nav-togglericon");
const menuBars=document.querySelector(".nav-bars");
const menuTimes=document.querySelector(".nav-times");
const navDropdrown=document.querySelector(".navbarDropdown");

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