// Smooth scroll navigation
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function(e) {

    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    targetSection.scrollIntoView({
      behavior: "smooth"
    });

  });
});


// Active navigation link on scroll

const sections = document.querySelectorAll("section, div[id]");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {

    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute("id");
    }

  });

  navLinks.forEach(link => {

    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }

  });

});


// Skills animation on scroll

const skills = document.querySelectorAll(".item");

const observer = new IntersectionObserver(entries => {

  entries.forEach(entry => {

    if (entry.isIntersecting) {

      entry.target.style.transform = "scale(1.1)";
      entry.target.style.transition = "0.5s";

    }

  });

});

skills.forEach(skill => observer.observe(skill));


// Project card hover tilt effect

const projects = document.querySelectorAll(".project");

projects.forEach(project => {

  project.addEventListener("mousemove", e => {

    const rect = project.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -(y - centerY) / 20;
    const rotateY = (x - centerX) / 20;

    project.style.transform =
      `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

  });

  project.addEventListener("mouseleave", () => {

    project.style.transform = "rotateX(0) rotateY(0)";

  });

});