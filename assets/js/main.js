


// sub menu
const catSbMenuOpen = document.querySelector('.category-side-bar')
const sbMenuBtn = document.querySelector('.cate-sb-menu')
const closeCatSbMenu = document.querySelector('.close-sb-menu')

sbMenuBtn.addEventListener('click' , () => {
  catSbMenuOpen.classList.add('active')
})

closeCatSbMenu.addEventListener('click' , () => {
  catSbMenuOpen.classList.remove('active')
})



