const questionData = [ 
  { 
    question: "Quel age à nicolas",
    a: "39 ans", b: "21 ans",
    c: "18 ans",
    d: "51 ans"
  , answer: "c", 
  },
  { 
    question: "Quel est la premier cryptomonaie",
    a: "DogCoin", 
    b: "bitcoin", 
    c: "Etherum", 
    d: "FirstCoin", 
    answer: "b", 
  }, 
  { 
    question: "Quel est le meilleur metier", 
    a: "Dev",
    b: "Tradeur", 
    c: "Proff", 
    d: "Chomeur", 
    answer: "d", 
  } 
]; 

const questionDisplay = document.getElementById("question-display"); const answerA = document.getElementById("answerA"); const answerB = document.getElementById("answerB"); const answerC = document.getElementById("answerC"); const answerD = document.getElementById("answerD"); const allAnswer = document.querySelectorAll("input"); 
const quizz = document.getElementById("quizz"); 
const result = document.getElementById("result"); 
const btnReplay = document.getElementById("replay"); 
const btnSubmit = document.getElementById("btnSubmit"); 
const userAnswer = []; // answer and true or false 

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
  userAnswer.push(checkAnswer());
  console.log(userAnswer);
  questionCount++;

  if(questionCount == questionData.length){
    showResultQuizz();
    questionCount = 0;
    goodQuestion = 0;
  }


  resetRadioButton();
  loadQuiz();
})

//REPLAY
btnReplay.addEventListener("click", ()=>{
  quizz.classList.remove("hidden");
  result.className = "resume-quiz-hidden";
  userAnswer.splice(0, userAnswer.length);
  clearCorrectionCard();
});

function checkAnswer(){
  let answer = undefined;
  const answerData = [];

  allAnswer.forEach((answerElement)=>{
    if(answerElement.checked){
      answer = answerElement.id;
      answerData.push(answerElement.nextElementSibling.textContent);
    }

 });
  if(answer == questionData[questionCount].answer){
    answerData.push(true);
    goodQuestion++;
  }
  else{
    answerData.push(false);
  }
  return answerData;
}

function resetRadioButton(){
  allAnswer.forEach((element)=>{
    element.checked = false;
  });
}

function showResultQuizz(){
  
  const score = document.getElementById("score");
  const cardContainer = document.getElementById("card-container");

  

  score.innerHTML = `${goodQuestion}/${questionData.length}`;

  for(let i=0; i < questionData.length; i++){
    cardContainer.appendChild(createCard(i, userAnswer[i][1]));
  }

  quizz.classList.add("hidden");
  result.className = "resume-quiz";
}

function createCard(_Nquestion, _goodAnswer){
  const cardDiv = document.createElement("div");
  const pTitle = document.createElement("p");
  let spanUserAnswer = document.createElement("span");
  let spanCorrection = undefined;

  cardDiv.className = "correction-Card";
  pTitle.className = "title";
  pTitle.textContent = questionData[_Nquestion].question;

  if(_goodAnswer){
    spanUserAnswer.className = "right";
    spanUserAnswer.textContent = userAnswer[_Nquestion][0];
    
    cardDiv.appendChild(pTitle);
    cardDiv.appendChild(spanUserAnswer);

  }
  else{
    spanUserAnswer.className = "wrong";
    spanUserAnswer.textContent = userAnswer[_Nquestion][0];

    spanCorrection = document.createElement("span");
    spanCorrection.className = "right";

    spanCorrection.textContent = questionData[_Nquestion][questionData[_Nquestion].answer];

    cardDiv.appendChild(pTitle);
    cardDiv.appendChild(spanUserAnswer);  
    cardDiv.appendChild(spanCorrection);
  }
  return cardDiv;

} 

function clearCorrectionCard(){
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = ""; 

}
