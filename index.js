const lessonList = document.getElementById("lessonList");
const storedLessons = JSON.parse(localStorage.getItem("completedLessons") || "[]");
const completedLessons = new Set(storedLessons);
let practiceSessions = Number(localStorage.getItem("practiceSessions") || 0);

function saveProgress() {
    localStorage.setItem("completedLessons", JSON.stringify([...completedLessons]));
    localStorage.setItem("practiceSessions", practiceSessions);
}

function updateDashboard() {
    const totalLessons = document.querySelectorAll(".lesson-card").length;
    const completed = completedLessons.size;
    const progress = totalLessons ? (completed / totalLessons) * 100 : 0;
    document.getElementById("completedCount").textContent = completed;
    document.getElementById("lessonTotal").textContent = totalLessons;
    document.getElementById("statCompleted").textContent = completed;
    document.getElementById("practiceCount").textContent = practiceSessions;
    document.getElementById("sidebarProgress").style.width = `${progress}%`;

    document.querySelectorAll(".lesson-card").forEach((card) => {
        const isCompleted = completedLessons.has(card.dataset.lesson);
        const button = card.querySelector(".complete-button");
        card.classList.toggle("completed", isCompleted);
        button.textContent = isCompleted ? "Completed ✓" : "Mark done";
        button.setAttribute("aria-pressed", isCompleted);
    });
}

function calculate(operation) {
    const num1 = Number.parseFloat(document.getElementById("numberA").value);
    const num2 = Number.parseFloat(document.getElementById("numberB").value);
    const resultElement = document.getElementById("result");
    resultElement.className = "result";

    if (Number.isNaN(num1) || Number.isNaN(num2)) {
        resultElement.textContent = "Please enter a number in both fields.";
        resultElement.classList.add("is-error");
        return;
    }
    if (operation === "Divide" && num2 === 0) {
        resultElement.textContent = "Cannot divide by zero.";
        resultElement.classList.add("is-error");
        return;
    }

    const operations = { Add: (a, b) => a + b, Subtract: (a, b) => a - b, Multiply: (a, b) => a * b, Divide: (a, b) => a / b, Modulus: (a, b) => a % b };
    const symbols = { Add: "+", Subtract: "−", Multiply: "×", Divide: "÷", Modulus: "%" };
    const result = operations[operation](num1, num2);
    resultElement.textContent = `${num1} ${symbols[operation]} ${num2} = ${result}`;
    resultElement.classList.add("has-value");
    practiceSessions += 1;
    saveProgress();
    updateDashboard();
}

lessonList.addEventListener("click", (event) => {
    const button = event.target.closest(".complete-button");
    if (!button) return;
    const lesson = button.closest(".lesson-card").dataset.lesson;
    completedLessons.has(lesson) ? completedLessons.delete(lesson) : completedLessons.add(lesson);
    saveProgress();
    updateDashboard();
});

document.getElementById("resetProgress").addEventListener("click", () => {
    completedLessons.clear();
    practiceSessions = 0;
    saveProgress();
    updateDashboard();
});

document.querySelectorAll("[data-operation]").forEach((button) => {
    button.addEventListener("click", () => calculate(button.dataset.operation));
});

updateDashboard();
