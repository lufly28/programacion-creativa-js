function drawPacman (x,y,radio,ctx){
    ctx.beginPath();
    ctx.arc(200, 200, 150, 0.2 * Math.PI, 1.8 * Math.PI);
    ctx.lineTo(200, 200);
    ctx.fillStyle = "yellow";
    ctx.fill();
}

function drawPacman(x, y, radius, ctx) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0.2 * Math.PI, 1.8 * Math.PI);
    ctx.lineTo(x, y);
    ctx.fillStyle = "yellow";
    ctx.fill();
  }
  
  drawPacman(200, 200, 150, ctx);

  function drawPacman(x, y, radius, ctx) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0.2 * Math.PI, 1.8 * Math.PI);
    ctx.lineTo(x, y);
    ctx.fillStyle = "yellow";
    ctx.fill();
  }
  
  function drawRandomPacmans(n, ctx) {
    for (let i = 0; i < n; i++) {
      const x = Math.floor(Math.random() * ctx.canvas.width);
      const y = Math.floor(Math.random() * ctx.canvas.height);
      const radius = Math.floor(Math.random() * 100) + 50;
      drawPacman(x, y, radius, ctx);
    }
  }
  
  drawRandomPacmans(5, ctx);
  console.log(Math,floor(5.90))

  const x = Math.floor(Math.random() * ctx.canvas.width);
//               0.008463111622209807 x  400
//                        3.3852446488839227
// aplicamos Math.floor(3.3852446488839227) para redondear hacia abajo ---> 3