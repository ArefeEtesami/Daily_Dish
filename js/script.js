//#region menu drawer
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
//#endregion

//#region profile popup
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
//#endregion

//#region category spans
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
//#endregion

//#region list of followers on panel profile
// list of follwers on panel profile
const followers = [
    { image: "/media/imgs/profile2.png", name: "User One" },
    { image: "/media/imgs/profile2.png", name: "User Two" },
    { image: "/media/imgs/profile2.png", name: "User Three" },
    { image: "/media/imgs/profile2.png", name: "User Four" },
    { image: "/media/imgs/profile2.png", name: "User Five" },
    { image: "/media/imgs/profile2.png", name: "User Six" },
    { image: "/media/imgs/profile2.png", name: "User Seven" },
    { image: "/media/imgs/profile2.png", name: "User Eight" },
    { image: "/media/imgs/profile2.png", name: "User Nine" },
    { image: "/media/imgs/profile2.png", name: "User Ten" },
    { image: "/media/imgs/profile2.png", name: "User Eleven" },
    { image: "/media/imgs/profile2.png", name: "User Twleve" },
    { image: "/media/imgs/profile2.png", name: "User Therteen" },
];

function renderFollowers() {
    const followersMenu = document.getElementById('followers-menu');
    const hasFollower = document.getElementById('has-follower');
    const noFollower = document.getElementById('no-follower');

    hasFollower.innerHTML = `
      <div class="search-followers">
        <img class="search-label" width="20px" src="/media/icons/search.svg" />
        <input placeholder="Search..." class="search-input" />
      </div>
    `;
    if (followersMenu) {
        if (followers.length === 0) {
            noFollower.style.display = 'block';
        } else {
            noFollower.style.display = 'none';
            followers.forEach(follower => {
                const followerElement = document.createElement('a');
                followerElement.classList.add('user-follower');
                followerElement.href = '#';
                followerElement.innerHTML = `
          <img width="34px" class="rounded-circle" src="${follower.image}"/>
          <span>${follower.name}</span>
        `;
                hasFollower.appendChild(followerElement);
            });
        }
    }
}

function toggleFollowersMenu() {
    const followersMenu = document.getElementById('followers-menu');
    const currentDisplay = followersMenu.style.display;
    if (followersMenu) {
        if (currentDisplay === 'none' || currentDisplay === '') {
            followersMenu.style.display = 'block';
            renderFollowers();
        } else {
            followersMenu.style.display = 'none';
        }
        adjustMainProfileWidth();
    }
}

function adjustMainProfileWidth() {
    const followersMenu = document.getElementById('followers-menu');
    const mainProfileContainer = document.querySelector('.main-profile-container');
    const foodNameGrid = document.querySelectorAll('.food-name-grid');
    const foodGridIcon = document.querySelectorAll('.food-grid-icon');
    const foodCounterGrid = document.querySelectorAll('.food-counter-grid');
    const profilePanel = document.querySelector('.profile-panel');

    if (window.innerWidth <= 750 && followersMenu.style.display === 'block') {
        mainProfileContainer.style.width = '60%';
        foodNameGrid.forEach(function (item) {
            item.style.fontSize = '15px';
        });
        foodGridIcon.forEach(function (item) {
            item.style.width = '15px';
        });
        foodCounterGrid.forEach(function (item) {
            item.style.fontSize = '15px';
        });
        profilePanel.style.padding = "0";
    } else {
        mainProfileContainer.style.width = '100%';
        foodNameGrid.forEach(function (item) {
            item.style.fontSize = '';
        });

        foodGridIcon.forEach(function (item) {
            item.style.width = '';
        });
        foodCounterGrid.forEach(function (item) {
            item.style.fontSize = '';
        });
        profilePanel.style.padding = "";
    }

}

