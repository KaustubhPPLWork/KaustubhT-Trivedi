let listOfNames = []
let menu = "What would you like to do?" + "\n1 Insert new name" + "\n2 Print the names"

//Do while loop example
function doWhile(listOfNames, menu) {
    var command = "";
    do {
        command = prompt(menu);
        if (command == "1") {
            var name = prompt("Enter name:");
            listOfNames.push(name);
        }
    } while (command == "1")
    //print list of names
    alert(listOfNames);
}
doWhile(listOfNames, menu)