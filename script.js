document.addEventListener("DOMContentLoaded", () => {
  const navButtons = document.querySelectorAll(".bottom-nav button");
  const content = document.getElementById("content");
  const aboutSection = document.getElementById("about-section");
  const formSection = document.getElementById("form-section");
  const directionSection = document.getElementById("direction-section");
  const contactSection = document.getElementById("contact-section");
  const servicesSection = document.getElementById("services-section");
  const feedbackForm = document.getElementById("feedbackForm");
  const homeTitle = document.getElementById("homeTitle");

  function hideAll() {
    content.classList.add("hidden");
    aboutSection.classList.add("hidden");
    formSection.classList.add("hidden");
    directionSection.classList.add("hidden");
    contactSection.classList.add("hidden");
    servicesSection.classList.add("hidden");
  }

  function showTab(tab) {
    hideAll();
    switch (tab) {
      case "feedback": formSection.classList.remove("hidden"); break;
      case "direction": directionSection.classList.remove("hidden"); break;
      case "contact": contactSection.classList.remove("hidden"); break;
      case "services": servicesSection.classList.remove("hidden"); break;
      case "about": aboutSection.classList.remove("hidden"); break;
      default: content.classList.remove("hidden");
    }
  }

  navButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      showTab(btn.dataset.tab);
    });
  });

  // Klik tajuk untuk balik Home
  homeTitle.addEventListener("click", () => {
    hideAll();
    content.classList.remove("hidden");
  });

  // Feedback form submission
  if (feedbackForm) {
    feedbackForm.addEventListener("submit", (e) => {
      e.preventDefault();
      emailjs.sendForm("service_eic2gqf", "template_y3w6ice", "#feedbackForm")
        .then(() => {
          alert("Feedback berjaya dihantar!");
          feedbackForm.reset();
        }, () => alert("Ada masalah hantar email."));
    });
  }
});
