//for working of hameburger manue
const hameburger = document.getElementById('hameburger');
const navLinks = document.getElementById('nav-links');

hameburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

//for cahnging color of main navbar when user scrolls

window.addEventListener('scroll', function () {
  const navbar = document.getElementById('main-navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});
