//*******/
//let myPoints = 3

// function add3Points(){
//     myPoints += 3
// }
// function sub(){
//     myPoints -= 1
// }
// add3Points()
// add3Points()
// add3Points()
// sub()
// sub()

// console.log(myPoints)

//******** Laps Completed **********//
// let lapsCompleted = 0

// function runTime(){
//     lapsCompleted ++
// }
// runTime()
// runTime()
// runTime()
// console.log(lapsCompleted)

// 1. Grab the box from the DOM and store it in a variable
// 2. Add a click event listener to the box 
// 3. Log out "I want to open the box!" when it's clicked

let box = document.querySelector("#box")
box.addEventListener("click", function(){
    console.log("I want to open the box!")
})

