// script.js

// Smooth scroll or other interactive elements can go here
// Example: Highlight nav link based on scroll position (optional enhancement)
window.addEventListener("scroll", function () {
  const navLinks = document.querySelectorAll("nav a");
  let fromTop = window.scrollY + 60;

  navLinks.forEach(link => {
    const section = document.querySelector(link.getAttribute("href"));
    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});
