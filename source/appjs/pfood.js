let foodspawn = document.getElementById('foodfloor');
let foodAreaSpawn = document.getElementById('areafood');

let playerPOSX = player.offsetLeft;
let playerPOSY = player.offsetTop;

var elem = document.getElementById("myBar");
var width = 3;

let max_floor_width_areafood = foodAreaSpawn.offsetWidth;
let max_floor_height_areafood = foodAreaSpawn.offsetHeight;
let min_floor_width_areafood = 0;
let min_floor_height_areafood = 0;

foodspawn.style.left = '0px';
foodspawn.style.top = '0px';
foodspawn.style.display = 'block';

let displayfoodspawn = foodspawn.style.display;

const fooddish = document.getElementById('foodid');
var conttimefood = 1;

function timefood() {

  if (conttimefood == 0) {
    
    var fooddish = document.getElementById('foodid');
    var heigth = 1;
    var id = setInterval(frame, 500);
    fooddish.style.height = "0%";
    fooddish.style.opacity = '80%';

    function frame() {
      if (heigth >= 60) {
        clearInterval(id);
        conttimefood = 1;
        fooddish.style.opacity = '100%';
      } else {
        heigth++;
        fooddish.style.height = heigth + "%";
      }
    }
  }
}


function alimentarPlayer() {
    
    if (conttimefood == 1) {
        contI = 1;
        const playerSection = document.querySelector('#floorID');
        var audio = new Audio('./source/image/eatsound.wav');
        audio.addEventListener('canplaythrough', function() {
          audio.play();
        });
   
    const foodElement = document.createElement('div');
    foodElement.classList.add('foodinhand');
    const eatpart = document.createElement('div');
    eatpart.classList.add('eatparticle');
    
    // Definir posição inicial da comida
    foodElement.style.left = player.offsetLeft - 2 + 'px';
    foodElement.style.top = player.offsetTop + 5 + 'px';

    eatpart.style.left = player.offsetLeft - 42 + 'px';
    eatpart.style.top = player.offsetTop - 30  + 'px';

    playerSection.appendChild(foodElement);
    playerSection.appendChild(eatpart);
    
    conttimefood = 0;
    timefood();
    
    setTimeout(function() {
        foodElement.remove();
        eatpart.remove();
        contI = 0;
        elem.style.width = elem.offsetWidth + 30 + 'px';
    
     }, 3000);
    } 
}
  


function food() {
    elem.style.width = elem.offsetWidth - width + 'px';
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

//mecanica a ser melhorada
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

 
    




