document.addEventListener("DOMContentLoaded", () => {
  const navButtons = document.querySelectorAll(".bottom-nav button");
  const content = document.getElementById("content");
  const formSection = document.getElementById("form-section");
  const directionSection = document.getElementById("direction-section");
  const contactSection = document.getElementById("contact-section");
  const servicesSection = document.getElementById("services-section");
  const feedbackForm = document.getElementById("feedbackForm");

  // Navigation tab logic
  navButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      formSection.classList.add("hidden");
      directionSection.classList.add("hidden");
      contactSection.classList.add("hidden");
      servicesSection.classList.add("hidden");
      content.classList.add("hidden");

      if (btn.dataset.tab === "feedback") {
        formSection.classList.remove("hidden");
      } else if (btn.dataset.tab === "direction") {
        directionSection.classList.remove("hidden");
      } else if (btn.dataset.tab === "contact") {
        contactSection.classList.remove("hidden");
      } else if (btn.dataset.tab === "services") {
        servicesSection.classList.remove("hidden");
      } else if (btn.dataset.tab === "about") {
        content.classList.remove("hidden");
      }
    });
  });

  // Feedback form submission using sendForm
  feedbackForm.addEventListener("submit", (e) => {
    e.preventDefault();

    emailjs.sendForm("service_eic2gqf", "template_y3w6ice", "#feedbackForm")
      .then(() => {
        alert("Feedback berjaya dihantar ke email mohdrozaimi205@gmail.com!");
        feedbackForm.reset();
      }, (error) => {
        console.error("EmailJS Error:", error);
        alert("Ada masalah hantar email. Sila cuba lagi.");
      });
  });
});
