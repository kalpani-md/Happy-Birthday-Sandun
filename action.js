"use strict";
function explodeConfetti() {

    const colors = [
        "#ff0000",
        "#00ff00",
        "#0000ff",
        "#ffff00",
        "#ff00ff",
        "#00ffff"
    ];
    // Explosion center
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    for (let i = 0; i < 150; i++) {

        const piece = document.createElement("div");
        piece.classList.add("confetti");

        piece.style.backgroundColor =
            colors[Math.floor(Math.random() * colors.length)];

        piece.style.left = centerX + "px";
        piece.style.top = centerY + "px";

        document.body.appendChild(piece);

        // Random direction
        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * 400 + 100;

        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;

        piece.animate(
            [
                {
                    transform: "translate(0,0) rotate(0deg)",
                    opacity: 1
                },
                {
                    transform: `translate(${x}px, ${y}px) rotate(720deg)`,
                    opacity: 0
                }
            ],
            {
                duration: 1500,
                easing: "cubic-bezier(.1,.8,.2,1)"
            }
        );

        setTimeout(() => piece.remove(), 1500);
    }
}
window.onload = explodeConfetti;
/**************************Photo Page**************************/
let slideIndex = 0;
showSlides();
function showSlides() {
    let i;
    let slides = document.getElementsByClassName("images");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1  
    } 
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 5000); // Change image every 2 seconds
}
/**************************Moving**************************/
function toFirstPate(){
    document.getElementById("open-page").style.display = "none";
    document.getElementById("first-page").style.display = "grid";
    document.getElementById("photo-page").style.display = "none";    
    document.getElementById("wish-page").style.display = "none";
}
function toPhotoPage(){
    document.getElementById("open-page").style.display = "none";    
    document.getElementById("first-page").style.display = "none";
    document.getElementById("photo-page").style.display = "block";    
    document.getElementById("wish-page").style.display = "none";
}
function toWishPage(){
    document.getElementById("open-page").style.display = "none";
    document.getElementById("first-page").style.display = "none";
    document.getElementById("photo-page").style.display = "none";    
    document.getElementById("wish-page").style.display = "block";
}
function restart(){
    document.getElementById("open-page").style.display = "block";
    document.getElementById("first-page").style.display = "none";
    document.getElementById("photo-page").style.display = "none";    
    document.getElementById("wish-page").style.display = "none";
}

/*
    const music = document.getElementById("bgMusic");
    music.play();*/