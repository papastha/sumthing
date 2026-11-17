let display = document.getElementById("display");
let historyList = document.getElementById("history-list");

function append(value) {
    if ((display.innerText == "0" || display.innerText == "Error") && value != "%") {
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

    if (display.innerText == "" || display.innerText == "Error") {
        display.innerText = "0";
    }
}

function calculate() {
    let expression = display.innerText;
    try {
        let answer = eval(expression.replace(/%/g, "/100"));

        if (answer === undefined || !isFinite(answer)) {
            throw new Error("bad result");
        }

        answer = parseFloat(answer.toFixed(10));

        display.innerText = answer;
        addToHistory(expression + " = " + answer);
    } catch {
        display.innerText = "Error";
    }
}

function addToHistory(text) {
    if (historyList.innerText.trim() == "no calculations yet!") {
        historyList.innerHTML = "";
    }
    let item = document.createElement("p");
    item.innerText = text;
    historyList.prepend(item);
}

function clearHistory() {
    historyList.innerHTML = '<p class="empty">no calculations yet!</p>';
}