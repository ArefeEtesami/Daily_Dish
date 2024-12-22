// open menu drawer
function toggleMenu() {
    const mobileHeader = document.getElementById("header-mobile");
    mobileHeader.classList.toggle("open");
}

// close menu drawer
document.addEventListener("click", function (event) {
    const mobileHeader = document.getElementById("header-mobile");
    const menuDrawer = document.querySelector(".menu-drawer");
    if (!menuDrawer.contains(event.target)) {
        mobileHeader.classList.remove("open");
    }
});