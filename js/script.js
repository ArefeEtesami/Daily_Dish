// open menu drawer
function toggleMenu() {
    const mobileHeader = document.getElementById("header-mobile");
    mobileHeader.classList.toggle("open");
}

// close menu drawer
document.addEventListener("click", function (event) {
    const mobileHeader = document.getElementById("header-mobile");
    const menuDrawer = document.querySelector(".menu-drawer");
    if (mobileHeader && menuDrawer && !menuDrawer.contains(event.target)) {
        mobileHeader.classList.remove("open");
    }
});


// show profile popup
var profileImg = document.getElementById("profile-img");
if (profileImg) {
    document.getElementById("profile-img").addEventListener("click", function (event) {
        var profilePopup = document.getElementById("profile-popup");
        profilePopup.classList.toggle("show");
        event.stopPropagation();
    });
}

// close profile popup
document.addEventListener("click", function (event) {
    if (profileImg) {
        var profilePopup = document.getElementById("profile-popup");
        if (!profilePopup.contains(event.target) && !profileImg.contains(event.target)) {
            profilePopup.classList.remove("show");
        }
    }
});

// select and deselect category spans
document.addEventListener('DOMContentLoaded', () => {
    const spans = document.querySelectorAll('.category-span');
    spans.forEach(span => {
        span.addEventListener('click', () => {
            spans.forEach(s => {
                s.classList.remove('selected-category-span');
                s.classList.add('deselected-category-span');
            });

            span.classList.remove('deselected-category-span');
            span.classList.add('selected-category-span');
        });
    });
});
