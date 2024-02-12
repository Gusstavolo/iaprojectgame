
const cloudsGen = Math.floor(Math.random() * (150 - 25) + 25);

function draw() {
    const canvas = document.getElementById("clouds");
    if (canvas.getContext) {
      const ctx = canvas.getContext("2d");
  
      ctx.fillRect(25, 25, 200, 100);
      
      
    }
  }
  window.addEventListener("load", draw);