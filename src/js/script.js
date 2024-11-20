// *** CAROUSEL ***
// TODO


const carousel = document.querySelector(".carousel__container");
carousel.scrollLeft = 520;

carousel.scrollBy({ left: +260, behavior: "smooth" });

carousel.scrollBy({ left: -260, behavior: "smooth" });