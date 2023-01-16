const toggle = document.querySelector(".toggle");
const sidebar = document.querySelector(".sidebar");

toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
});
