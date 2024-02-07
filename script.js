const questions =  [
    {
        question: "What is the capital of Japan?",
        answers: [
          { text: "Tokyo", correct: true},
          { text: "Beijing", correct: false},
          { text: "Seoul", correct: false},
          { text: "Bangkok", correct: false}
        ]
    },
    {
        question: "Which planet is closest to the sun?",
        answers: [
          { text: "Venus", correct: false},
          { text: "Mars", correct: false},
          { text: "Mercury", correct: true},
          { text: "Jupiter", correct: false}
        ]
    },
    {
        question: "What is the largest ocean on Earth?",
      answers: [
          { text: "Atlantic Ocean", correct: false},
          { text: "Indian Ocean", correct: false},
          { text: "Southern Ocean", correct: false},
          { text: "Pacific Ocean", correct: true}
        ]      
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
      answers: [
          { text: "Charles Dickens", correct: false},
          { text: "William Shakespeare", correct: true},
          { text: "Jane Austen", correct: false},
          { text: "Mark Twain", correct: false}
        ]     
    },
    {
        question: "What is the capital of Australia?",
       answers: [
          { text: "Canberra", correct: true},
          { text: "Sydney", correct: false},
          { text: "Melbourne", correct: false},
          { text: "Perth", correct: false}
        ]  
    },

    //Start of Charles added questions

    {
        question: "What is the name for the longest day of the year?",
       answers: [
          { text: "Summer Solstice", correct: true},
          { text: "High Summer Day", correct: false},
          { text: "Super Summer Time", correct: false},
          { text: "Summer Long-Day", correct: false}
        ]  
    },
    {
        question: "Nearly all fossils are preserved in what type of rock?",
       answers: [
          { text: "Sedimentary", correct: true},
          { text: "Igneous", correct: false},
          { text: "Metamorphic", correct: false},
          { text: "Heavy Metal", correct: false}
        ]  
    },
    {
        question: "What is an eight-sided shape called?",
       answers: [
          { text: "Octagon", correct: true},
          { text: "Pentagon", correct: false},
          { text: "Rectangle", correct: false},
          { text: "Polygon", correct: false}
        ]  
    },
    {
        question: "What actor plays Ken in the 2023 blockbuster movie 'Barbie?'",
       answers: [
          { text: "Ryan Gosling", correct: true},
          { text: "Ryan Reynolds", correct: false},
          { text: "Tom Holland", correct: false},
          { text: "Margot Robbie", correct: false}
        ]  
    },
    {
        question: "What 1927 film effectively ended the silent movie era by introducing synchronized talking and singing?", //Charles Q 5
       answers: [
          { text: "The Jazz Singer", correct: true},
          { text: "Citizen Kane", correct: false},
          { text: "The Maltese Falcon", correct: false},
          { text: "All Quiet on the Western Front", correct: false}
        ]  
    },
    {
        question: "The unicorn is the national animal of which country?",
       answers: [
          { text: "Scotland", correct: true},
          { text: "Iceland", correct: false},
          { text: "Iran", correct: false},
          { text: "South Korea", correct: false}
        ]  
    },
    {
        question: "'There's a snake in my boot!' is famously spoken by Woody, a cowboy doll, in which film series?",
       answers: [
          { text: "Toy Story", correct: true},
          { text: "The Avengers", correct: false},
          { text: "Despicable Me", correct: false},
          { text: "Spy Kids", correct: false}
        ]  
    },    
    {
        question: "Which soft drink once contained cocaine as one of its original ingredients?",
       answers: [
          { text: "Coca-Cola", correct: true},
          { text: "Sprite", correct: false},
          { text: "Irn Bru", correct: false},
          { text: "Dr Pepper", correct: false}
        ]  
    },
    {
        question: "What fish is capable of generating an electrical discharge up to 600 volts?",
       answers: [
          { text: "The Electric Eel", correct: true},
          { text: "The Sparky Shark", correct: false},
          { text: "The Wattage Whale", correct: false},
          { text: "The Ohm Octopus", correct: false}
        ]  
    },
    {
        question: "Bill Gates co-founded Microsoft with which of his childhood friends?",  //Charles Qu 10
       answers: [
          { text: "Paul Allen", correct: true},
          { text: "Patrick Bateman", correct: false},
          { text: "Timothy Bryce", correct: false},
          { text: "David Van Patten", correct: false}
        ]  
    },
    {
        question: "'The Da Vinci Code' opens with a murder in which famous museum?",
       answers: [
          { text: "The Louvre", correct: true},
          { text: "The Tate Modern", correct: false},
          { text: "The Metropolitan Museum of Art", correct: false},
          { text: "The Rijksmuseum", correct: false}
        ]  
    },
    {
        question: "What 1949 science fiction book by author George Orwell describes a dystopian world in the future?",
       answers: [
          { text: "1984", correct: true},
          { text: "Brave New World", correct: false},
          { text: "Foundation", correct: false},
          { text: "The Spooky Future", correct: false}
        ]  
    },
    {
        question: "'Call me Ishmael' is the first line from what classic novel?",
       answers: [
          { text: "Moby Dick", correct: true},
          { text: "20,000 Leagues Under The Sea", correct: false},
          { text: "Around the World in 80 Days", correct: false},
          { text: "The Spooky Future Part 2", correct: false}
        ]  
    },
    {
        question: "On July 20, 1969 the first humans walked on the Moon, what is the name of the first person to set foot on the lunar surface?",
       answers: [
          { text: "Neil Armstrong", correct: true},
          { text: "Buzz Aldrin", correct: false},
          { text: "Michael Collins", correct: false},
          { text: "Buzz Lightyear", correct: false}
        ]  
    },
    {
        question: "Who was the astronaut that stayed behind while his crewmates walked on the Moon?", //Charles Q 15
       answers: [
          { text: "Michael Collins", correct: true},
          { text: "Buzz Aldrin", correct: false},
          { text: "Neil Armstrong", correct: false},
          { text: "Buzz Lightyear", correct: false}
        ]  
    },

    
    // Add more questions as needed
];

const questionElement = document.getElementById('question');
const answerButton = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');

 // Initialize variables
 let currentQuestionIndex = 0;
 let score = 0;

// Function to start the quiz
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.
  question;
  
  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButton.appendChild(button);
    if(answer.correct){
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState(){
  nextButton.style.display = "none";
  while(answerButton.firstChild){
    answerButton.removeChild(answerButton.firstChild);
  }
}

function selectAnswer(e){
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if(isCorrect){
    selectedBtn.classList.add("correct");
    score++;
  }else{
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButton.children).forEach(button => {
    if(button.dataset.correct === "true"){
        button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else {
        startQuiz();
    }
});

startQuiz();