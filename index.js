let showMenu = false;

function onClick() {
  showMenu = !showMenu;
  
  let cardShareMenu = document.getElementById('card-share-menu');
  let cardShareMobile = document.getElementById('card-share-mobile');
  let cardShareMenuArrow = document.getElementById('card-share-menu-arrow');

  if (showMenu) {

    if (!window.matchMedia("(max-width: 800px)").matches) {      
      cardShareMenu.style.display = 'flex';
      cardShareMenuArrow.style.display = 'block';
      setTimeout(() => {
        cardShareMenu.style.opacity = 1;
        cardShareMenuArrow.style.opacity = 1;
      }, 20);  
      return;
    }

    console.log('Opening');

    console.log(cardShareMobile);

    cardShareMobile.style.display = 'flex';
    setTimeout(() => {
      cardShareMenu.style.opacity = 1;      
    }, 50);  

  } else {    

    if (!window.matchMedia("(max-width: 800px)").matches) {

      cardShareMenu.style.opacity = 0;
      cardShareMenu.addEventListener('transitionend', (e) => {
        cardShareMenu.style.display = 'none';
      }, {
        capture: false,
        once: true,
        passive: false
      })

      cardShareMenuArrow.style.opacity = 0;
      cardShareMenuArrow.addEventListener('transitionend', (e) => {
        cardShareMenuArrow.style.display = 'none';
      }, {
        capture: false,
        once: true,
        passive: false
      })

      return;
    }

    cardShareMobile.style.opacity = 0;
    cardShareMobile.addEventListener('transitionend', (e) => {
      cardShareMobile.style.display = 'none';
    }, {
      capture: false,
      once: true,
      passive: false
    })
    
  }; 
}