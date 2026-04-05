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


// Mobile Menu Logic
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    // Optional: Change ☰ to X when open
    menuToggle.innerHTML = navLinks.classList.contains("active") ? "✕" : "☰";
});

// Close menu when a link is clicked (so it doesn't block the screen)
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuToggle.innerHTML = "☰";
    });
});
