const xymax = document.getElementById('floor-3d');
const maxX = xymax.offsetWidth;
const maxY = xymax.offsetHeight;

const value = document.querySelector("#value");
const input = document.querySelector("#pi_input");

value.textContent = input.value;
input.addEventListener("input", (event) => {
  value.textContent = event.target.value;
});







function movePlayer() {
    function playerUp() {
        if (player.offsetTop > -40) {
            player.style.top = (player.offsetTop - 10) + 'px';
        }
    }
    function playerDawn() {
        if (player.offsetTop < maxY - 60) {
            player.style.top = (player.offsetTop + 10) + 'px';
        }
    }
    function playerLeft() {
        if (player.offsetLeft > 0) {
            player.style.left = (player.offsetLeft - 10) + 'px';
        }
    }
    function playerRight() {
        if (player.offsetLeft < maxX - 10) {
            player.style.left = (player.offsetLeft + 10) + 'px';
        }
    }


    const direcao = Math.floor(Math.random() * (4 - 0) + 0);
    
    switch (direcao) {

            case 0:
                 playerUp();
                 break;
            case 1:
                 playerDawn();
                 break;
            case 2:
                 playerLeft()
                 break;
            case 3:
                 playerRight();
                 break;
            case 4:
                

    }
    setTimeout(() => {
    movePlayer();

    console.log(direcao)
    
  }, input.value);
} 
movePlayer();
