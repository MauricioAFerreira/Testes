// Menu Toggle
document.getElementById('menu-toggle').addEventListener('click', function() {
  this.classList.toggle('active');
  document.getElementById('dropdown-menu').classList.toggle('active');
});

// Slider Functionality
const sliderContainer = document.querySelector('.slider-container');
const sliderItems = document.querySelectorAll('.slider-item');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentIndex = 0;

function updateSlider() {
  const itemWidth = sliderItems[0].offsetWidth;
  sliderContainer.style.transform = `translateX(${-currentIndex * itemWidth}px)`;
}

prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
      currentIndex--;
      updateSlider();
  }
});

nextButton.addEventListener('click', () => {
  if (currentIndex < sliderItems.length - 1) {
      currentIndex++;
      updateSlider();
  }
});

// Initialize Slider
updateSlider();
