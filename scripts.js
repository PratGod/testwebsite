const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const leftArrow = document.querySelector('.arrow.left');
const rightArrow = document.querySelector('.arrow.right');
let currentIndex = 0;

function updateSlider(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
        dots[i].classList.toggle('active', i === index);
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlider(currentIndex);
}

dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        currentIndex = i;
        updateSlider(currentIndex);
    });
});

rightArrow.addEventListener('click', nextSlide);
leftArrow.addEventListener('click', prevSlide);

setInterval(nextSlide, 5000); // Auto-play every 5 seconds
