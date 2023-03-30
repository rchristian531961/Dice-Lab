function diceRoll6(){
    return numberGenerator(1, 6);
}

function diceRoll10(){
    return numberGenerator(1,10);
}

function numberGenerator(min,max){
    return Math.floor(Math.random() * (max - min)+ min);
}

console.log(diceRoll6());