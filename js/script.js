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

// show profile popup
document.getElementById("profile-img").addEventListener("click", function(event) {
    var profilePopup = document.getElementById("profile-popup");
    profilePopup.classList.toggle("show");
    event.stopPropagation();
});

// close profile popup
document.addEventListener("click", function(event) {
    var profilePopup = document.getElementById("profile-popup");
    var profileImg = document.getElementById("profile-img");
  
    if (!profilePopup.contains(event.target) && !profileImg.contains(event.target)) {
      profilePopup.classList.remove("show");
    }
  });
