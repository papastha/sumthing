let display = document.getElementById("display");

function append(value) {
    display.innerText = display.innerText + value;
}

function clearDisplay() {
    display.innerText = "0";
}

function deleteLast() {
    display.innerText = display.innerText.slice(0, -1);
}

function calculate() {
    let answer = eval(display.innerText);
    display.innerText = answer;
}