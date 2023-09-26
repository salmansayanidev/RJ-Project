const currentPath = window.location.href.split('/')
const path = currentPath[currentPath.length -1]


const navLinks = document.querySelectorAll('.header-link');

navLinks.forEach(link => {
  link.classList.remove("active")
  
  
  if (link.getAttribute('href') === path) {
    link.classList.add('active');
  }
});



// policies section

const openSection = document.querySelectorAll(".open-section")

openSection.forEach((opnSec) => {
  opnSec.addEventListener('click', () => {
    const isActive = opnSec.parentElement.classList.contains('active');

    openSection.forEach((opnSection) => {
      opnSection.parentElement.classList.remove('active');
    });

    if (!isActive) {
      opnSec.parentElement.classList.add('active');
    }
  });
});





// menu
const openMenu  = document.querySelector(".menu")
const navigation  = document.querySelector(".navigation")
const closeMenu = document.querySelector(".close-menu")
const link = document.querySelectorAll(".click-close-menu")

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


const megaCategoryLink = document.querySelectorAll('.mega-category-link')

megaCategoryLink.forEach(megaCategory => {
  megaCategory.addEventListener('click' , () => {
    navigation.classList.remove('active')
  })
});

const megaSubCategory = document.querySelectorAll('.mega-sub-category')

megaSubCategory.forEach(megaSubCat => {
  megaSubCat.addEventListener('click' , () => {
    navigation.classList.remove('active')
  })
})


// search popup
function openSearch() {
  document.getElementById("myOverlay").style.display = "block";
}

function closeSearch() {
  document.getElementById("myOverlay").style.display = "none";
}


// responsive mega menu

const categoriesOPen = document.querySelectorAll(".main-menu-category")

categoriesOPen.forEach((button) => {
  button.addEventListener('click', () => {
    const isActive = button.parentElement.classList.contains('active');

    categoriesOPen.forEach((btn) => {
      btn.classList.remove('active');
    });

    if (!isActive) {
      button.classList.add('active');
    }
  });
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
    },
  );

// intagram slider
  $('.instagram-slider').slick({
    centerMode: true,
    centerPadding: '150px',
    Infinity:true,
    autoplay:true,
    slidesToShow: 6,
    prevArrow: false,
    nextArrow: false,
    speed: 500,
    responsive: [
      {
        breakpoint: 1601,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '100px',
          slidesToShow: 6 
        }
      },
      {
        breakpoint: 1025,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '80px',
          slidesToShow: 4 
        }
      },
      {
        breakpoint: 769,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3 
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '50px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 481,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '50px',
          slidesToShow: 2
        }
      }
    ]
  });


  // products page

  // related products slider
  var swiper = new Swiper(".related-products-slider", {
    slidesPerView: 1 ,
    spaceBetween: 0,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    },
  );



  const detailImages = document.querySelectorAll(".products-detail-image")
  const detailMainImg = document.querySelector(".products-detail-img")

  detailImages.forEach(img => {
    img.addEventListener('click' , () => {
      detailMainImg.src = img.src
    })
  })



  detailImages.forEach((detailImage) => {
    detailImage.addEventListener('click', () => {
    const isActive = detailImage.classList.contains('active');

    detailImages.forEach((detailImg) => {
      detailImg.classList.remove('active');
    });

    if (!isActive) {
      detailImage.classList.add('active');
    }
  });
});




$('.category-slider').slick({
  dots: false,
  speed: 600,
  infinite: true,
  autoplay: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  prevArrow: ".cat-slide-pre",
  nextArrow: ".cat-slide-next",
  responsive: [
    {
      breakpoint: 1202,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 766,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
   
  ]
});




const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
   
    const target = document.querySelector(tab.dataset.tabTarget)
    $('.category-slider').slick('refresh'); 
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active')
    })
    tabs.forEach(tab => {
      tab.classList.remove('active')
    })
    tab.classList.add('active')
    target.classList.add('active')
  })
})














