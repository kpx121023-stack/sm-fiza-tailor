/*
  SM Fiza Tailor website
  IMPORTANT: Replace WHATSAPP_NUMBER with the shop's WhatsApp number.
  Use country code 91 and digits only, for example: 919876543210
*/
const WHATSAPP_NUMBER = "+91 8123361375";

const orderForm = document.getElementById("orderForm");
const menuToggle = document.getElementById("menuToggle");
const siteNav = document.getElementById("siteNav");

document.getElementById("year").textContent = new Date().getFullYear();

menuToggle.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
});

siteNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    siteNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

document.querySelectorAll("[data-service]").forEach((link) => {
  link.addEventListener("click", () => {
    const serviceType = document.getElementById("serviceType");
    const requested = link.dataset.service;
    if (requested.includes("shirt")) serviceType.value = "Men's shirt stitching";
    else if (requested.includes("pant")) serviceType.value = "Men's pant stitching";
    else serviceType.value = "Custom stitching enquiry";
  });
});

function openWhatsApp(message) {
  if (WHATSAPP_NUMBER.includes("X")) {
    alert("Pehle script.js file mein WHATSAPP_NUMBER ko apne shop ke WhatsApp number se replace karein. Country code 91 ke saath sirf digits likhein.");
    return;
  }

  const url = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(message);
  window.open(url, "_blank", "noopener,noreferrer");
}

orderForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("customerName").value.trim();
  const service = document.getElementById("serviceType").value;
  const details = document.getElementById("customerMessage").value.trim();

  let message = "Assalamu alaikum, SM Fiza Tailor. I would like to enquire about " + service + ".";
  if (name) message += "\nMy name: " + name;
  if (details) message += "\nDetails: " + details;
  message += "\nLocation: Manhalli, Bidar.";

  openWhatsApp(message);
});

document.getElementById("floatingWhatsApp").addEventListener("click", (event) => {
  event.preventDefault();
  openWhatsApp("Assalamu alaikum, SM Fiza Tailor. I would like to enquire about stitching. I am contacting from your website.");
});
