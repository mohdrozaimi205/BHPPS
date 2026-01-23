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
  const gear = document.getElementById("controlPanel");
  const imageUpload = document.getElementById("imageUpload");
  const aboutGallery = document.getElementById("aboutGallery");

  // Navigation tab logic
  navButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      content.classList.add("hidden");
      aboutSection.classList.add("hidden");
      formSection.classList.add("hidden");
      directionSection.classList.add("hidden");
      contactSection.classList.add("hidden");
      servicesSection.classList.add("hidden");

      if (btn.dataset.tab === "feedback") {
        formSection.classList.remove("hidden");
      } else if (btn.dataset.tab === "direction") {
        directionSection.classList.remove("hidden");
      } else if (btn.dataset.tab === "contact") {
        contactSection.classList.remove("hidden");
      } else if (btn.dataset.tab === "services") {
        servicesSection.classList.remove("hidden");
      } else if (btn.dataset.tab === "about") {
        aboutSection.classList.remove("hidden");
      } else {
        content.classList.remove("hidden");
      }
    });
  });

  // Klik tajuk untuk balik Home
  homeTitle.addEventListener("click", () => {
    content.classList.remove("hidden");
    aboutSection.classList.add("hidden");
    formSection.classList.add("hidden");
    directionSection.classList.add("hidden");
    contactSection.classList.add("hidden");
    servicesSection.classList.add("hidden");
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

  // Gear icon dengan password untuk upload gambar
  gear.addEventListener("click", () => {
    const password = prompt("Masukkan password untuk buka Control Panel:");
    if (password === "bhpetrolpadangserai123") {
      imageUpload.click(); // buka file picker kalau password betul
    } else {
      alert("Password salah!");
    }
  });

  imageUpload.addEventListener("change", (e) => {
    const files = e.target.files;
    for (let file of files) {
      const reader = new FileReader();
      reader.onload = function(ev) {
        const img = document.createElement("img");
        img.src = ev.target.result;
        aboutGallery.appendChild(img);
        saveImageToLocalStorage(ev.target.result);
      };
      reader.readAsDataURL(file);
    }
  });

  // Simpan gambar ke localStorage
  function saveImageToLocalStorage(imgData) {
    let storedImages = JSON.parse(localStorage.getItem("aboutImages")) || [];
    storedImages.push(imgData);
    localStorage.setItem("aboutImages", JSON.stringify(storedImages));
  }

  // Load gambar dari localStorage bila page dibuka
  function loadImagesFromLocalStorage() {
    let storedImages = JSON.parse(localStorage.getItem("aboutImages")) || [];
    storedImages.forEach(imgData => {
      const img = document.createElement("img");
      img.src = imgData;
      aboutGallery.appendChild(img);
    });
  }

  loadImagesFromLocalStorage();
});
