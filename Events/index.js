//Updating component using keys
document.addEventListener("keydown", (event) => {
    var element = document.querySelector("p")
    var A = "KeyA"
    var S = "KeyS"
    var D = "KeyD"
    var W = "KeyW"

    switch (event.code) {
        case A:
            element.textContent = "Left"
            break
        case S:
            element.textContent = "Down"
            break
        case D:
            element.textContent = "Right"
            break
        case W:
            element.textContent = "Up"
            break
    }
})


//Updating component using button clicks
const button = document.querySelector('button')
const element = document.querySelector('p')
button.addEventListener('click',()=>{
    element.textContent = "Changed!!!"
})