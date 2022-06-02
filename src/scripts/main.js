// Imports go first
import { makePottery } from "./PotteryWheel.js"
import { firePottery } from "./Kiln.js"


// Make 5 pieces of pottery at the wheel
let pottery = [
    makePottery("Mug", 1.5, 6),
    makePottery("Bowl", 1, 3),
    makePottery("Vase", 5, 18),
    makePottery("Plate", 0.75, 0.5),
    makePottery("Cup", 1, 6)
]

for (let pot of pottery) {
    firePottery(pot, 2300)
}

console.log(pottery)

// Fire each piece of pottery in the kiln


// Determine which ones should be sold, and their price


// Invoke the component function that renders the HTML list



