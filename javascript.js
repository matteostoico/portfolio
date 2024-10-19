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

/*Get Started button to section 2 */ 

document.querySelector('startbtn').addEventListener("click", function(e) {
    e.preventDefault(); 

    const targetId = this.getAttribute('href'); 
    const targetElement = document.querySelector('targetId');

    targetElement.scrollIntoView({behavior: "smooth"});
});

/* menu-button on smarthpones */ 

document.getElementById('checkbtn').addEventListener('click', function () {
    const header = document.querySelector('.header');
    const logo = document.querySelector('.logo');
    const checkbtn = document.querySelector('.checkbtn');
    
    header.classList.toggle('white');
    logo.classList.toggle('black');
    checkbtn.classList.toggle('black');
});
