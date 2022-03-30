const firstElement = "First"
const secondElement = "Second"
const thirdElement = "Third"
const syncOrAsync = (first, second, third) => {
    console.log(first) //sync
    setTimeout(() => {
        console.log(second) //async
    }, 0)
    console.log(third) //sync
}
syncOrAsync(firstElement, secondElement, thirdElement)