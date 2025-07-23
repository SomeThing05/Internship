document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.privacy-heroSection .sidebar button');
  const sections = document.querySelectorAll('.privacy-heroSection .content-section');

  // Scroll to section on button click
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const targetId = button.getAttribute('data-target');
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        const yOffset = -120-80; // Change this to your navbar height
        const y = targetSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });

        // Remove active class from all buttons
        buttons.forEach((btn) => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
      }
    });
  });

  // Optional: Update active button while scrolling
  window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 220;
      if (scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    buttons.forEach((button) => {
      button.classList.remove('active');
      if (button.getAttribute('data-target') === current) {
        button.classList.add('active');
      }
    });
  });
  // Highlight the correct button on page load
function setInitialActiveButton() {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 220;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  buttons.forEach((button) => {
    button.classList.remove("active");
    if (button.getAttribute("data-target") === current) {
      button.classList.add("active");
    }
  });
}

setInitialActiveButton(); // Call it on page load

});


