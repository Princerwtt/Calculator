let button = document.getElementById("btn")
function clickHandler() {
    console.log("clicked")
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let task = document.getElementById("dropdown").value;
    let output = null;
    switch (task) {
        case "+":
            output = +(num1) + +(num2);
            break;
        case "-":
            output = num1 - num2;
            break;
        case "*":
            output = num1 * num2;
            break;
        case "/":
            output = num1 / num2;
            break;
    }
    console.log(output)
    document.getElementById("output").innerText = output
}
