// Navbar
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
}

// Dark Mode
let darkmode = document.querySelector('#darkmode');

darkmode.onclick = () => {
    if(darkmode.classList.contains('bx-moon')){
        darkmode.classList.replace('bx-moon','bx-sun');
        document.body.classList.add('active');
    }else{
        darkmode.classList.replace('bx-sun','bx-moon');
        document.body.classList.remove('active');
    }
    if(document.body.classList.contains("active")){
        logo.src = "/images/logodark.png";  
    }else{
        logo.src = "/images/logolight.png"; 
    }
}

// Scroll Reveal
const sr = ScrollReveal ({
    origin: 'top',
    distance: '40px',
    duration: 2000,
    reset: true
});


sr.reveal(`.home-text, .home-img,
            .about-img, .about-text,
            .box, .s-box,
            .btn, .connect-text,
            .contact-box, .about-us-text,
            .about-us-img, .vision-text,
            .service-img, .service-text,
            .contact-us-container, .description p, 
            .about-food ul, .about-food img, 
            .customer-box, .contact-in,
            .desc-img, .checkout-input, .thankyou`, {
    interval: 200
})

// Popup Window
const toggleWindow = () =>document.querySelector('.popup-modal').style.display = "flex";
const addClickEvent = elem => elem.addEventListener('click', toggleWindow);

//Open overlay
document.querySelectorAll('.box i').forEach(addClickEvent);

// Close overlay
document.querySelector('.popup-window i').addEventListener('click', function() {
    document.querySelector(".popup-modal").style.display = "none";
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == document.querySelector('.popup-modal')) {
        document.querySelector('.popup-modal').style.display = "none";
    }
}
