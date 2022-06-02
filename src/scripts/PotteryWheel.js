let id = 1

export const makePottery = (shape, weight, height) => {
    id++
    return {shape, weight, height, id: id - 1}
}