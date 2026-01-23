document.addEventListener("DOMContentLoaded", () => {
  const navButtons = document.querySelectorAll(".bottom-nav button");
  const content = document.getElementById("content");
  const aboutSection = document.getElementById("about-section");
  const formSection = document.getElementById("form-section");
  const directionSection = document.getElementById("direction-section");
  const contactSection = document.getElementById("contact-section");
  const servicesSection = document.getElementById("services-section");
  const adminSection = document.getElementById("admin-section");
  const feedbackForm = document.getElementById("feedbackForm");
  const homeTitle = document.getElementById("homeTitle");
  const gear = document.getElementById("controlPanel");
  const adminUpload = document.getElementById("adminUpload");
  const clearGalleryBtn = document.getElementById("clearGalleryBtn");
  const aboutGallery = document.getElementById("aboutGallery");

  // Fungsi hide semua section
  function hideAll() {
    content.classList.add("hidden");
    aboutSection.classList.add("hidden");
    formSection.classList.add("hidden");
    directionSection.classList.add("hidden");
    contactSection.classList.add("hidden");
    servicesSection.classList.add("hidden");
    adminSection.classList.add("hidden");
  }

  // Navigation tab logic
  navButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      hideAll();
      switch (btn.dataset.tab) {
        case "feedback": formSection.classList.remove("hidden"); break;
        case "direction": directionSection.classList.remove("hidden"); break;
        case "contact": contactSection.classList.remove("hidden"); break;
        case "services": servicesSection.classList.remove("hidden"); break;
        case "about": aboutSection.classList.remove("hidden"); break;
        default: content.classList.remove("hidden");
      }
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

  // Gear icon → password → buka Control Panel
  gear.addEventListener("click", () => {
    const password = prompt("Masukkan password untuk buka Control Panel:");
    if (password === "bhpetrolpadangserai123") {
      hideAll();
      adminSection.classList.remove("hidden");
    } else {
      alert("Password salah!");
    }
  });

  // Upload gambar → masuk ke About
  adminUpload.addEventListener("change", (e) => {
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

  // Clear Gallery
  clearGalleryBtn.addEventListener("click", () => {
    localStorage.removeItem("aboutImages");
    aboutGallery.innerHTML = "";
    alert("Gallery telah dikosongkan!");
  });

  // Simpan gambar ke localStorage
  function saveImageToLocalStorage(imgData) {
    let storedImages = JSON.parse(localStorage.getItem("aboutImages")) || [];
    storedImages.push(imgData);
    localStorage.setItem("aboutImages", JSON.stringify(storedImages));
  }

  // Load gambar dari localStorage
  function loadImagesFromLocalStorage() {
    let storedImages = JSON.parse(localStorage.getItem("aboutImages")) || [];
    storedImages.forEach(imgData => {
      const img = document.createElement("img");
      img.src = imgData;
      aboutGallery.appendChild(img);
    });
  }

  // Bila page mula → load gambar
  loadImagesFromLocalStorage();
});
