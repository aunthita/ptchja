// Mobile Navigation
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");

    menuToggle.textContent =
      navLinks.classList.contains("open") ? "✕" : "☰";
  });
}


// Close mobile menu after clicking a link
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks?.classList.remove("open");

    if (menuToggle) {
      menuToggle.textContent = "☰";
    }
  });
});


// Contact Form
const contactForm = document.querySelector(".contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const message = document.querySelector(".form-message");

    if (message) {
      message.textContent =
        "ขอบคุณครับ! เราได้รับข้อความของคุณแล้ว ✦";
      message.style.color = "#ff7548";
    }

    contactForm.reset();
  });
}


// Small reveal animation
const revealElements = document.querySelectorAll(
  ".service-card, .project, .process-item, .big-service"
);

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  {
    threshold: 0.1
  }
);

revealElements.forEach(element => {
  element.style.opacity = "0";
  element.style.transform = "translateY(30px)";
  element.style.transition = "opacity .6s ease, transform .6s ease";

  observer.observe(element);
});
