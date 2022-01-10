const questionData = [
  {
    question: "Quel age à nicolas",
    a: "39 ans",
    b: "21 ans",
    c: "18 ans",
    d: "51 ans",
    answer: "C",
  },
  {
    question: "Quel est la premier cryptomonaie",
    a: "DogCoin",
    b: "Bitcoin",
    c: "Etherum",
    d: "FirstCoin",
    answer: "B",
  },
  {
    question: "Quel est le meilleur metier",
    a: "Dev",
    b: "Tradeur",
    c: "Proff",
    d: "Chomeur",
    answer: "D",
  }
];

const questionDisplay = document.getElementById("question-display");
const answerA = document.getElementById("answerA");
const answerB = document.getElementById("answerB");
const answerC = document.getElementById("answerC");
const answerD = document.getElementById("answerD");
const allAnswer = document.querySelectorAll("input");

const quizz = document.getElementById("quizz");
const result = document.getElementById("result");

const btnReplay = document.getElementById("replay");
const btnSubmit = document.getElementById("btnSubmit");

let questionCount = 0;
let goodQuestion = 0;

loadQuiz();

function loadQuiz(){

  questionDisplay.innerHTML = questionData[questionCount].question;
  answerA.innerHTML = questionData[questionCount].a;
  answerB.innerHTML = questionData[questionCount].b;
  answerC.innerHTML = questionData[questionCount].c;
  answerD.innerHTML = questionData[questionCount].d;

}

btnSubmit.addEventListener("click", ()=>{

  let answerChecked = getSelectedAnswer();
  if(answerChecked == questionData[questionCount].answer){
    goodQuestion++;
  }


  questionCount++;

  if(questionCount == questionData.length){
    showResultQuizz();
    questionCount = 0;
    goodQuestion = 0;
  }


  resetRadioButton();
  loadQuiz();
})

btnReplay.addEventListener("click", ()=>{
  quizz.classList.remove("hidden");
  result.classList.add("hidden");

});

function getSelectedAnswer(){
  let answer = undefined;

  allAnswer.forEach((answerElement)=>{
    if(answerElement.checked){
      answer = answerElement.id;
    }
  })
  return answer;
}

function resetRadioButton(){
  allAnswer.forEach((element)=>{
    element.checked = false;
  });
}

function showResultQuizz(){
  
  const score = document.getElementById("score");

  score.innerHTML = `${goodQuestion}/${questionData.length}`;

  quizz.classList.add("hidden");
  result.classList.remove("hidden");
}
