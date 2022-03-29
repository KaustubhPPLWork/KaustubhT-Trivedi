let listOfNames = []
let menu = "What would you like to do?" + "\n1 Insert new name" + "\n2 Print the names"
//While loop example

function whileLoop(listOfNames, menu) {

    let command = prompt(menu)
    while (command == "1") {
        let name = prompt("Enter new name: ")
        listOfNames.push(name)
        command = prompt(menu)
    }
    console.log(listOfNames)
    alert(listOfNames)
}
whileLoop(listOfNames, menu)

