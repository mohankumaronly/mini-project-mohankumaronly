const menuToggle = document.getElementById('menu-toggle');
const navbar = document.querySelector('.navbar');

menuToggle.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

const categoryCards = document.querySelectorAll('.category-card');

categoryCards.forEach(card => {
  card.addEventListener('click', () => {
    alert(`You clicked on the ${card.querySelector('h3').textContent} category!`);
  });
});

const coursesGrid = document.querySelector('.courses-grid');
let currentIndex = 0;

function showNext() {
  const cards = document.querySelectorAll('.course-card');
  if (currentIndex < cards.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  updateCarouselPosition();
}

function showPrevious() {
  const cards = document.querySelectorAll('.course-card');
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = cards.length - 1; 
  }
  updateCarouselPosition();
}

function updateCarouselPosition() {
  const cards = document.querySelectorAll('.course-card');
  const cardWidth = cards[0].offsetWidth + 20; 
  coursesGrid.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}


document.getElementById('next-btn').addEventListener('click', showNext);
document.getElementById('prev-btn').addEventListener('click', showPrevious);

