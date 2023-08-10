
const navbarContainer = document.querySelector('.header');


  function changeNavbarBackground() {
    if (window.scrollY > 0) {
      navbarContainer.classList.add('solid-background');
    } else {
      navbarContainer.classList.remove('solid-background');
    }
  }
  

  window.addEventListener('scroll', changeNavbarBackground);
  