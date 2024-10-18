/* navigation bar disappears or appears when scrolling */

let lastScrollTop = 0;
const header = document.querySelector('.header'); 

window.addEventListener('scroll', function () {
    let currentScroll = document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        header.style.top = '-100px'; 

    } else {
        header.style.top = '0px';
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

/* cookies popup */

document.addEventListener('DOMContentLoaded', function () {
    const cookiesPopup = document.getElementById('cookies');
    const acceptButton = document.getElementById('accept-cookies'); 

    /* control if cookies have already been accepted */ 
    if (!localStorage.getItem("cookiesAccepted")) {
        cookiesPopup.style.display = "flex"; 
    }

    acceptButton.addEventListener("click", function () {
        localStorage.setItem("cookiesAccepted", "true");
        cookiesPopup.style.display = 'none'; 
    });
});
