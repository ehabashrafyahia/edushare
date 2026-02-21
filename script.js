function goToLesson() {
    window.location.href = "lesson.html";
}

function checkAnswer(button, isCorrect) {
    const result = document.getElementById("result");

    if (isCorrect) {
        result.innerHTML = "✅ إجابة صحيحة يا بطل!";
        result.style.color = "green";
    } else {
        result.innerHTML = "❌ حاول مرة أخرى";
        result.style.color = "red";
    }
}
