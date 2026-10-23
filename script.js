// CONFIGURACIÓN: escribí el número de WhatsApp con código de país, solo números.
// Ejemplo de formato para Argentina: 5492991234567 (reemplazá por el número real).
const WHATSAPP_NUMBER = "";

const whatsappButton = document.getElementById("whatsappButton");
const contactHint = document.getElementById("contactHint");

if (WHATSAPP_NUMBER.trim()) {
  const message = encodeURIComponent("Hola, vi la página de Sur Fly Fishing y quisiera consultar por los servicios y la disponibilidad.");
  whatsappButton.href = `https://wa.me/${WHATSAPP_NUMBER.trim()}?text=${message}`;
  whatsappButton.target = "_blank";
  contactHint.textContent = "Consultas por WhatsApp · Neuquén, Patagonia Argentina";
} else {
  whatsappButton.href = "https://www.surflyfishing.com";
  whatsappButton.addEventListener("click", (event) => {
    event.preventDefault();
    alert("Para activar el botón de WhatsApp, abrí script.js y completá WHATSAPP_NUMBER con el número comercial de Sur Fly Fishing.");
  });
}

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
  menuToggle.textContent = isOpen ? "×" : "☰";
});

mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menú");
    menuToggle.textContent = "☰";
  });
});

document.getElementById("year").textContent = new Date().getFullYear();
