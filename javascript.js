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

/* Overlay before accepting cookies */ 

window.onload = function() {
    let overlay = document.createElement('div');
    overlay.id = 'overlay';
    document.body.appendChild(overlay);

    document.body.classList.add('overlay-active'); /* preventing scroll */

    document.getElementById('accept-cookies').addEventListener('click', function() {

        document.getElementById('overlay').style.display = 'none'; /* remove overlay */
        document.body.classList.remove('overlay-active'); /* enable scrolling */
    });

}

/*Get Started button to section 2 */ 

document.getElementById('startbtn').addEventListener('click', function(e) {
    e.preventDefault(); 

    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    targetElement.scrollIntoView({behavior: 'smooth'});
});

/* menu-button on smarthpones */ 

window.addEventListener('load', function() {
    const header = document.querySelector('.header');
    const fullscreenMenu = document.querySelector('.fullscreenmenu');
    
    const headerHeight = header.offsetHeight; /* dinamically calculating the height of the navigation bar */

    fullscreenMenu.style.top = `${headerHeight}px`;
});

document.getElementById('checkbox').addEventListener('change', function () {
    const header = document.querySelector('.header');
    const logo = document.querySelector('.logo');
    const hamburger = document.querySelector('.hamburger');
    const fullscreenmenu = document.querySelector('.fullscreenmenu');
    const body = document.querySelector('body');

    
    header.classList.toggle('white'); /* changing the header color to white */
    logo.classList.toggle('black'); /* changing the logo color to black */
    hamburger.classList.toggle('black'); /* inserting the hamburger icon */

    if (fullscreenmenu.style.display === 'flex') {  /* removing the fullscreen menu (starting from the end of the header) clicking on the hamburget */
        fullscreenmenu.style.display = 'none';
        body.classList.remove('no-scroll'); /* removing the scroll block */
    } else {
        fullscreenmenu.style.display = 'flex'; /* inserting the fullscreen menu (starting from the end of the header) clicking on the hamburger */
        body.classList.add('no-scroll'); /* activating the scroll block */
    }
});