function hideFollowersMenuOnClickOutside(event) {
    const followersMenu = document.getElementById('followers-menu');
    const followersButton = document.getElementById('followers');
    const followingsButton = document.getElementById('followings');
    const mainProfileContainer = document.querySelector('.main-profile-container');
    if (followersMenu) {
        if (!followersMenu.contains(event.target) &&
            !followersButton.contains(event.target) &&
            !followingsButton.contains(event.target)) {
            followersMenu.style.display = 'none';
            mainProfileContainer.style.width = '100%';
        }
    }
}
const followersSpan = document.getElementById('followers');
const followingsSpan = document.getElementById('followings');
if (followersSpan && followingsSpan) {
    followersSpan.addEventListener('click', toggleFollowersMenu);
    followingsSpan.addEventListener('click', toggleFollowersMenu);
    document.addEventListener('click', hideFollowersMenuOnClickOutside);
}
//#endregion

//#region carousel sliding images post
// carousel sliding images post
let currentSlideIndex = 0;
const slides = document.querySelectorAll('.carousel-item');
const buttons = document.querySelectorAll('.carousel-indicators button');
if (slides && buttons) {
    function changeSlide() {
        slides[currentSlideIndex].classList.remove('active');
        buttons[currentSlideIndex].classList.remove('active');

        currentSlideIndex = (currentSlideIndex + 1) % slides.length;

        slides[currentSlideIndex].classList.add('active');
        buttons[currentSlideIndex].classList.add('active');
    }

    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            slides[currentSlideIndex].classList.remove('active');
            buttons[currentSlideIndex].classList.remove('active');

            currentSlideIndex = index;

            slides[currentSlideIndex].classList.add('active');
            buttons[currentSlideIndex].classList.add('active');

        });
    });

    const carousel = document.getElementById('carousel');
    if (carousel) {
        new bootstrap.Carousel(carousel, {
            interval: false,
            ride: false,
        });
    }
}
//#endregion

//#region post toggle-arrow

document.querySelectorAll('.toggle-arrow').forEach(function (arrow) {
    arrow.addEventListener('click', function () {
        var ul = arrow.closest('.d-flex').querySelector('ul');
        var img = arrow.querySelector('.arrow-icon');
        ul.classList.toggle('hidden');
        if (ul.classList.contains('hidden')) {
            img.src = '/media/icons/bottom-arrow.svg';
        } else {
            img.src = '/media/icons/top-arrow.svg';
        }
    });
});

//#endregion

//#region post like , dislike reaction
const like = document.querySelector('.like');
if (like) {
    like.addEventListener('click', function () {
        var img = this.querySelector('img');
        var count = this.nextElementSibling;

        var dislikeImg = document.querySelector('.dislike img');
        var dislikeCount = document.querySelector('.dislike-count');
        if (dislikeImg.src.includes('dislike-fill.svg')) {
            dislikeImg.src = '/media/icons/dislike.svg';
            dislikeCount.textContent = parseInt(dislikeCount.textContent) - 1;
        }

        if (img.src.includes('like.svg')) {
            img.src = '/media/icons/like-fill.svg';
            count.textContent = parseInt(count.textContent) + 1;
        } else {
            img.src = '/media/icons/like.svg';
            count.textContent = parseInt(count.textContent) - 1;
        }
    });

    document.querySelector('.dislike').addEventListener('click', function () {
        var img = this.querySelector('img');
        var count = this.nextElementSibling;

        var likeImg = document.querySelector('.like img');
        var likeCount = document.querySelector('.like-count');
        if (likeImg.src.includes('like-fill.svg')) {
            likeImg.src = '/media/icons/like.svg';
            likeCount.textContent = parseInt(likeCount.textContent) - 1;
        }

        if (img.src.includes('dislike.svg')) {
            img.src = '/media/icons/dislike-fill.svg';
            count.textContent = parseInt(count.textContent) + 1;
        } else {
            img.src = '/media/icons/dislike.svg';
            count.textContent = parseInt(count.textContent) - 1;
        }
    });
}
//#endregion

//#region copy-link
const copyLink = document.querySelector('#copy-link');
if (copyLink) {
    copyLink.addEventListener('click', function () {
        var currentUrl = window.location.href;

        var tempInput = document.createElement('input');
        document.body.appendChild(tempInput);
        tempInput.value = currentUrl;
        tempInput.select();

        document.execCommand('copy');

        document.body.removeChild(tempInput);

        alert('Link copied to clipboard: ' + currentUrl);
    });
}

//#endregion