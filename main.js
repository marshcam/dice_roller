let rollButton = document.querySelector("#roll-button");
let inputText = document.querySelector("#text");
let diceTotal = document.querySelector("#sum-total");

let dieRolls = [];
let resetButton = document.querySelector ("#reset-button")
let totalResets = document.querySelector ("#num-resets");

rollButton.addEventListener("click", function () {
    console.log("Roll button clicked");
    let newdiceTotal = Number(inputText.value);
    console.log(newdiceTotal);
    let count = 0
    while (count < newdiceTotal) {
        let x = Math.floor(Math.random() * ((6-1)+1) + 1);
        console.log(x)
        if (newdiceTotal < x[count])
        newdiceTotal = x[count]
        diceTotal.innerHTML = [x + count];
        console.log([count])
        count ++
    }

   
    

})

resetButton.addEventListener("click", function () {
    console.log("Reset button clicked");
    let newtotalResets = Number(totalResets.innerHTML) + 1;
    totalResets.innerHTML = newtotalResets;
})

