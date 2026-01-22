document.addEventListener("DOMContentLoaded", () => {
  const navButtons = document.querySelectorAll(".bottom-nav button");
  const content = document.getElementById("content");
  const formSection = document.getElementById("form-section");
  const directionSection = document.getElementById("direction-section");
  const contactSection = document.getElementById("contact-section");
  const servicesSection = document.getElementById("services-section");
  const feedbackForm = document.getElementById("feedbackForm");

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
      } else {
        content.innerHTML = `<h2>${btn.innerText}</h2><p>Kandungan kosong untuk ${btn.innerText}.</p>`;
      }
    });
  });

  feedbackForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(feedbackForm);
    const jsonData = {};
    formData.forEach((value, key) => jsonData[key] = value);
    console.log("Form Data JSON:", JSON.stringify(jsonData, null, 2));
    alert("Feedback submitted!");
    feedbackForm.reset();
  });
});