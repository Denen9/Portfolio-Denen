
 window.sr = ScrollReveal();

  //
  const elementsToReveal = [
    { selector: '.javaScript'},
    { selector: '.css',},
    { selector: '.html',},
    { selector: '.react',},
    { selector: '.python',},
    { selector: '.mysql',}
  ];
  const revealElementsWithDelay = ()=> {
    for (let i = 0; i < elementsToReveal.length; i++) {
      const element = elementsToReveal[i];
  
        const durationIncrement = 800; // Valor constante de incremento
        const initialDuration = 1000; // Duración inicial
        const elementDuration = initialDuration + i * durationIncrement;

        element.distance = 350
        elementDistance = element.distance + 50 + 'px';
  
      sr.reveal(element.selector, {
        duration: elementDuration,
        distance: elementDistance,
        origin: 'left'
      });
    }
  }
  
  revealElementsWithDelay();

  sr.reveal('.skills__box-span', {
    duration: 3000,
    origin: 'top',
    distance: '80px'
});

  
sr.reveal('.scroll-img', {
    duration: 3000,
    origin: 'bottom',
    distance: '100px'
});

sr.reveal('.hero__box-presentation', {
    duration: 3000,
    origin: 'Left',
    distance: '-200px'
});


sr.reveal('.hero__box-frontend', {
    duration: 3000,
    origin: 'right',
    distance: '200px'
});

sr.reveal('.hero__box-button', {
  duration: 3000,
  origin: 'bottom',
  distance: '200px'
});



sr.reveal('.about-me__text', {
    duration: 3000,
    origin: 'Left',
    distance: '-200px'
});

sr.reveal('.projects__title', {
  duration: 3000,
  origin: 'left',
  distance: '-200px'
});

sr.reveal('.text-right', {
  duration: 3000,
  origin: 'bottom',
  distance: '200px'
});

sr.reveal('.image-right', {
  duration: 2000,
  origin: 'bottom',
  distance: '200px'
});

sr.reveal('.text-left', {
  duration: 3000,
  origin: 'bottom',
  distance: '200px'
});

sr.reveal('.image-left', {
  duration: 2000,
  origin: 'bottom',
  distance: '200px'
});
