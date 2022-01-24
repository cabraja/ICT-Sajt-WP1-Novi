const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

const translateSlides = () => {
    slides.forEach(slide => {
            slide.style.transform = `translateX(-${currentSlide}%)`;
    })
}

setInterval(() => {

    currentSlide += 100;

   if(currentSlide < 400){
       translateSlides();
   }    
   else{
       currentSlide = 0;
       translateSlides();
   }
}, 5000);


const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");

leftArrow.addEventListener("click",() => {
    if(currentSlide > 0){
        currentSlide -= 100;
        translateSlides();
    }
})

rightArrow.addEventListener("click",() => {
    if(currentSlide < 300){
        currentSlide += 100;
        translateSlides();
    }
})