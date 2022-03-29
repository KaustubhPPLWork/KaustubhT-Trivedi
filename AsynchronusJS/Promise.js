const printString = (A) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(A)
            resolve()
        }, Math.floor(Math.random() * 100) + 1);
    })
}

const addString = (previous, current) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve((previous + '' + current))
        }, Math.floor(Math.random() * 100) + 1)
    })
}
const printAll = async () => {
    await printString("A")
    await printString("B")
    await printString("C")
}

// const addAll = () => {
//     addString("", "A").then((result) => {
//         return addString(result, "B")
//     }).then((result) => {
//         return addString(result, "C")
//     }).then((result) => {
//         console.log(result)
//     })
// }
const addAll = async () => {
    let toPrint = await addString("", 'A')
    toPrint = await addString(toPrint, 'B')
    toPrint = await addString(toPrint, 'C')
    console.log(toPrint)
}
addAll()
printAll()
