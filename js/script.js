const share = document.querySelector(".share-btn");
const share_overlay = document.querySelector(".share-overlay");

share.addEventListener('click', function () {
    share_overlay.classList.toggle("hidden");
    share.classList.toggle("invert");
})
