// gaming.js

document.addEventListener('DOMContentLoaded', () => {
  const track = document.getElementById('carouselTrack');
  const leftArrow = document.getElementById('leftArrow');
  const rightArrow = document.getElementById('rightArrow');

  const slideWidth = 295;           // 280px (box) + 15px (margin-right)
  let currentIndex = 0;

  function updateArrows() {
    const totalProducts = track.children.length;
    const visibleItems = 4;                    // How many products you want to show at once
    const maxIndex = totalProducts - visibleItems;

    leftArrow.style.opacity = currentIndex <= 0 ? '0.4' : '1';
    rightArrow.style.opacity = currentIndex >= maxIndex ? '0.4' : '1';

    // Optional: disable clicking when at ends
    leftArrow.style.pointerEvents = currentIndex <= 0 ? 'none' : 'auto';
    rightArrow.style.pointerEvents = currentIndex >= maxIndex ? 'none' : 'auto';
  }

  function moveCarousel(direction) {
    const totalProducts = track.children.length;
    const visibleItems = 4;
    const maxIndex = Math.max(0, totalProducts - visibleItems);

    currentIndex += direction;

    // Keep within bounds
    if (currentIndex < 0) currentIndex = 0;
    if (currentIndex > maxIndex) currentIndex = maxIndex;

    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

    updateArrows();
  }

  // Event listeners
  leftArrow.addEventListener('click', () => moveCarousel(-1));
  rightArrow.addEventListener('click', () => moveCarousel(1));

  // Initialize
  updateArrows();
});
