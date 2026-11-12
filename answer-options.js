const distractorsByEntrepreneur = {
  "James Dyson - Bagless vacuum": [
    "Redesign it around disposable bags, following the established approach used by major manufacturers.",
    "Sell the patent to a leading rival and take a return on the invention.",
    "Wait for established manufacturers to change direction before investing in production."
  ],
  "Steve Jobs - Apple iPhone": [
    "Keep a physical keyboard, refining its layout to make typing easier on a phone.",
    "Launch a simpler, lower-cost handset with fewer features for a broader market.",
    "License the software to handset makers and let them develop their own devices."
  ],
  "Levi Strauss - Riveted jeans": [
    "Sell standard work trousers and promote their durability to miners and labourers.",
    "Offer the tailor a smaller payment and keep the new fastening confidential.",
    "Position the trousers as premium fashion and focus on wealthier customers."
  ],
  "Sara Blakely - Spanx": [
    "Return to sales work and set the product idea aside until circumstances improve.",
    "Hire a design agency to develop the product and pitch it to manufacturers.",
    "Reposition the garment as sportswear and approach athletic clothing companies instead."
  ],
  "Henry Ford - Model T": [
    "Keep prices high and focus sales on customers who can already afford a car.",
    "Use less durable materials to lower the cost of each vehicle.",
    "Build each car by hand and offer instalment plans to reach more buyers."
  ],
  "Ingvar Kamprad - IKEA": [
    "Raise prices to absorb higher supplier costs while keeping the existing furniture design.",
    "Join forces with a local rival to negotiate better terms from suppliers.",
    "Move production abroad and continue shipping fully assembled furniture to customers."
  ],
  "Thomas Lipton - Lipton tea": [
    "Sell premium blends through a small number of specialist tea shops.",
    "Use a less expensive blend to bring the retail price down.",
    "Campaign for lower tea duties while continuing to sell through existing merchants."
  ],
  "Jack Ma - Taobao": [
    "Match eBay’s seller fees and compete by offering a familiar marketplace experience.",
    "Copy eBay’s main features and use its established marketplace model in China.",
    "Charge higher seller fees and position Taobao as a premium marketplace."
  ],
  "Jeff Bezos - Amazon": [
    "Open a large chain of bookstores and stock a carefully selected range.",
    "Wait until the business can afford its own warehouses before selling online.",
    "Begin with current bestsellers and expand the catalogue as demand becomes clear."
  ],
  "Ray Kroc - McDonald’s franchising": [
    "Open every restaurant yourself, using loans to finance a company-owned chain.",
    "Let each franchisee set their own menu, service standards and operating practices.",
    "Sell franchises quickly and leave quality controls to each local owner."
  ],
  "Aaron Montgomery Ward - Mail order": [
    "Open a large city department store and invite rural customers to travel there.",
    "Send salespeople from farm to farm to take orders in person.",
    "Wait for transport links to improve before offering goods to remote customers."
  ],
  "Mo Ibrahim - Celtel": [
    "Wait for public investment in landlines before entering the communications market.",
    "Focus on wealthy city customers with contracts and conventional billing arrangements.",
    "Import second-hand handsets and avoid the cost of building local network coverage."
  ],
  "Asa Candler - Coca-Cola": [
    "Rely on customers recommending the drink and let awareness grow gradually.",
    "Spend the budget on newspaper advertising in a few major cities.",
    "Sell through a limited number of specialist retailers and avoid wider promotion."
  ],
  "Estée Lauder - Skincare": [
    "Buy magazine advertising and build awareness before approaching department stores again.",
    "Lower prices to undercut established skincare brands and attract first-time buyers.",
    "Hire a well-known public figure to introduce the new skincare range."
  ],
  "Akio Morita - Sony Walkman": [
    "Conduct more surveys and wait for evidence that customers will buy the product.",
    "Add a recording feature to match familiar stereos and address market concerns.",
    "Sell through music shops without demonstrations or opportunities to try it."
  ],
  "Anita Roddick - The Body Shop": [
    "Borrow money for television advertising and compete for broad consumer attention.",
    "Hire a celebrity ambassador to promote the products to beauty shoppers.",
    "Adopt competitors’ glamorous packaging and focus on conventional beauty messaging."
  ],
  "Madam C.J. Walker - Hair care": [
    "Sell through established department stores and rely on their existing sales staff.",
    "Hire male salespeople and use conventional retail channels to reach customers.",
    "Wait for a major retailer to approach before expanding distribution."
  ],
  "Tony Hsieh - Zappos": [
    "Compete mainly on low prices and keep customer support costs to a minimum.",
    "Spend heavily on advertising to persuade shoppers to try buying shoes online.",
    "Use scripted call-centre responses to handle questions as quickly as possible."
  ],
  "Dame Stephanie Shirley - Freelance Programmers": [
    "Hire male graduates and emphasise traditional office experience to reassure clients.",
    "Compete mainly on price and accept projects with the smallest available margins.",
    "Open a prestigious central office and require the whole team to work there."
  ],
  "Mary Kay Ash - Mary Kay Cosmetics": [
    "Offer fixed wages and expect new consultants to build confidence through experience.",
    "Recruit experienced managers and limit opportunities for people new to sales.",
    "Pay commission without training and leave consultants to find their own customers."
  ]
};

const ensureSentenceEnding = (value) => {
  const trimmed = String(value).trim();
  return trimmed.endsWith(".") ? trimmed : `${trimmed}.`;
};

questions.forEach((question) => {
  const distractors = distractorsByEntrepreneur[question.entrepreneur];
  if (!distractors || !Array.isArray(question.choices)) return;

  const originalAnswer = question.answer;
  let distractorIndex = 0;
  question.choices = question.choices.map((choice) => {
    const nextChoice = choice === originalAnswer ? originalAnswer : distractors[distractorIndex++];
    return ensureSentenceEnding(nextChoice);
  });

  // Keep the correct-answer key in sync with its punctuated displayed choice.
  question.answer = ensureSentenceEnding(originalAnswer);
});
