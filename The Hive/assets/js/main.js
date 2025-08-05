//for working of hameburger manue
const hameburger=document.getElementById("hameburger");
const navLinks=document.getElementById("nav-links");

hameburger.addEventListener('click',()=>{
    navLinks.classList.toggle('active');
});