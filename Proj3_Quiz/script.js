const questions = [
    {
        question : "Radiergummi",
        answers: [
            { text: "der", correct: true },
            { text: "die", correct: false },
            { text: "das", correct: false },
            { text: "den", correct: false },
        ]
    },
    {
        question : "Buch",
        answers: [
            { text: "der", correct: false },
            { text: "die", correct: false },
            { text: "das", correct: true },
            { text: "den", correct: false },
        ]
    }, 
    {
        question : "Klasse",
        answers: [
            { text: "der", correct: false },
            { text: "die", correct: true },
            { text: "das", correct: false },
            { text: "den", correct: false },
        ]
    },
    {
        question : "Tisch",
        answers: [
            { text: "der", correct: true },
            { text: "die", correct: false },
            { text: "das", correct: false },
            { text: "den", correct: false },
        ]
    },
    {
        question : "Fernster",
        answers: [
            { text: "der", correct: false },
            { text: "die", correct: false },
            { text: "das", correct: true },
            { text: "den", correct: false },
        ]
    },
    {
        question : "Bleistift",
        answers: [
            { text: "der", correct: true },
            { text: "die", correct: false },
            { text: "das", correct: false },
            { text: "den", correct: false },
        ]
    },
    {
        question : "Lineal",
            answers: [
                { text: "der", correct: false },
                { text: "die", correct: false },
                { text: "das", correct: true },
                { text: "den", correct: false },
            ]
    },
    {
        question : "Stuhl",
        answers: [
            { text: "der", correct: true },
            { text: "die", correct: false },
            { text: "das", correct: false },
            { text: "den", correct: false },
        ]
    },
    {
        question : "Schere",
        answers: [
            { text: "der", correct: false },
            { text: "die", correct: true },
            { text: "das", correct: false },
            { text: "den", correct: false },
        ]
    },
    {
        question : "Tafel",
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

const showQuestion = () => {
    resetState();
    let currentQuestion = question[currentQuestionIndex];
    let questionNo = currentQuestionIndex +1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        ansBtn.appendChild(button);
    });
}

const startQuiz = () => {
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML = "Next";
    showQuestion();
}

startQuiz();