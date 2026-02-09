const simple = document.querySelector("h1");
const question = document.querySelector("h2");
const parent = document.querySelector(".parent");
const nextBtn = document.querySelector(".next-btn");
const options = document.querySelector(".option");

const quizQuestions = [
  {
    question: "Who won the ICC Cricket World Cup in 2011?",
    answers: [
      { text: "Australia", correct: false },
      { text: "India", correct: true },
      { text: "Sri Lanka", correct: false },
      { text: "England", correct: false },
    ],
  },
  {
    question: "What does 'LBW' stand for in cricket terms?",
    answers: [
      { text: "Long Ball Wide", correct: false },
      { text: "Left Bat Wrong", correct: false },
      { text: "Leg Before Wicket", correct: true },
      { text: "Leg Behind Wicket", correct: false },
    ],
  },
  {
    question: "Who is known as the 'God of Cricket'?",
    answers: [
      { text: "Ricky Ponting", correct: false },
      { text: "Virat Kohli", correct: false },
      { text: "Don Bradman", correct: false },
      { text: "Sachin Tendulkar", correct: true },
    ],
  },
  {
    question: "How many balls are there in one standard over?",
    answers: [
      { text: "Four", correct: false },
      { text: "Five", correct: false },
      { text: "Six", correct: true },
      { text: "Eight", correct: false },
    ],
  },
  {
    question: "Which trophy is contested between England and Australia?",
    answers: [
      { text: "The Ashes", correct: true },
      { text: "Border-Gavaskar", correct: false },
      { text: "Champions Trophy", correct: false },
      { text: "The Wisden Cup", correct: false },
    ],
  },
];

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextBtn.innerHTML = "Next";
  showquestion();
}
function showquestion() {
  let currentQuestion = quizQuestions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  question.innerHTML = questionNo + "." + currentQuestion.question;
  currentQuestion.options.forEach((answers) => {
    const button = document.createElement("button");
    button.innerHTML = answers.text;
    button.classList.add("btn");
    answers.appendChild(button);
    if(answer.correct)
  });
}


function selectAnswer(e){
    const selectedbtn = e.target
    const isCorrect= selectedbtn.dataset.correct ==='true';
    if(isCorrect){
        selectedbtn.classList.add('correct')
    }
    else{
        selectedbtn.classList.add('incorrect')
    }

}
startQuiz();
