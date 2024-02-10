
const xymax = document.getElementById('floor-3d');
const maxX = xymax.offsetWidth;
const maxY = xymax.offsetHeight;

const valuerange = document.getElementById('tempo-range');
vlx = valuerange.value;





// Função para mover o player aleatoriamente
function moverPlayerAleatoriamente() {


    // Gerando um número aleatório para determinar a direção do movimento
   
    const direcao = Math.floor(Math.random() * 4); // 0: cima, 1: baixo, 2: esquerda, 3: direita
    console.log(valuerange.value);
    

    let xtemp = vlx;
    console.log(xtemp);
    if (xtemp != valuerange.value) {
        direcao = Math.floor(Math.random() * 0);
    }
    // Movendo o player de acordo com a direção escolhida
    

        switch (direcao) {
            case 0:
                if (player.offsetTop > -40) {
                    player.style.top = (player.offsetTop - 10) + 'px';
                }
                break;
            case 1:
                if (player.offsetTop < maxY - 60) {
                    player.style.top = (player.offsetTop + 10) + 'px';
                }
                break;
            case 2:
                if (player.offsetLeft > 0) {
                    player.style.left = (player.offsetLeft - 10) + 'px';
                }
                break;
            case 3:
                if (player.offsetLeft < maxX - 10) {
                    player.style.left = (player.offsetLeft + 10) + 'px';
                }
                break;

        };
    
    // Chamando a função para mover o player aleatoriamente a cada 1 segundo
} setInterval(moverPlayerAleatoriamente, vlx);

valuerange.addEventListener('input', function () {

    vlx = valuerange.value;

    setInterval(moverPlayerAleatoriamente, vlx);

    console.log('Valor do input:', vlx);

});
