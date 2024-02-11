/*
function sign(num){
    return num >= 0 ? 1 : -1
}
class Perceptron {
    weights = [0,0]

    constructor() {
        for (let i = 0; i < this.weights.length; i++ ){
            this.weights[1] = random(-1, 1)
        }
    }
    guess(inputs) {
        let sum = 0;
        
        for(let i = 0; i <this.weights.length; i++){
            sum +=inputs[i] * this.weights[i]
        }
        const output = sign(sum);
        return output;
    }
 
}
*/