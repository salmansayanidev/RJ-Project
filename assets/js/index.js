// swipper slider 1
var swiper = new Swiper(".mySwiper-1", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".arrow-right-1",
        prevEl: ".arrow-left-1",
      }
      
    },
  );

  // swipper slider 2
var swiper = new Swiper(".mySwiper-2", {
    slidesPerView: 4 ,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      },
      navigation: {
        nextEl: ".arrow-right-2",
        prevEl: ".arrow-left-2",
      }
      
    },
  );

  // swipper slider 3
var swiper = new Swiper(".mySwiper-3", {
    slidesPerView: 1 ,
    spaceBetween: 20,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    },
  );


// swipper slider 4
var swiper = new Swiper(".mySwiper-4", {
    slidesPerView: 1 ,
    spaceBetween: 0,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    //   },
    },
  );


//   testimonial slider
var swiper = new Swiper(".testimonial-slider", {
    slidesPerView: 1 ,
    spaceBetween: 0,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    //   },
    },
  );

//   instagram section slider
var swiper = new Swiper(".instagram-slider", {
    slidesPerView: 8,
    spaceBetween: 10,
    centeredSlides: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    // autoplay: {
    //   delay: 2500,
    //   disableOnInteraction: false
    // }
  });