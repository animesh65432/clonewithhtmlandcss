const menuBtn = document.getElementById("Menu-section");
const header = document.getElementById("lyssna-header")
const sidebar = document.getElementById("sidebar-main-div");
const removebuttom = document.getElementById("closeBtn")

menuBtn.addEventListener("click", () => {
    sidebar.classList.add("active");
});

removebuttom.addEventListener("click", () => {
    sidebar.classList.remove("active")
})


