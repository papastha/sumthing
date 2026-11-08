let display = document.getElementById("display");

function append(value) {
    if (display.innerText == "0" && value != "%") {
        display.innerText = value;
    } else {
        display.innerText = display.innerText + value;
    }
}

function clearDisplay() {
    display.innerText = "0";
}

function deleteLast() {
    display.innerText = display.innerText.slice(0, -1);

    if (display.innerText == "") {
        display.innerText = "0";
    }
}

function calculate() {
    let answer = eval(display.innerText);
    display.innerText = answer;
}