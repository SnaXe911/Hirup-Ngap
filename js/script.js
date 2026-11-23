let currentSlide = 0;

function startSlideshow() {
    const track = document.querySelector('.slideshow-track');
    let slides = document.querySelectorAll('.slide');
    
    if (!track || slides.length === 0) return;

    const firstClone = slides[0].cloneNode(true);
    track.appendChild(firstClone);
    slides = document.querySelectorAll('.slide');

    setInterval(() => {
        currentSlide++;
        track.style.transition = 'transform 0.6s ease-in-out';
        track.style.transform = `translateX(-${currentSlide * 100}%)`;
        
        if (currentSlide === slides.length - 1) {
            setTimeout(() => {
                track.style.transition = 'none'; 
                currentSlide = 0;
                track.style.transform = `translateX(0)`;
            }, 600); 
        }
    }, 3000);
}

document.addEventListener('DOMContentLoaded', startSlideshow);