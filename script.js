
const screen = document.getElementById("screen");
const resultBox = document.getElementById("result");
const modeName = document.getElementById("modeName");

let mode = "normal";


function clearScreen() {
    screen.value = "";
    resultBox.textContent = "";
}

function safeEval(expression) {
    if (!/^[0-9+\-*/(). ]+$/.test(expression)) {
        throw new Error("Invalid Expression");
    }
    return Function(`"use strict"; return (${expression})`)();
}

function append(value) {
    const lastChar = screen.value.slice(-1);
    const operators = "+-*/.";

    if (operators.includes(lastChar) && operators.includes(value)) return;


    if (mode !== "normal" && value === ".") return;

    resultBox.textContent = "";
    screen.value += value;
}
//Modes
function setMode(selectedMode) {
    mode = selectedMode;
    clearScreen();

    const names = {
        normal: "Normal Calculator",
        savings: "Savings Calculator (Goal, Saved, Months)",
        study: "Study Calculator (Chapters, Days)",
        prank: "Prank Mode 😈",
        burnout: "Burnout Checker (Work, Sleep, Breaks)"
    };

    modeName.textContent = names[selectedMode];
}

//Calculate
function calculate() {
    try {

        //normal
        if (mode === "normal") {
            screen.value = eval(screen.value);
            return;
        }

        //prank
        if (mode === "prank") {
            const correctAnswer = eval(screen.value);

            const jokes = [
                "Hello World 👋",
                "Math is hard 😵",
                "Ask ChatGPT 🤖",
                "404 Answer Not Found",
                "I ate the number 🍕",
                "Result went on vacation 🌴"
            ];

            screen.value = jokes[Math.floor(Math.random() * jokes.length)];

            setTimeout(() => {
                showPrankPopup(correctAnswer);
                screen.value = correctAnswer;
            }, 800);

            return;
        }

        //Life modes
        const values = screen.value.split(",").map(Number);

        if (values.some(isNaN)) {
            throw new Error("Invalid input");
        }

        switch (mode) {

            case "savings": {
                const [goal, saved, months] = values;
                const perMonth = Math.ceil((goal - saved) / months);
                resultBox.textContent = `Save ₹${perMonth} per month to reach your goal.`;
                break;
            }

            case "study": {
                const [chapters, days] = values;
                resultBox.textContent =
                    `Study ${(chapters / days).toFixed(2)} chapters per day.`;
                break;
            }

            case "burnout": {
                const [work, sleep, breaks] = values;
                let msg = "Balanced routine 👍";

                if (work > 10 || sleep < 6) msg = "⚠ High burnout risk";
                else if (work > 8 || breaks < 2) msg = "⚠ Moderate burnout risk";

                resultBox.textContent = msg;
                break;
            }
        }

    } catch {
        resultBox.textContent = "Enter a valid input";
    }
}


function showPrankPopup(answer) {
    const popup = document.createElement("div");
    popup.className = "prank-popup";

    popup.innerHTML = `
        <div class="prank-box">
            <h2>😂 Got you!</h2>
            <p>Correct Answer:</p>
            <strong>${answer}</strong>
            <br><br>
            <button onclick="this.closest('.prank-popup').remove()">OK</button>
        </div>
    `;

    document.body.appendChild(popup);
}

document.querySelectorAll(".key").forEach(button => {
    button.addEventListener("click", () => {
        const value = button.dataset.key;

        if (value === "C") return clearScreen();
        if (value === "=") return calculate();

        append(value);
    });
});

window.addEventListener("keydown", (e) => {
    const allowedKeys = "0123456789+-*/.,";

    if (allowedKeys.includes(e.key)) {
        append(e.key);
        return;
    }

    if (e.key === "Enter") {
        e.preventDefault();
        calculate();
    }

    if (e.key === "Backspace" || e.key === "Escape") {
        clearScreen();
    }
});
