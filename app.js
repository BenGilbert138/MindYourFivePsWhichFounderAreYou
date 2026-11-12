const app = document.getElementById("app");
const state = {
  currentIndex: 0,
  answers: [],
  feedbackShown: false
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
  state.feedbackShown = false;
  renderQuestion();
}

function renderOverview() {
  const portraits = [
  "2_Levi_Strauss",
  "3_Thomas_Lipton",
  "1_Aaron_Montgomery_Ward",
  "4_Asa_Candler",
  "6_Henry_Ford",
  "5_Madam_C._J._Walker",
  "8_Ingvar_Kamprad",
  "14_Morita_Akio",
  "7_Estee_Lauder",
  "9_Ray_Kroc",

  "10_Dame_Stephanie_Shirley",
  "11_Mary_Kay_Ash",
  "12_Anita_Roddick",
  "20_Steve_Jobs",
  "13_James_Dyson",
  "15_Jeff_Bezos",
  "16_Mo_Ibrahim",
  "19_Jack_Ma",
  "18_Tony_Hsieh",
  "17_Sara_Blakely"
];
  const renderPortraitRow = (row) => `
    <div class="hero-portrait-row">
      ${row.map((image) => `
        <img src="assets/founder-portraits/${image}.jpg" alt="" class="hero-portrait" />
      `).join("")}
    </div>
  `;

  const productCards = questions
    .map((question, index) => `
      <article class="product-card">
        <span class="product-icon" aria-hidden="true">${question.icon}</span>
        <span class="product-name">${index + 1}. ${escapeHtml(question.entrepreneur)}</span>
      </article>
    `)
    .join("");

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
          </div>
          <h3>${pillar.title}</h3>
          <p>${pillar.description}</p>
        </article>
      `;
    })
    .join("");

  app.innerHTML = `
    <div class="page-shell">
      <header class="hero">
        <div class="hero-portrait-frame" aria-hidden="true">
          ${renderPortraitRow(portraits.slice(0, 10))}
        </div>
        <h1>Mind Your Five Ps*: Which Founder Are You?</h1>
        <p class="subtitle">Every great business starts with a problem. From Levi Strauss’s riveted jeans to Sara Blakely’s Spanx, entrepreneurs have faced rival boycotts, sceptical investors, missing infrastructure and unproven ideas. We present 20 real world dilemmas, exploring how each entrepreneur solved challenges of Product, Price, Place, Promotion and People, and discover which founder’s instincts you share.</p>
        <button class="btn primary" id="start-quiz">Start quiz</button>
        <div class="hero-portrait-frame hero-portrait-frame-bottom" aria-hidden="true">
          ${renderPortraitRow(portraits.slice(10))}
        </div>
      </header>

      <section class="products-section" aria-labelledby="products-heading">
        <h2 id="products-heading">20 challenges, 20 products</h2>
        <div class="products-grid">${productCards}</div>
      </section>

      <section class="pillars-section" aria-labelledby="pillars-heading">
        <h2 id="pillars-heading">The 5 Ps Of Entrepreneurialsm <span class="footnote">* inspired by Henry Mintzberg’s 5 P’s of Strategy</span></h2>
        <div class="pillars">
          ${cards}
        </div>
      </section>
    </div>
  `;

  document.getElementById("start-quiz").addEventListener("click", startQuiz);
}

function renderQuestion() {
  const question = questions[state.currentIndex];
  const isCorrect = state.answers[state.currentIndex] === question.answer;
  const questionPortrait = question.image
    ? `
      <div class="question-portrait">
        <img src="assets/${escapeHtml(question.image)}" alt="Portrait of ${escapeHtml(question.entrepreneur)}" />
      </div>
    `
    : "";
  const feedback = state.feedbackShown
    ? `
      <section class="answer-feedback ${isCorrect ? "correct-feedback" : "incorrect-feedback"}" aria-live="polite">
        <p class="eyebrow">${isCorrect ? "Correct" : "Not quite"}</p>
        <h3>Correct answer: ${escapeHtml(question.answer)}</h3>
        <p>${escapeHtml(question.explanation)}</p>
        <button class="btn secondary change-answer" id="change-answer">Change my answer</button>
      </section>
    `
    : "";

  app.innerHTML = `
    <div class="page-shell quiz-shell">
      <div class="quiz-progress">
        <span>Challenge ${state.currentIndex + 1} of ${questions.length} · ${question.year}</span>
        <strong>${calculateResults().points}/${questions.length * 5} points</strong>
      </div>

      <div class="card quiz-card">
        ${questionPortrait}
        <h2>${escapeHtml(question.entrepreneur)}</h2>
        <p class="challenge-copy">${escapeHtml(question.question)} What do you do?</p>

        <div class="options">
          ${question.choices
            .map(
              (choice) => `
                <label class="option">
                  <input type="radio" name="quiz-choice" value="${escapeHtml(choice)}" ${state.answers[state.currentIndex] === choice ? "checked" : ""} ${state.feedbackShown ? "disabled" : ""}>
                  <span>${escapeHtml(choice)}</span>
                </label>
              `
            )
            .join("")}
        </div>
        ${feedback}

        <div class="quiz-actions">
          <button class="btn secondary" id="prev-question" ${state.currentIndex === 0 ? "disabled" : ""}>Back</button>
          <button class="btn primary" id="next-question">${state.feedbackShown ? (state.currentIndex === questions.length - 1 ? "See results" : "Next challenge") : "Check answer"}</button>
        </div>
      </div>
    </div>
  `;

  document.getElementById("prev-question").addEventListener("click", () => {
    if (state.currentIndex > 0) {
      state.currentIndex -= 1;
      state.feedbackShown = state.answers[state.currentIndex] !== undefined;
      renderQuestion();
    }
  });

  document.getElementById("next-question").addEventListener("click", () => {
    if (state.feedbackShown) {
      if (state.currentIndex < questions.length - 1) {
        state.currentIndex += 1;
        state.feedbackShown = state.answers[state.currentIndex] !== undefined;
        renderQuestion();
      } else {
        renderResults();
      }
      return;
    }

    const selected = document.querySelector('input[name="quiz-choice"]:checked');

    if (!selected) {
      alert("Choose an answer before moving on.");
      return;
    }

    state.answers[state.currentIndex] = selected.value;
    state.feedbackShown = true;
    renderQuestion();
  });

  document.getElementById("change-answer")?.addEventListener("click", () => {
    delete state.answers[state.currentIndex];
    state.feedbackShown = false;
    renderQuestion();
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
          <img src="assets/${founder.portrait}" alt="${escapeHtml(founder.name)}" class="match-avatar" />
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
                  ${question.image
                    ? `<img src="assets/${escapeHtml(question.image)}" alt="Portrait of ${escapeHtml(question.entrepreneur)}" class="answer-portrait" />`
                    : ""}
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
