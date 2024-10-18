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

