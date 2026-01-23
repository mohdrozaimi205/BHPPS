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
      // Hide all sections
      formSection.classList.add("hidden");
      directionSection.classList.add("hidden");
      contactSection.classList.add("hidden");
      servicesSection.classList.add("hidden");
      content.classList.remove("hidden");

      if (btn.dataset.tab === "feedback") {
        content.classList.add("hidden");
        formSection.classList.remove("hidden");
      } else if (btn.dataset.tab === "direction") {
        content.classList.add("hidden");
        directionSection.classList.remove("hidden");
      } else if (btn.dataset.tab === "contact") {
        content.classList.add("hidden");
        contactSection.classList.remove("hidden");
      } else if (btn.dataset.tab === "services") {
        content.classList.add("hidden");
        servicesSection.classList.remove("hidden");
      } else if (btn.dataset.tab === "about") {
        content.innerHTML = `<h2>About</h2>
          <p>Portal ini dibangunkan oleh Abang Mie untuk komuniti dan pelanggan.</p>`;
      } else {
        content.innerHTML = `<h2>${btn.innerText}</h2>
          <p>Kandungan kosong untuk ${btn.innerText}.</p>`;
      }
    });
  });

  // Feedback form submission with EmailJS
  feedbackForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Gantikan dengan Service ID & Template ID dari EmailJS dashboard
    emailjs.sendForm("service_gmail", "template_feedback", "#feedbackForm")
      .then(() => {
        alert("Feedback berjaya dihantar ke email mohdrozaimi205@gmail.com!");
        feedbackForm.reset();
      }, (error) => {
        console.error("Error:", error);
        alert("Ada masalah hantar email. Sila cuba lagi.");
      });
  });
});
