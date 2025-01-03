// Toggle the side menu and change the hamburger icon
function toggleMenu() {
  const sideMenu = document.getElementById("sideMenu");
  const menuToggle = document.querySelector(".menu-toggle");

  // Toggle the 'active' class on the side menu
  sideMenu.classList.toggle("active");

  // Toggle the 'active' class on the menu toggle to change to a cross icon
  menuToggle.classList.toggle("active");

  // Toggle the 'open' class to change the hamburger icon to a cross
  menuToggle.classList.toggle("open");
}

// Close the side menu when a link is clicked
const navLinks = document.querySelectorAll(".side-menu .side-nav-links a");
navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    const sideMenu = document.getElementById("sideMenu");
    const menuToggle = document.querySelector(".menu-toggle");

    // Remove 'active' class to close the menu and change back to hamburger icon
    sideMenu.classList.remove("active");
    menuToggle.classList.remove("active");
    menuToggle.classList.remove("open");
  });
});
