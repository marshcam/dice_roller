let rollButton = document.querySelector("#roll-button");
let inputText = document.querySelector("#text");
let diceTotal = document.querySelector("#sum-total");
let showAllRolls = document.querySelector("#show-all-buttons");
let dieRolls = [];
let resetButton = document.querySelector("#reset-button");
let totalResets = document.querySelector("#num-resets");
let rollResults = document.querySelector("#roll-results");



let givemearandomnumber = Math.floor(Math.random() * ((6-1)+1) + 1);



rollButton.addEventListener("click", function () {
    console.log("Roll button clicked");
    let numberOfDice = Number(inputText.value);
    console.log(inputText.value);
    let count = 0;
    dieRolls = [];
    inputText.value = "";
    let newdiceTotal = 0

    while (count < numberOfDice) {
        let givemearandomnumber = Math.floor(Math.random() * ((6-1)+1) + 1);
        dieRolls.push("The number rolled: " + givemearandomnumber)

        newdiceTotal = newdiceTotal + givemearandomnumber
        diceTotal.innerHTML = newdiceTotal 
        console.log(dieRolls)
        count++;
    }
})



    showAllRolls.addEventListener("click", function () {
        rollResults.innerHTML = "";
        let count = 0;

        while (count < dieRolls.length) {
            console.log(dieRolls[count]);
            rollResults.innerHTML += "<li>" + dieRolls[count] + "</li>"
            count++;

        }
    })


    resetButton.addEventListener("click", function () {
        console.log("Reset button clicked");
        let newtotalResets = Number(totalResets.innerHTML) + 1;
        totalResets.innerHTML = newtotalResets;
        
        
        rollResults.innerHTML = 0
        diceTotal.innerHTML = 0
    })