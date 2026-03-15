// gaming.js

document.addEventListener('DOMContentLoaded', () => {
  const track = document.getElementById('carouselTrack');
  const leftArrow = document.querySelector('.arrow.left');
  const rightArrow = document.querySelector('.arrow.right');

  // Width of each product box including margin
  const productWidth = 295; 
  const visibleProducts = 4; // show 4 at a time
  let currentIndex = 0;

  function moveCarousel(direction) {
    const totalProducts = track.children.length;

    currentIndex += direction;

    // Prevent sliding before first product
    if (currentIndex < 0) currentIndex = 0;

    // Prevent sliding past last visible product
    if (currentIndex > totalProducts - visibleProducts) {
      currentIndex = totalProducts - visibleProducts;
    }

    track.style.transform = `translateX(-${currentIndex * productWidth}px)`;
  }

  // Attach event listeners
  leftArrow.addEventListener('click', () => moveCarousel(-1));
  rightArrow.addEventListener('click', () => moveCarousel(1));
});
