// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Scroll Animation (Fade In)
  const sections = document.querySelectorAll("section");
  
  const revealSection = () => {
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.8) {
        section.classList.add("visible");
      }
    });
  };
  
  window.addEventListener("scroll", revealSection);
  window.addEventListener("load", revealSection);
  