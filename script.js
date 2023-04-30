const acercaLink = document.querySelector('.submenu2-acerca');
const noticiasLink = document.querySelector('.submenu2-newstitle');
const comunidadLink = document.querySelector('submenu2-communitytitle');
const recomendacionesLink = document.querySelector('submenu2-recomendationstitle');


noticiasLink.addEventListener('click', () => {
  document.querySelector('#acerca').scrollIntoView({
    behavior: 'smooth',block: 'start', inline: 'nearest'
  });
});

comunidadLink.addEventListener('click', () => {
  document.querySelector('#newstitle').scrollIntoView({
    behavior: 'smooth',block: 'start', inline: 'nearest'
  });
});

recomendacionesLink.addEventListener('click', () => {
  document.querySelector('#communitytitle').scrollIntoView({
    behavior: 'smooth',block: 'start', inline: 'nearest'
  });
});
  
recomendacionesLink.addEventListener('click', () => {
    document.querySelector('#recomendationstitle').scrollIntoView({
      behavior: 'smooth',block: 'start', inline: 'nearest'
    });
  });

  if (window.location.hash === '#acerca') {
    document.querySelector('#acerca').scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    });
  }

  if (window.location.hash === '#newstitle') {
    document.querySelector('#newstitle').scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    });
  }
  if (window.location.hash === '#communitytitle') {
    document.querySelector('#communitytitle').scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    });
  }
  if (window.location.hash === '#recomendationstitle') {
    document.querySelector('#recomendationstitle').scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    });
  }



