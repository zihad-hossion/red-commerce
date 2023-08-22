const menuItem = document.getElementById("menuItems");
const menuBtn = document.querySelector(".menu-icon");

menuBtn.addEventListener("click", () => {
    menuItem.classList.toggle("hidden");
})