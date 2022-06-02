// Imports go first
import { makePottery } from "./PotteryWheel.js"
import { firePottery } from "./Kiln.js"
import { toSellOrNotToSell, usePottery } from "./PotteryCatalog.js"
import { PotteryList } from "./PotteryList.js"


// Make 5 pieces of pottery at the wheel
let mug = makePottery("Mug", 7, 6)
let bowl = makePottery("Bowl", 1, 3)
let vase = makePottery("Vase", 6, 24)
let plate = makePottery("Plate", 0.75, 0.5)
let cup = makePottery("Cup", 1, 6)

// Fire each piece of pottery in the kiln
mug = firePottery(mug, 2100)
bowl = firePottery(bowl, 2300)
vase = firePottery(vase, 2100)
plate = firePottery(plate, 2100)
cup = firePottery(cup, 2100)

// Determine which ones should be sold, and their price
toSellOrNotToSell(mug)
toSellOrNotToSell(bowl)
toSellOrNotToSell(vase)
toSellOrNotToSell(plate)
toSellOrNotToSell(cup)

// Invoke the component function that renders the HTML list
const element = document.querySelector(".potteryList")
element.innerHTML = PotteryList()


