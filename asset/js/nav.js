const navToggle=document.querySelector(".nav-togglericon");
const menuBars=document.querySelector(".nav-bars");
const menuTimes=document.querySelector(".nav-times");
const navDropdrown=document.querySelector(".navbarDropdown");
const navHeading=document.querySelector(".navbar-heading");

// var btns = navHeading.getElementsByClassName("navbar-active");
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function() {
//   var current =document.querySelector(".activeclass");
// //   current[0].className = current[0].className.replace(" activeclass", "");
// //   this.className += "activeclass";
//   });
// }


// const menuItem=document.querySelectorAll("navbar-active")
// const m 
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

    }else{
        navHeading.classList.remove("nav-active")
    }
}
const activePage=window.location.pathname;
const navLinks=document.querySelectorAll(".navbar-active ").forEach(link=>{
    if(link.href.includes(`${activePage}`)){
        link.classList.add("activeclass")
    }
})
