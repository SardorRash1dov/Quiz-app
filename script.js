const questions = [
  {
    question: "What is the capital of Canada?",
    options: ["Toronto", "Ottawa", "Vancouver"],
    answer: 1
  },
  {
    question: "What is the capital of Australia?",
    options: ["Sydney", "Melbourne", "Canberra"],
    answer: 2
  },
  {
    question: "What is the capital of Japan?",
    options: ["Tokyo", "Osaka", "Kyoto"],
    answer: 0
  },
  {
    question: "What is the capital of Germany?",
    options: ["Munich", "Hamburg", "Berlin"],
    answer: 2
  },
  {
    question: "What is the capital of Brazil?",
    options: ["Rio de Janeiro", "São Paulo", "Brasília"],
    answer: 2
  }
];

let currentQuestion = 0;
let score = 0;
const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');

function showQuestion(index) {
  const q = questions[index];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = '';
  nextBtn.style.display = 'none';
  q.options.forEach((option, i) => {
    const btn = document.createElement('button');
    btn.textContent = option;
    btn.onclick = () => selectAnswer(i);
    optionsEl.appendChild(btn);
  });
}

function selectAnswer(selectedIndex) {
  const buttons = optionsEl.querySelectorAll('button');
  buttons.forEach((btn, i) => {
    btn.disabled = true;
    if (i === questions[currentQuestion].answer) {
      btn.classList.add('correct');
      if (i === selectedIndex) score++;
    } else if (i === selectedIndex) {
      btn.classList.add('wrong');
    }
  });
  nextBtn.style.display = 'inline-block';
}

nextBtn.onclick = () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion(currentQuestion);
  } else {
    showResult();
  }
};

function showResult() {
  questionEl.textContent = `🎉 Quiz Completed! You scored ${score} out of ${questions.length}.`;
  optionsEl.innerHTML = '';
  nextBtn.style.display = 'none';
  restartBtn.style.display = 'inline-block';
}

restartBtn.onclick = () => {
  currentQuestion = 0;
  score = 0;
  restartBtn.style.display = 'none';
  showQuestion(currentQuestion);
};

showQuestion(currentQuestion);