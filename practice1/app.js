let num1 = document.getElementById("input1")
let num2 = document.getElementById("input2")
let result = document.getElementById("result")

function add() {
    let n1 = parseInt(num1.value)
    let n2 = parseInt(num2.value)

    result.innerHTML = `<h1>${n1 + n2}</h1>`
    
} function sub() {
    let n1 = parseInt(num1.value)
    let n2 = parseInt(num2.value)

    result.innerHTML = `<h1>${n1 - n2}</h1>`

} function multi() {
    let n1 = parseInt(num1.value)
    let n2 = parseInt(num2.value)

    result.innerHTML = `<h1>${n1 * n2}</h1>`

} function divide() {
    let n1 = parseInt(num1.value)
    let n2 = parseInt(num2.value)

    result.innerHTML = `<h1>${n1 / n2}</h1>`
}






