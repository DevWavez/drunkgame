const questions = [
  {
    question: "Which planet is the fourth in our solar system?",
    answer: "Mars",
  },
  {
    question: "Which capital city has the highest population?",
    answer: "Tokio",
  },
  {
    question: "Which animal can't turn its head?",
    answer: "Dog",
  },
  {
    question: "Which animal sleeps when flying?",
    answer: "Bat",
  },
  // add more Questions
];

let currentQuestionIndex = 0;

function askQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  document.getElementById("question").textContent = currentQuestion.question;
}

function checkAnswer() {
  const userAnswer = document.getElementById("answer").value.toLowerCase();
  const correctAnswer = questions[currentQuestionIndex].answer.toLowerCase();

  if (userAnswer === correctAnswer) {
    alert("Right!");
  } else {
    alert("Wrong! drink ex.");
  }

  // nex Question or quit Game
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    askQuestion();
  } else {
    alert("Game Over!");
  }
}

// Spiel mit erster Frage starten
askQuestion();
