const player = document.getElementById("player");
const floor = document.getElementById('floorID');
const ctx = player.getContext("2d");

var max_floor_width = floor.offsetWidth - 10;
var max_floor_height = floor.offsetHeight - 30;
var min_floor_width = 0;
var min_floor_height = -20;

let playerX = player.offsetLeft;
let playerY = player.offsetTop;


console.log(playerX);

function moveUP() {
        /*
        inputs, 1. verifica se o player esta no limite de altura
        se 1 nao esta
        se 0 esta
        */
         let i1 = player.offsetTop > min_floor_height ? 1 : 0;

         const threshold = 0.4;
         const inputs = [i1];
         const weights = [0.5];

         let sum = 0;

         for (let i = 0; i < inputs.length; i++) {
           sum += inputs[i] * weights[i];
        }

        let output = sum > threshold ? 1 : 0;

        return output;
}
function moveDAWN(){
    let i1 = player.offsetTop < max_floor_height ? 1 : 0;

    const threshold = 0.4;
    const inputs = [i1];
    const weights = [0.5];

    let sum = 0;

    for (let i = 0; i < inputs.length; i++) {
      sum += inputs[i] * weights[i];
   }

   let output = sum > threshold ? 1 : 0;

   return output;


}
function moveLEFT() {
    let i1 =  player.offsetLeft > min_floor_width ? 1 : 0;
    

    const threshold = 0.4;
    const inputs = [i1];
    const weights = [0.5];

    let sum = 0;

    for (let i = 0; i < inputs.length; i++) {
      sum += inputs[i] * weights[i];
   }

   let output = sum > threshold ? 1 : 0;

   return output;
}
function moveRIGHT(){
    let i1 = player.offsetLeft < max_floor_width ? 1 : 0;

    const threshold = 0.4;
    const inputs = [i1];
    const weights = [0.5];

    let sum = 0;

    for (let i = 0; i < inputs.length; i++) {
      sum += inputs[i] * weights[i];
   }

   let output = sum > threshold ? 1 : 0;

   return output;
}


var playerspeed = 10;
function mU(){ if(moveUP() == 1)
    {player.style.top = (player.offsetTop + playerspeed) + 'px';}}


function mD(){if(moveDAWN() == 1)
   {player.style.top = (player.offsetTop - playerspeed) + 'px';}}


function mL(){ if(moveLEFT() == 1)
    {player.style.left = (player.offsetLeft + playerspeed) + 'px';}}

    
function mR(){if (moveRIGHT() == 1)
    {player.style.left = (player.offsetLeft - playerspeed) + 'px';}}



function playerstatusmove() {
    const threshold = 0.1;
    const inputs = [moveUP(),moveDAWN(),moveLEFT(),moveRIGHT()];
    const weights = [0.5,0.4,0.3,0.2];

    let sum = 0;

    for (let i = 0; i < inputs.length; i++) {
      sum += inputs[i] * weights[i];
   }
   let output = sum > threshold ? 1 : 0;

   var moveOn = Math.floor(Math.random() * (inputs.length - 0) + 0);
   switch(output) {
    case 1:
            switch(moveOn) {
                case 0:
                    mU();
                    break;
                case 1:
                    mD();
                    break;
                case 2:
                    mL();
                    break;
                case 3:
                    mR();
                    break;
            }
             break;
    
    case 11:

        break;
   }
}


setInterval(() => {
playerstatusmove();
/*
 if (moveDAWN() == 1) {
    player.style.top = (player.offsetTop + 10) + 'px' 
 }
 */
/*
 if (moveRIGHT() == 1) {
    player.style.left = (player.offsetLeft + 10) + 'px';
 }
 */
 /*
   if (moveUP() == 1
  ) {
    player.style.top = (player.offsetTop - 10) + 'px';
 }
 if (moveLEFT() == 1) {
    player.style.left = (player.offsetLeft - 10) + 'px';
 }
 
*/

 console.log('up: '+ moveUP() + ' dawn: ' + moveDAWN() + ' left: '+ moveLEFT() +' right: ' + moveRIGHT());

}, 1000);






 

