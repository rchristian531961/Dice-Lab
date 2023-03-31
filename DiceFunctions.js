function diceRoll6(){
    return numberGenerator(1, 7);
}

function diceRoll10(){
    return numberGenerator(1,11);
}

function numberGenerator(min,max){
    return Math.floor(Math.random() * (max - min)+ min);
}

function diceRoll6Display(){
    //console.log(diceRoll6());
    document.getElementById("roll").innerHTML = diceRoll6(); //For displaying in HTML using Button 
}
function diceRoll10Display(){
    //console.log(diceRoll10());
    document.getElementById("roll2").innerHTML = diceRoll10(); //For displaying in HTML using Button
}

/*
for (let i = 0; i < 5; i++){
diceRoll10Display();
diceRoll6Display();
}*/