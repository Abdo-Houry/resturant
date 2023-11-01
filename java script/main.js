// ===============the swiper code=============
var swiper = new Swiper(".swiper_card",{
    spaceBetween: 30,
    loop:true,
    speed:1000,
    autoplay:{
    delay:2000,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      480: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  });
  
// ===============the swiper code=============
let myicon = document.getElementsByClassName("ic__o");
myicon.onclick =function(){
  console.log("Abdo");
}
let span = document.querySelector(".up");
window.onscroll = function(){
  if(this.scrollY>=1000){
    span.classList.add("show");
  }else{
    span.classList.remove("show");
  }
};



/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 2000,
  reset: true
});

sr.reveal('.hid__2, para__g, .h___1, .p_5, .h_titel, .p_text, .r_t, .w_t, .p__1, .h__three', {
  interval: 200
})


ScrollReveal({ distance: '65px' });
ScrollReveal().reveal('', { origin: 'right' });
ScrollReveal().reveal('', { origin: 'left' });
// new WOW().init();
