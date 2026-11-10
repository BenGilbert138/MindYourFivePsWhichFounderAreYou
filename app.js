const app = document.getElementById("app");
const state = {
  currentIndex: 0,
  answers: []
};

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);
}

function calculateResults() {
  const categoryScores = Object.fromEntries(fivePs.map(({ title }) => [title, 0]));
  let correctCount = 0;

  questions.forEach((question, index) => {
    if (state.answers[index] === question.answer) {
      correctCount += 1;
      categoryScores[question.category] += 1;
    }
  });

  const highestCategoryScore = Math.max(...Object.values(categoryScores));
  const matchedCategories = highestCategoryScore === 0
    ? []
    : Object.keys(categoryScores).filter((category) => categoryScores[category] === highestCategoryScore);

  return {
    correctCount,
    points: correctCount * 5,
    categoryScores,
    matchedCategories
  };
}

function startQuiz() {
  state.currentIndex = 0;
  state.answers = [];
  renderQuestion();
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
        <h1>Mind Your Five Ps: Which Founder Are You?</h1>
        <p class="subtitle">Take on 20 real-world business dilemmas across Product, Price, Place, Promotion, and People. Your answers reveal the founder whose instincts you share.</p>
        <button class="btn primary" id="start-quiz">Start quiz</button>
      </header>

      <section class="pillars">
        ${cards}
      </section>
    </div>
  `;

  document.getElementById("start-quiz").addEventListener("click", startQuiz);
}

function renderQuestion() {
  const question = questions[state.currentIndex];

  app.innerHTML = `
    <div class="page-shell quiz-shell">
      <div class="quiz-progress">
        <span>Challenge ${state.currentIndex + 1} of ${questions.length}</span>
        <strong>Up to 5 points</strong>
      </div>

      <div class="card quiz-card">
        <p class="eyebrow">${question.category}</p>
        <h2>${escapeHtml(question.entrepreneur)}</h2>
        <p class="challenge-copy">${escapeHtml(question.question)}</p>

        <div class="options">
          ${question.choices
            .map(
              (choice) => `
                <label class="option">
                  <input type="radio" name="quiz-choice" value="${escapeHtml(choice)}" ${state.answers[state.currentIndex] === choice ? "checked" : ""}>
                  <span>${escapeHtml(choice)}</span>
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

  document.querySelectorAll('input[name="quiz-choice"]').forEach((input) => {
    input.addEventListener("change", (event) => {
      state.answers[state.currentIndex] = event.target.value;
    });
  });

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
  const { correctCount, points, categoryScores, matchedCategories } = calculateResults();
  const totalPoints = questions.length * 5;
  const matchCards = matchedCategories.length
    ? matchedCategories.map((category) => {
      const founder = founderMatches[category];
      return `
        <article class="match-card">
          <img src="assets/${founder.avatar}-avatar.svg" alt="${escapeHtml(founder.name)}" class="match-avatar" />
          <p class="eyebrow">${escapeHtml(category)} match</p>
          <h3>${escapeHtml(founder.name)}</h3>
          <p class="match-company">${escapeHtml(founder.company)} · ${escapeHtml(founder.symbol)}</p>
          <blockquote>${escapeHtml(founder.quote)}</blockquote>
          <p class="quote-source">${escapeHtml(founder.quoteSource)}</p>
          <p class="category-score">${categoryScores[category]} of 4 ${escapeHtml(category)} challenges correct</p>
        </article>
      `;
    }).join("")
    : `<p class="score-copy">No clear founder match yet — try again to build your score across the Five Ps.</p>`;

  app.innerHTML = `
    <div class="page-shell results-shell">
      <div class="card results-card">
        <p class="eyebrow">Results</p>
        <h2>You scored ${points}/${totalPoints} points</h2>
        <p class="score-copy">${correctCount} of ${questions.length} correct. Each correct answer is worth 5 points.</p>

        <section class="matches-section">
          <h2>Your founder match${matchedCategories.length > 1 ? "es" : ""}</h2>
          <div class="matches-grid">${matchCards}</div>
        </section>

        <h2 class="answer-key-title">Answer key</h2>
        <div class="results-grid">
          ${questions
            .map((question, index) => {
              const userAnswer = state.answers[index];
              const isCorrect = userAnswer === question.answer;
              return `
                <article class="result-item ${isCorrect ? "correct" : "incorrect"}">
                  <p class="eyebrow">Challenge ${index + 1} · ${escapeHtml(question.category)}</p>
                  <h3>${escapeHtml(question.entrepreneur)}</h3>
                  <p>${escapeHtml(question.question)}</p>
                  <div class="result-meta">
                    <span>Your answer: ${escapeHtml(userAnswer || "No answer")}</span>
                    <span>Correct answer: ${escapeHtml(question.answer)}</span>
                  </div>
                  <p class="explanation">${escapeHtml(question.explanation)}</p>
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
  document.getElementById("restart-quiz").addEventListener("click", startQuiz);
}

renderOverview();