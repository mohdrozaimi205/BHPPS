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
      // Hide semua section dulu
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

  // Feedback form submission using emailjs.send()
  feedbackForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = feedbackForm.user_name.value;
    const email = feedbackForm.user_email.value;
    const message = feedbackForm.message.value;

    const templateParams = {
      user_name: name,
      user_email: email,
      message: message
    };

    emailjs.send("service_eic2gqf", "template_y3w6ice", templateParams)
      .then(() => {
        alert("Feedback berjaya dihantar ke email mohdrozaimi205@gmail.com!");
        feedbackForm.reset();
      }, (error) => {
        console.error("EmailJS Error:", error);
        alert("Ada masalah hantar email. Sila cuba lagi.");
      });
  });
});
