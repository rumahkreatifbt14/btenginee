const toggleButton = document.getElementById("toggle-btn");
const sidebar = document.getElementById("sidebar");

function toggleSlidebar() {
  sidebar.classList.toggle("close");
  toggleButton.classList.toggle("rotate");
}

toggleButton.addEventListener("click", toggleSlidebar);
