let display = document.getElementById("display");
let historyList = document.getElementById("history-list");

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
    let expression = display.innerText;
    try {
        let answer = eval(expression);

        display.innerText = eval(expression);

        display.innerText = answer;
        display.innerHTML += "<p>" + expression + "=" + answer + "</p>";
    } catch {
        display.innerText = "Error";
    }
}


function clearHistory() {
    historyList.innerHTML = "<p>no calculations yet!</p>";
}