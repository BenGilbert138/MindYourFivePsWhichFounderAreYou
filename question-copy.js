const anitaRoddickQuestion = questions.find(
  ({ entrepreneur }) => entrepreneur === "Anita Roddick - The Body Shop"
);
const akioMoritaQuestion = questions.find(
  ({ entrepreneur }) => entrepreneur === "Akio Morita - Sony Walkman"
);
const moIbrahimQuestion = questions.find(
  ({ entrepreneur }) => entrepreneur === "Mo Ibrahim - Celtel"
);

if (anitaRoddickQuestion) {
  anitaRoddickQuestion.question = "It’s 1976 in Brighton, England, and you want to launch a business selling products with ethically sourced, cruelty-free and natural ingredients. You can’t afford advertising, and the beauty industry sells glamour and promises.";
}

if (akioMoritaQuestion) {
  akioMoritaQuestion.question = "It’s 1979 in Tokyo, Japan, and you've part of a team working on the world's first portable stereo. Market research says nobody will buy a machine that can’t record. Your engineers believe in it.";
}

if (moIbrahimQuestion) {
  moIbrahimQuestion.question = "It’s 1998 in London, England, and most Africans have been shut out from mobile phone ownership. Few people have landlines, and most can’t afford contracts or pass credit checks.";
}
