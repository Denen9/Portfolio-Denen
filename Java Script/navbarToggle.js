

const openMenuBtn = document.getElementById("open");
const navbarContainer = document.querySelector(".navbar-container")
const closeMenuBtn = document.getElementById("close");

openMenuBtn.addEventListener("click", ()=>{

  navbarContainer.classList.add("display-flex")

})

closeMenuBtn.addEventListener("click", ()=>{

  navbarContainer.classList.remove("display-flex")
  navbarContainer.classList.add("display-none")
})