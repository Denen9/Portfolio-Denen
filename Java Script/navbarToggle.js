
const openMenuBtn = document.querySelector(".abrir-menu");
const navbarContainer = document.querySelector(".navbar-container")
const closeMenuBtn = document.querySelector(".cerrar-menu");
const header = document.querySelector(".header")

openMenuBtn.addEventListener("click", ()=>{

  navbarContainer.classList.add("display-flex")
  navbarContainer.classList.remove("display-none")
  openMenuBtn.classList.add("display-none")
  openMenuBtn.classList.remove("display-flex")

})

closeMenuBtn.addEventListener("click", ()=>{

  navbarContainer.classList.remove("display-flex")
  navbarContainer.classList.add("display-none")

})