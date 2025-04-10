function diceGame(){
    let randomDice1= Math.ceil(Math.random()*6);
    document.querySelector(".img1").setAttribute("src",`./images/dice${randomDice1.toString()}.png`)
    
    let randomDice2 = Math.ceil(Math.random()*6);
    document.querySelector(".img2").setAttribute("src",`./images/dice${randomDice2.toString()}.png`)

    let winText = document.querySelector("h1");
    if (randomDice1 > randomDice2){
        winText.textContent = "Player 1 wins"
    }
    else if(randomDice1 < randomDice2){
        winText.textContent = "Player 2 Win"
    }
    else{
        winText.textContent = "Draw"
    }

}
