// Aktivizimi i GlideJS për Carousel
new Glide('.glide').mount();

document.addEventListener('DOMContentLoaded', function () {
    new Glide('.glide', {
      type: 'carousel',
      perView: 3,
      breakpoints: {
        768: {
          perView: 1
        },
        1024: {
          perView: 2
        }
      }
    }).mount();
  });
  