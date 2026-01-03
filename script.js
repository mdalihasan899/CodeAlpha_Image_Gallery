// Select elements
const images = document.querySelectorAll('.gallery img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const filterButtons = document.querySelectorAll('.filter-btn');

let currentIndex = 0;

/* Open lightbox */
function openLightbox(index) {
  currentIndex = index;
  lightbox.style.display = 'flex';
  lightboxImg.src = images[currentIndex].src;
}

/* Close lightbox */
function closeLightbox() {
  lightbox.style.display = 'none';
}

/* Next / Prev */
function changeImage(step) {
  currentIndex += step;

  if (currentIndex < 0) currentIndex = images.length - 1;
  if (currentIndex >= images.length) currentIndex = 0;

  lightboxImg.src = images[currentIndex].src;
}

/* Filter images + active button */
function filterImages(category, btn) {
  // Set active class on clicked button
  filterButtons.forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  // Show/hide images
  images.forEach(img => {
    if (category === 'all' || img.classList.contains(category)) {
      img.style.display = 'block';
    } else {
      img.style.display = 'none';
    }
  });
}

/* Keyboard support */
document.addEventListener('keydown', function (e) {
  if (lightbox.style.display === 'flex') {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') changeImage(-1);
    if (e.key === 'ArrowRight') changeImage(1);
  }
});

/* Click outside image to close */
lightbox.addEventListener('click', function (e) {
  if (e.target === lightbox) closeLightbox();
});
