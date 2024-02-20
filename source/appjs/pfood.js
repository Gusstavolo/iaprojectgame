let foodspawn = document.getElementById('foodfloor');
let foodAreaSpawn = document.getElementById('areafood');

let playerPOSX = player.offsetLeft;
let playerPOSY = player.offsetTop;

var elem = document.getElementById("myBar");
var width = 1;

let max_floor_width_areafood = foodAreaSpawn.offsetWidth;
let max_floor_height_areafood = foodAreaSpawn.offsetHeight
let min_floor_width_areafood = 0;
let min_floor_height_areafood = 0;


foodspawn.style.left = '100px';
foodspawn.style.top = '100px';
foodspawn.style.display = 'block';

let displayfoodspawn = foodspawn.style.display;


function food() {
    elem.style.width = elem.offsetWidth - width + 'px';
    //console.log(elem.style.width);
}
function movefood() {
    if(playerPOSX != player.style.left){
        food();
        playerPOSX = player.style.left;
    }

    if(playerPOSY != player.style.top){     
        food();
        playerPOSY = player.style.top;     
    }   
}

let playertofood
function tofood() {
    playertofood = calcularComandos(player.offsetLeft, player.offsetTop, foodspawn.offsetLeft, foodspawn.offsetTop);
}

function movetofood() {
    tofood();
    

        switch(displayfoodspawn) {
            case 'block':
                for (let prop in playertofood) {
                                
                    moverPlayer(playertofood[prop].x, playertofood[prop].y, duracao);
                
                }
            break;


        }


    }
    




