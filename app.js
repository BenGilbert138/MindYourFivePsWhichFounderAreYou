const app = document.getElementById("app");
const state = {
  currentIndex: 0,
  answers: []
};

function calculateScore() {
  return questions.reduce((total, question, index) => {
    return total + (state.answers[index] === question.answer ? 1 : 0);
  }, 0);
}

function renderOverview() {
  const cards = fivePs
    .map((pillar) => {
      const founderKey = {
        Product: "sara-blakely",
        Price: "jack-ma",
        Place: "mo-ibrahim",
        Promotion: "anita-roddick",
        People: "madam-cj-walker"
      }[pillar.title];

      return `
        <article class="pillar-card">
          <div class="pillar-header">
            <div class="pillar-icon">${pillar.icon}</div>
            <img src="assets/${founderKey}-avatar.svg" alt="${founders[pillar.title]}" class="founder-avatar" />
          </div>
          <h3>${pillar.title}</h3>
          <p>${pillar.description}</p>
          <span>Founder: ${founders[pillar.title]}</span>
        </article>
      `;
    })
    .join("");

  app.innerHTML = `
    <div class="page-shell">
      <header class="hero">
        <div class="hero-banner">
          <img src="assets/product-icons.svg" alt="Product and marketing icons" />
        </div>
        <p class="eyebrow">Marketing essentials</p>
        <h1>Mind Your Five Ps</h1>
        <p class="subtitle">Explore the five strategic pillars behind strong business decisions.</p>
        <button class="btn primary" id="start-quiz">Start quiz</button>
      </header>

      <section class="pillars">
        ${cards}
      </section>
    </div>
  `;

  document.getElementById("start-quiz").addEventListener("click", renderQuestion);
}

function renderQuestion() {
  const question = questions[state.currentIndex];
  const currentScore = calculateScore();

  app.innerHTML = `
    <div class="page-shell quiz-shell">
      <div class="quiz-progress">
        <span>Question ${state.currentIndex + 1} of ${questions.length}</span>
        <strong>Score: ${currentScore}</strong>
      </div>

      <div class="card quiz-card">
        <p class="eyebrow">${question.category}</p>
        <h2>${question.question}</h2>

        <div class="options">
          ${question.choices
            .map(
              (choice) => `
                <label class="option">
                  <input type="radio" name="quiz-choice" value="${choice}" ${state.answers[state.currentIndex] === choice ? "checked" : ""}>
                  <span>${choice}</span>
                </label>
              `
            )
            .join("")}
        </div>

        <div class="quiz-actions">
          <button class="btn secondary" id="prev-question" ${state.currentIndex === 0 ? "disabled" : ""}>Back</button>
          <button class="btn primary" id="next-question">${state.currentIndex === questions.length - 1 ? "Finish" : "Next"}</button>
        </div>
      </div>
    </div>
  `;

  document.getElementById("prev-question").addEventListener("click", () => {
    if (state.currentIndex > 0) {
      state.currentIndex -= 1;
      renderQuestion();
    }
  });

  document.getElementById("next-question").addEventListener("click", () => {
    const selected = document.querySelector('input[name="quiz-choice"]:checked');

    if (!selected) {
      alert("Choose an answer before moving on.");
      return;
    }

    state.answers[state.currentIndex] = selected.value;

    if (state.currentIndex < questions.length - 1) {
      state.currentIndex += 1;
      renderQuestion();
      return;
    }

    renderResults();
  });
}

function renderResults() {
  const total = questions.length;
  const finalScore = calculateScore();
  const percentage = Math.round((finalScore / total) * 100);

  app.innerHTML = `
    <div class="page-shell results-shell">
      <div class="card results-card">
        <p class="eyebrow">Results</p>
        <h2>You scored ${finalScore}/${total}</h2>
        <p class="score-copy">${percentage}% accuracy. ${percentage >= 80 ? "Excellent work!" : percentage >= 60 ? "Strong understanding!" : "Nice start — review the five Ps and try again."}</p>

        <div class="results-grid">
          ${questions
            .map((question, index) => {
              const userAnswer = state.answers[index];
              const isCorrect = userAnswer === question.answer;
              return `
                <article class="result-item ${isCorrect ? "correct" : "incorrect"}">
                  <h3>${question.category}</h3>
                  <p>${question.question}</p>
                  <div class="result-meta">
                    <span>Your answer: ${userAnswer || "No answer"}</span>
                    <span>${isCorrect ? "Correct" : `Right answer: ${question.answer}`}</span>
                  </div>
                </article>
              `;
            })
            .join("")}
        </div>

        <div class="quiz-actions">
          <button class="btn secondary" id="return-overview">Review overview</button>
          <button class="btn primary" id="restart-quiz">Play again</button>
        </div>
      </div>
    </div>
  `;

  document.getElementById("return-overview").addEventListener("click", renderOverview);
  document.getElementById("restart-quiz").addEventListener("click", () => {
    state.currentIndex = 0;
    state.answers = [];
    renderQuestion();
  });
}

renderOverview();