// menu
const openMenu  = document.querySelector(".menu")
const navigation  = document.querySelector(".navigation")
const closeMenu = document.querySelector(".close-menu")
const link = document.querySelectorAll(".nav-link")

openMenu.addEventListener("click", function(e){
  e.preventDefault();
  navigation.classList.add("active")
})

closeMenu.addEventListener("click", function(e){
  e.preventDefault();
  navigation.classList.remove("active")
})

link.forEach(e => {
  e.addEventListener('click', function() {
    navigation.classList.remove("active")
  })
});



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
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      },
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
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
      nextEl: ".testimonial-btn-right",
      prevEl: ".testimonial-btn-left",
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
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      1280: {
        slidesPerView:6,
        spaceBetween:10,
      },
      1366: {
        slidesPerView:8,
        spaceBetween:10,
      }
    },
  });