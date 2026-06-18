"use strict";

/**************************Open Page Particles**************************/
const particlePage = document.getElementById('particlePage');
for (let i = 0; i < 50; i++) {
    const particle = document.createElement('div');//Creates a new <div> element in memory.
    particle.className = 'particle'; //Gives the div the class "particle".
    particle.style.setProperty('--x', `${Math.random() * 200 - 100}px`);
    particle.style.setProperty('--y', `${Math.random() * 200 - 100}px`);
    particle.style.animation = `particleFloat ${1 + Math.random() * 2}s infinite`;
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    particlePage.appendChild(particle);
}
/**************************Confetti Explosion Engine**************************/
function explodeConfetti() {
    const colors = [
        "#ff0000", "#00ff00", "#0000ff",
        "#ffff00", "#ff00ff", "#00ffff"
    ];

    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    for (let i = 0; i < 150; i++) {
        const piece = document.createElement("div");
        piece.classList.add("confetti");

        piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        piece.style.left = centerX + "px";
        piece.style.top = centerY + "px";

        document.body.appendChild(piece);

        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * 400 + 100;

        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;

        piece.animate(
            [
                {
                    transform: "translate(-50%, -50%) translate(0,0) rotate(0deg)",
                    opacity: 1
                },
                {
                    transform: `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(720deg)`,
                    opacity: 0
                }
            ],
            {
                duration: 3500,
                easing: "cubic-bezier(.1,.8,.2,1)"
            }
        );

        // Clean up DOM elements after animation ends
        setTimeout(() => piece.remove(), 3500);
    }
}
/**************************Photo Page Slideshow**************************/
let slideIndex = 0;
const slides = document.querySelectorAll(".mySlides");

slides[0].classList.add("active");

setInterval(() => {

    slides[slideIndex].classList.remove("active");

    slideIndex++;

    if(slideIndex >= slides.length){
        slideIndex = 0;
    }

    slides[slideIndex].classList.add("active");

}, 5000);
/**************************Navigation Control Matrix**************************/
function toFirstPage(){
    const music = document.getElementById("bgMusic");
    if (music) {
        music.play().catch(e => console.log("Audio play deferred or blocked by browser security policy"));
    }    
    document.getElementById("particlePage").style.display = "none";
    document.getElementById("firstPage").style.display = "grid";
    document.getElementById("photoPage").style.display = "none";    
    document.getElementById("wishPage").style.display = "none";
    explodeConfetti(); 
}

function toPhotoPage(){
    document.getElementById("particlePage").style.display = "none";
    document.getElementById("firstPage").style.display = "none";
    document.getElementById("photoPage").style.display = "block";    
    document.getElementById("wishPage").style.display = "none";
    showSlides();
}
function toWishPage(){
    document.getElementById("particlePage").style.display = "none";
    document.getElementById("firstPage").style.display = "none";
    document.getElementById("photoPage").style.display = "none";    
    document.getElementById("wishPage").style.display = "block";
}
function restart(){
    document.getElementById("particlePage").style.display = "flex";
    document.getElementById("firstPage").style.display = "none";
    document.getElementById("photoPage").style.display = "none";    
    document.getElementById("wishPage").style.display = "none";
    // Reset counters cleanly
    slideIndex = 0;
    clearTimeout(slideshowTimer);
}