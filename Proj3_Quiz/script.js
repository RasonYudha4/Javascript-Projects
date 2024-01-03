const questions = [
    {
        question : "Artikel von Radiergummi",
        answers: [
            { text: "der", correct: true },
            { text: "die", correct: false },
            { text: "das", correct: false },
            { text: "den", correct: false },
        ]
    },
    {
        question : "Artikel von Buch",
        answers: [
            { text: "der", correct: false },
            { text: "die", correct: false },
            { text: "das", correct: true },
            { text: "den", correct: false },
        ]
    }, 
    {
        question : "Artikel von Klasse",
        answers: [
            { text: "der", correct: false },
            { text: "die", correct: true },
            { text: "das", correct: false },
            { text: "den", correct: false },
        ]
    },
    {
        question : "Artikel von Tisch",
        answers: [
            { text: "der", correct: true },
            { text: "die", correct: false },
            { text: "das", correct: false },
            { text: "den", correct: false },
        ]
    },
    {
        question : "Artikel von Fernster",
        answers: [
            { text: "der", correct: false },
            { text: "die", correct: false },
            { text: "das", correct: true },
            { text: "den", correct: false },
        ]
    },
    {
        question : "Artikel von Bleistift",
        answers: [
            { text: "der", correct: true },
            { text: "die", correct: false },
            { text: "das", correct: false },
            { text: "den", correct: false },
        ]
    },
    {
        question : "Artikel von Lineal",
            answers: [
                { text: "der", correct: false },
                { text: "die", correct: false },
                { text: "das", correct: true },
                { text: "den", correct: false },
            ]
    },
    {
        question : "Artikel von Stuhl",
        answers: [
            { text: "der", correct: true },
            { text: "die", correct: false },
            { text: "das", correct: false },
            { text: "den", correct: false },
        ]
    },
    {
        question : "Artikel von Schere",
        answers: [
            { text: "der", correct: false },
            { text: "die", correct: true },
            { text: "das", correct: false },
            { text: "den", correct: false },
        ]
    },
    {
        question : "Artikel von Tafel",
        answers: [
            { text: "der", correct: false },
            { text: "die", correct: true },
            { text: "das", correct: false },
            { text: "den", correct: false },
        ]
    }
];

const questionElement = document.querySelector("#question");
const ansBtn = document.querySelector("#ansBtn");
const nextBtn = document.querySelector("#nextBtn");

let currentQuestionIndex = 0;
let score = 0;

const resetState = () => {
    nextBtn.style.display = "none";
    while(ansBtn.firstChild){
        ansBtn.removeChild(ansBtn.firstChild);
    }
}

const selectAnswer = (e) => {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(ansBtn.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextBtn.style.display = "block";
}

const showQuestion = () => {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        ansBtn.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer);
    });
}

const startQuiz = () => {
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML = "Next";
    showQuestion();
}

const showScore = () => {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}`;
    nextBtn.innerHTML = "Play Again";
    nextBtn.style.display = "block";
}

const handleNextButton = () => {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    } else {
        showScore();
    }
}

nextBtn.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
})

startQuiz();