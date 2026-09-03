// Aastha Eye Care - shared front-end behaviour

document.addEventListener("DOMContentLoaded", function () {
  // Mobile nav toggle
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("open");
      var expanded = nav.classList.contains("open");
      toggle.setAttribute("aria-expanded", expanded ? "true" : "false");
    });

    document.querySelectorAll(".nav-links a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
      });
    });
  }

  // Footer year
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Contact form (front-end only — wire up a backend/service e.g. Formspree
  // or your own API endpoint to actually deliver these messages by mail)
  var form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var status = document.getElementById("form-status");
      var name = form.querySelector("#name").value.trim();
      var phone = form.querySelector("#phone").value.trim();

      if (!name || !phone) {
        status.textContent = "Please fill in your name and phone number.";
        status.classList.remove("success");
        return;
      }

      status.textContent =
        "Thank you, " + name + "! Our team will call you back shortly.";
      status.classList.add("success");
      form.reset();
    });
  }
});
