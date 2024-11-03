const canvas = document.getElementById('Canvas1');
const ctx = canvas.getContext('2d');

function dibujarCirculo() {
  ctx.beginPath();
  ctx.arc(100, 100, 50, 0, Math.PI * 2);
  ctx.stroke();
}

dibujarCirculo();

function dibujarCirculos(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, 50, 0, Math.PI * 2);
  ctx.stroke();
}

dibujarCirculos(150, 200);
dibujarCirculos(200, 300);
dibujarCirculos(350, 200);

function areaDelCirculo (radio){
return Math.PI * radio * radio;
};

console.log (areaDelCirculo(50))

// ctx.beginPath();
// ctx.arc(150, 100, 50, 0, Math.PI * 2);
// ctx.stroke();

// ctx.beginPath();
// ctx.arc(100, 200, 50, 0, Math.PI * 2);
// ctx.stroke();

// ctx.beginPath();
// ctx.arc(300, 100, 50, 0, Math.PI * 2);
// ctx.stroke();


function PosicionCasa (x, y) {
  // Dibujar la casa
  ctx.beginPath();
  ctx.rect(x, y, 200, 150);
  ctx.stroke();

  // Dibujar la puerta
  ctx.beginPath();
  ctx.rect(x + 75, y + 100, 50, 50);
  ctx.stroke();

  // Dibujar la ventana
  ctx.beginPath();
  ctx.rect(x + 25, y + 25, 50, 50);
  ctx.stroke();

  // Dibujar el techo
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + 100, y - 50);
  ctx.lineTo(x + 200, y);
  ctx.closePath();
  ctx.stroke();
}

PosicionCasa(100, 100); // llamada a la función
PosicionCasa(200, 100); // llamada a la función
PosicionCasa(250, 250); // llamada a la función
