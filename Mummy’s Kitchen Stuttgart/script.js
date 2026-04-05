const orderButtons = document.querySelectorAll(".order-btn");
const menuItemInput = document.getElementById("menuItem");
const orderForm = document.getElementById("order-form");
const confirmation = document.getElementById("orderConfirmation");

orderButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    menuItemInput.value = btn.dataset.item;
    menuItemInput.scrollIntoView({ behavior: "smooth" });
  });
});

orderForm.addEventListener("submit", e => {
  e.preventDefault();
  confirmation.innerHTML = "✅ Booking request received successfully!";
  orderForm.reset();
});

document.querySelectorAll(".faq-question").forEach(btn => {
  btn.addEventListener("click", () => {
    const ans = btn.nextElementSibling;
    ans.style.display = ans.style.display === "block" ? "none" : "block";
  });
});

// Auto pause on hover for gallery slider
const slider = document.querySelector(".slides");

if (slider) {
  slider.addEventListener("mouseenter", () => {
    slider.style.animationPlayState = "paused";
  });

  slider.addEventListener("mouseleave", () => {
    slider.style.animationPlayState = "running";
  });
}