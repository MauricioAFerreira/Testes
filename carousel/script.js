document.getElementById('menu-toggle').addEventListener('click', function() {
    this.classList.toggle('active'); // Alterna a classe 'active' no botão
    document.getElementById('dropdown-menu').classList.toggle('active'); // Alterna a classe 'active' no menu
  });
  
  const sliderContainer = document.querySelector('.slider-container');
const sliderItems = document.querySelectorAll('.slider-item');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const totalItems = sliderItems.length;
const itemWidth = sliderItems[0].offsetWidth;
const spaceBetweenItems = parseInt(window.getComputedStyle(sliderItems[0]).marginRight);
const sliderWidth = itemWidth + spaceBetweenItems;
let currentIndex = 0;

function updateSlider() {
  const offset = -currentIndex * sliderWidth;
  sliderContainer.style.transform = `translateX(${offset}px)`;
}

prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlider();
  }
});

nextButton.addEventListener('click', () => {
  if (currentIndex < totalItems - 1) {
    currentIndex++;
    updateSlider();
  }
});

updateSlider();
