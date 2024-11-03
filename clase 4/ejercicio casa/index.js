let canvas = document.querySelector("#Caanvas");
let contexto = canvas.getContext("2d");
// ejercicio casita


contexto.fillStyle = "white";
contexto.fillRect(80, 200 , 140, 100);

contexto.fillStyle = "blue";
contexto.fillRect(135, 210, 30, 90);

contexto.fillStyle = "green";
contexto.fillRect(0, 300, 500, 30);

// ejes x, eje y, ancho, largo

// el punto 0;0 es la esquina superior izquierdo


// circulo en canvas


// contexto (x;y; radio; angulo inicial , funcion)

contexto.beginPath();
contexto.moveTo(150, 150);
contexto.lineTo(250,200);
contexto.lineTo(50,200);
contexto.closePath();
contexto.fillStyle = "red";
contexto.fill();


contexto.beginPath();
contexto.arc(190, 240, 20, 0, Math.PI * 2);
contexto.fillStyle = "black";
contexto.fill();
contexto.stroke();


