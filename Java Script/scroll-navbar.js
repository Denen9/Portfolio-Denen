

function changeNavbarBackground() {
    const navbarContainer = document.getElementById("header");
  
    if (window.innerWidth > 1024) {
      if (window.scrollY > 0) {
        navbarContainer.classList.add('solid-background');
      } else {
        navbarContainer.classList.remove('solid-background');
      }
    } else {
      navbarContainer.classList.remove('solid-background');
    }
  }
  
  window.addEventListener('scroll', changeNavbarBackground);