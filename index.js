let m = 0;


function randomCharacter (stringLength){
    var randomString = '';

    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for( var i = 0; i < stringLength; i++){
        randomString += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return randomString;
}



function latterGanarate (){

    for(let i = 1; i < 4; i++){
        document.querySelector(`.display${i}`).innerHTML = randomCharacter(1);
    }
}
latterGanarate();



let display1 = document.querySelector(`.display1`).innerHTML;
let display2 = document.querySelector(`.display2`).innerHTML;
let display3 = document.querySelector(`.display3`).innerHTML;

function checkDisplay(){
    if(display1 === display2){
        document.querySelector(`.display2`).innerHTML = randomCharacter(1);   
    }else if(display1 === display3){
        document.querySelector(`.display3`).innerHTML = randomCharacter(1);
    }else if(display2 === display3){
        document.querySelector(`.display3`).innerHTML = randomCharacter(1);
    }
}

checkDisplay();




function visible(){
    for (let i = 1; i < 4; i++){
        document.querySelector(`.display${i}`).style.visibility = "hidden";
    }
    
}

visible();



function result (){
    if(userTurn === display1){
        document.querySelector(`h4`).innerHTML = "well done!";
    } else if(userTurn === display2){
        document.querySelector(`h4`).innerHTML = "well done!";
    }else if(userTurn === display3){
        document.querySelector(`h4`).innerHTML = "well done!";
    }else{
        document.querySelector(`h4`).innerHTML = "try again";
    }



    resultShow();
    displayClolorChange();
    incressM();
    gameOver();

    console.log(m);

    setTimeout(() => {
        document.querySelector(`h4`).innerHTML = "" ;
      }, 1000);
}




function resultShow(){
    if(userTurn === display1){
        document.querySelector(`.display1`).style.visibility = "visible";
    } else if(userTurn === display2){
        document.querySelector(`.display2`).style.visibility = "visible";
    }else if(userTurn === display3){
        document.querySelector(`.display3`).style.visibility = "visible";
    }
}




function displayClolorChange(){
    if(userTurn === display1){
        document.querySelector(`.dd1`).classList.add("light-green");
    } else if(userTurn === display2){
        document.querySelector(`.dd2`).classList.add("light-green");
    }else if(userTurn === display3){
        document.querySelector(`.dd3`).classList.add("light-green");
    }
}



function incressM(){
    if(userTurn === display1){
        m++
    } else if(userTurn === display2){
        m++
    }else if(userTurn === display3){
        m++
    }
}



function gameOver(){
    if(m == 3){
        document.querySelector(".game-over").style.visibility = "visible";
    }
}


