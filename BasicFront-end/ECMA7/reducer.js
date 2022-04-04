const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const initialValue = 10
const sumWithInitial = array.reduce((previousValue, currentValue) =>
    previousValue + currentValue,
    initialValue
)
console.log(sumWithInitial)