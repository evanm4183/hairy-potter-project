let toBeSold = []

export const toSellOrNotToSell = (potteryObj) => {
    if (!potteryObj.cracked && potteryObj.weight >= 6) {
        potteryObj.price = 40
        toBeSold.push(potteryObj)
    } else if (!potteryObj.cracked && potteryObj.weight < 6) {
        potteryObj.price = 20
        toBeSold.push(potteryObj)
    }

    return potteryObj
}

export const usePottery = () => {
    return [...toBeSold]
}