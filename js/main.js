// بيانات الاختبار (يمكن تعديلها)
const quizData = [
    {
        question: "ما عاصمة مصر؟",
        options: ["الإسكندرية", "القاهرة", "الجيزة", "الأقصر"],
        correct: 1
    },
    {
        question: "أي من هذه الحضارات نشأت في بلاد الرافدين؟",
        options: ["الفرعونية", "اليونانية", "البابلية", "الرومانية"],
        correct: 2
    },
    {
        question: "كم عدد قارات العالم؟",
        options: ["5", "6", "7", "8"],
        correct: 2
    }
];

// تحميل الاختبار
function loadQuiz() {
    const container = document.getElementById('quiz-container');
    if (!container) return;
    let html = '';
    quizData.forEach((q, index) => {
        html += `<div class="quiz-question">
            <p><strong>السؤال ${index+1}:</strong> ${q.question}</p>`;
        q.options.forEach((opt, optIndex) => {
            html += `<div class="form-check">
                <input class="form-check-input" type="radio" name="q${index}" value="${optIndex}" id="q${index}opt${optIndex}">
                <label class="form-check-label" for="q${index}opt${optIndex}">${opt}</label>
            </div>`;
        });
        html += '</div>';
    });
    container.innerHTML = html;

    document.getElementById('submit-quiz').addEventListener('click', checkQuiz);
}

// تصحيح الاختبار
function checkQuiz() {
    let score = 0;
    quizData.forEach((q, index) => {
        const selected = document.querySelector(`input[name="q${index}"]:checked`);
        if (selected) {
            const answer = parseInt(selected.value);
            if (answer === q.correct) {
                score++;
            }
        }
    });
    const resultDiv = document.getElementById('quiz-result');
    resultDiv.style.display = 'block';
    resultDiv.innerHTML = `لقد حصلت على ${score} من أصل ${quizData.length}`;
}

// تحميل محتوى الدرس
function loadLesson(id) {
    // بيانات افتراضية للدروس
    const lessons = {
        1: {
            title: "تاريخ مصر القديمة",
            image: "images/history.jpg",
            content: "<p>مصر القديمة هي حضارة قديمة في شمال شرق أفريقيا. تركزت حول المجرى السفلي لنهر النيل. اشتهرت بالفراعنة والأهرامات والكتابة الهيروغليفية.</p><p>بدأت الحضارة حوالي 3150 ق.م مع توحيد الملك مينا لمصر العليا والسفلى.</p>"
        },
        2: {
            title: "الجغرافيا الطبيعية",
            image: "images/geography.jpg",
            content: "<p>الجغرافيا الطبيعية تدرس الظواهر الطبيعية على سطح الأرض، مثل التضاريس، المناخ، النباتات الطبيعية، والموارد المائية.</p><p>من أهم فروعها: الجيومورفولوجيا، علم المناخ، علم المياه، وجغرافيا النبات.</p>"
        },
        3: {
            title: "المواطنة وحقوق الإنسان",
            image: "images/civics.jpg",
            content: "<p>المواطنة تعني انتماء الشخص للدولة وتمتعه بالحقوق وعليه واجبات. حقوق الإنسان تشمل الحق في الحياة، التعليم، الصحة، والمساواة.</p><p>الإعلان العالمي لحقوق الإنسان صدر عام 1948.</p>"
        }
    };

    const lesson = lessons[id];
    if (lesson) {
        document.getElementById('lesson-title').textContent = lesson.title;
        document.getElementById('lesson-image').src = lesson.image;
        document.getElementById('lesson-content').innerHTML = lesson.content;
    } else {
        document.getElementById('lesson-title').textContent = 'الدرس غير موجود';
    }
}
