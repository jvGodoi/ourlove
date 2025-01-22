const swiper = new Swiper(".swiper", {
  // Optional parameters
  autoplay: {
    delay: 4000, // 4 segundos
    disableOnInteraction: false, // Continua o autoplay mesmo após interação
  },

  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
