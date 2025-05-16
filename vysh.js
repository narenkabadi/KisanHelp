// Highlight active link
const links = document.querySelectorAll(".nav-links a");
links.forEach(link => {
  link.addEventListener("click", () => {
    links.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  });
});

// Toggle between light and dark modes
const toggleButton = document.getElementById("mode-toggle");
const body = document.body;

if (toggleButton) {
  toggleButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    // Update button text
    toggleButton.textContent = body.classList.contains("dark-mode") ? "Light Mode" : "Dark Mode";
  });
}

// Emission Calculator Functionality
document.getElementById("emission-form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form from submitting

  // Get user inputs
  const fuelEfficiency = parseFloat(document.getElementById("fuel-efficiency").value);
  const distanceTraveled = parseFloat(document.getElementById("distance-traveled").value);

  if (fuelEfficiency > 0 && distanceTraveled > 0) {
    // Calculate emissions
    const CO2_PER_LITER = 2.31; // Average kg of CO2 emitted per liter of fuel
    const litersUsed = distanceTraveled / fuelEfficiency;
    const emissions = litersUsed * CO2_PER_LITER;

    // Display result
    document.getElementById("emission-result").textContent = `Your car emitted approximately ${emissions.toFixed(2)} kg of CO2.`;
  } else {
    // Handle invalid input
    document.getElementById("emission-result").textContent = "Please enter valid numbers for fuel efficiency and distance.";
  }
});
