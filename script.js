document.querySelectorAll('.product').forEach(product => {
    product.addEventListener('click', () => {
      alert('Product details coming soon!');
    });
  });
// Kap elementet kryesore të carousel-it
const carousel = document.querySelector('.carousel');
const track = document.querySelector('.carousel-track');
const items = document.querySelectorAll('.carousel-item');
const prevButton = document.querySelector('.carousel-button-prev');
const nextButton = document.querySelector('.carousel-button-next');

// Përmasat e një elementi të vetëm të carousel-it
const itemWidth = items[0].getBoundingClientRect().width;

// Vendos pozicionin fillestar të secilit element
items.forEach((item, index) => {
  item.style.left = `${index * itemWidth}px`;
});

// Indeksi aktual i elementit të parë të shfaqur
let currentIndex = 0;

// Funksioni për të lëvizur carousel-in
function moveCarousel(index) {
  const amountToMove = -index * itemWidth;
  track.style.transform = `translateX(${amountToMove}px)`;
}

// Funksionaliteti i butonit "Next"
nextButton.addEventListener('click', () => {
  if (currentIndex < items.length - 4) { // Kontroll që të mos kalojë fundin
    currentIndex++;
    moveCarousel(currentIndex);
  }
});

// Funksionaliteti i butonit "Prev"
prevButton.addEventListener('click', () => {
  if (currentIndex > 0) { // Kontroll që të mos kalojë fillimin
    currentIndex--;
    moveCarousel(currentIndex);
  }
});
document.addEventListener('DOMContentLoaded', () => {
  new Glide('.glide', {
    type: 'carousel',
    startAt: 0,
    perView: 3,
    gap: 20, // Hapësira midis elementëve
    autoplay: 3000 // Lëviz automatikisht çdo 3 sekonda
  }).mount();
});
