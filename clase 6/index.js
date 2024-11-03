const boton = document.getElementById('boton');

document.addEventListener('keydown', (event) => {
  const movimiento = 10; // Distancia a mover en cada paso

  switch (event.key) {
    case 'ArrowUp':
      boton.style.top = boton.offsetTop - movimiento + 'px';
      break;
    case 'ArrowDown':
      boton.style.top = boton.offsetTop + movimiento + 'px';
      break;
    case 'ArrowLeft':
      boton.style.left = boton.offsetLeft - movimiento + 'px';
      break;
    case 'ArrowRight':
      boton.style.left = boton.offsetLeft + movimiento + 'px';
      break;
  }
});

boton.addEventListener('mouseover', () => {
  boton.animate([
    { transform: 'scale(1)' },
    { transform: 'scale(1.2)' }
  ], {
    duration: 500,
    iterations: Infinity,
    direction: 'alternate'
  });
});

  
  // JavaScript
  boton.addEventListener('click', () => {
    boton.style.backgroundColor = 'red';
    boton.style.transform = 'rotate(360deg)';
  });