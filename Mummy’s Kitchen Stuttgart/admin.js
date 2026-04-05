const searchInput = document.getElementById("searchBooking");
const tableRows = document.querySelectorAll("#bookingTable tbody tr");

searchInput.addEventListener("keyup", () => {
  const term = searchInput.value.toLowerCase();

  tableRows.forEach(row => {
    const text = row.innerText.toLowerCase();
    row.style.display = text.includes(term) ? "" : "none";
  });
});

// Fake export invoice interaction
document.querySelectorAll(".invoice-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    alert("✅ Invoice exported successfully.");
  });
});