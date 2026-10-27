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

  // Appointment form — sends the request to the clinic's WhatsApp number
  // instead of a backend. Update WHATSAPP_NUMBER (country code + number,
  // no + or spaces) if the clinic's WhatsApp number ever changes.
  var WHATSAPP_NUMBER = "918668267509";
  var form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var status = document.getElementById("form-status");
      var name = form.querySelector("#name").value.trim();
      var phone = form.querySelector("#phone").value.trim();
      var email = form.querySelector("#email").value.trim();
      var service = form.querySelector("#service").value;
      var message = form.querySelector("#message").value.trim();

      if (!name || !phone) {
        status.textContent = "Please fill in your name and phone number.";
        status.classList.remove("success");
        return;
      }

      var lines = [
        "New Appointment Request - Aastha Eye Care",
        "Name: " + name,
        "Phone: " + phone,
      ];
      if (email) lines.push("Email: " + email);
      lines.push("Service: " + service);
      if (message) lines.push("Message: " + message);

      var whatsappUrl =
        "https://wa.me/" +
        WHATSAPP_NUMBER +
        "?text=" +
        encodeURIComponent(lines.join("\n"));

      status.textContent =
        "Opening WhatsApp — please tap send to complete your request.";
      status.classList.add("success");
      window.open(whatsappUrl, "_blank");
      form.reset();
    });
  }
});
