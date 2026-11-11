const founders = {
  Product: "Sara Blakely",
  Price: "Jack Ma",
  Place: "Mo Ibrahim",
  Promotion: "Anita Roddick",
  People: "Madam C.J. Walker"
};

const founderMatches = {
  Product: {
    name: "Sara Blakely",
    company: "Spanx",
    avatar: "sara-blakely",
    portrait: "sara-blakely-avatar.svg",
    symbol: "Footless shaping tights",
    quote: "“Don’t be intimidated by what you don’t know. That can be your greatest strength.”",
    quoteSource: "Widely attributed; original source not verified"
  },
  Price: {
    name: "Jack Ma",
    company: "Alibaba / Taobao",
    avatar: "jack-ma",
    portrait: "jack-ma-avatar.svg",
    symbol: "Shopping bag (online marketplace)",
    quote: "“Never give up. Today is hard, tomorrow will be worse, but the day after tomorrow will be sunshine.”",
    quoteSource: "Widely attributed; original source not verified"
  },
  Place: {
    name: "Mo Ibrahim",
    company: "Celtel",
    avatar: "mo-ibrahim",
    portrait: "founder-portraits/mo-ibrahim.jpg",
    symbol: "Mobile phone with signal waves",
    quote: "“Africans must not fear Africa.”",
    quoteSource: "Published source found (Afridigest article)"
  },
  Promotion: {
    name: "Anita Roddick",
    company: "The Body Shop",
    avatar: "anita-roddick",
    portrait: "founder-portraits/anita-roddick.jpg",
    symbol: "Skincare jar with a leaf",
    quote: "“If you think you’re too small to have an impact, try going to bed with a mosquito.”",
    quoteSource: "Widely attributed; original source not verified"
  },
  People: {
    name: "Madam C.J. Walker",
    company: "Walker Manufacturing",
    avatar: "madam-cj-walker",
    portrait: "founder-portraits/madam-cj-walker.jpg",
    symbol: "Hair comb (hair-care products)",
    quote: "“I got my start by giving myself a start.”",
    quoteSource: "Widely attributed; original source not verified"
  }
};

const fivePs = [
  {
    title: "Product",
    description: "Design a solution that solves a real problem and creates obvious value.",
    icon: "🧩"
  },
  {
    title: "Price",
    description: "Set a value that reflects both customer willingness to pay and business goals.",
    icon: "💸"
  },
  {
    title: "Place",
    description: "Put the product where customers can discover, access, and buy it easily.",
    icon: "📍"
  },
  {
    title: "Promotion",
    description: "Communicate benefits through the channels that reach your intended audience.",
    icon: "📣"
  },
  {
    title: "People",
    description: "Deliver great service through motivated teams and customer-focused experiences.",
    icon: "🤝"
  }
];

const namedPortraitMap = {
  "James Dyson – bagless vacuum (1978–93)": "founder-portraits/additional-02.jpg",
  "Steve Jobs / Apple – iPhone (2007)": "founder-portraits/additional-07.jpg",
  "Levi Strauss – riveted jeans (1873)": "founder-portraits/additional-08.jpg",
  "Sara Blakely – Spanx (2000)": "founder-portraits/additional-06.jpg",
  "Henry Ford – Model T (1908–27)": "founder-portraits/additional-01.jpg",
  "Ingvar Kamprad – IKEA (1950s)": "founder-portraits/additional-03.jpg",
  "Thomas Lipton – Lipton tea (1890)": "founder-portraits/additional-04.jpg",
  "Jack Ma – Taobao (2003)": "founder-portraits/additional-05.jpg",
  "Jeff Bezos – Amazon (1994–95)": "founder-portraits/jeff-bezos.jpg",
  "Ray Kroc – McDonald’s franchising (1955)": "founder-portraits/ray-kroc.jpg",
  "Aaron Montgomery Ward – mail order (1872)": "founder-portraits/additional-09.jpg",
  "Mo Ibrahim – Celtel (1998)": "founder-portraits/mo-ibrahim.jpg",
  "Asa Candler – Coca-Cola (1890s)": "founder-portraits/asa-candler.jpg",
  "Estée Lauder – skincare (1940s)": "founder-portraits/estee-lauder.jpg",
  "Akio Morita / Sony – Walkman (1979)": "founder-portraits/akio-morita.jpg",
  "Anita Roddick – The Body Shop (1976)": "founder-portraits/anita-roddick.jpg",
  "Madam C.J. Walker – hair care (1900s)": "founder-portraits/madam-cj-walker.jpg",
  "Tony Hsieh – Zappos (2000s)": "founder-portraits/tony-hsieh.jpg",
  "Dame Stephanie Shirley – Freelance Programmers (1962)": "founder-portraits/stephanie-shirley.jpg",
  "Mary Kay Ash – Mary Kay Cosmetics (1963)": "founder-portraits/additional-10.jpg"
};

const questions = [
  {
    category: "Product",
    year: 1978,
    entrepreneur: "James Dyson – bagless vacuum (1978–93)",
    image: "founder-portraits/additional-02.jpg",
    icon: "🧹",
    question: "You’ve built a bagless vacuum that outperforms everything on sale. Big manufacturers, who earn money from replacement bags, won’t touch it, and you’re short of cash.",
    answer: "Licence it in a market that will back it, then fund and launch your own brand",
    choices: [
      "Licence it in a market that will back it, then fund and launch your own brand",
      "Redesign it to use bags so rivals will take it",
      "Sell the patent to the biggest rival",
      "Wait until incumbents change their mind"
    ],
    explanation: "Dyson licensed the design in Japan, learned from the income, and launched his own Dyson brand in 1993 after thousands of prototypes."
  },
  {
    category: "Product",
    year: 2007,
    entrepreneur: "Steve Jobs / Apple – iPhone (2007)",
    image: "founder-portraits/additional-07.jpg",
    icon: "👆",
    question: "Every popular phone has a physical keyboard and a stylus. You believe a full touchscreen is better, but it’s unproven and risky.",
    answer: "Drop the keyboard and build the whole experience around multi-touch",
    choices: [
      "Drop the keyboard and build the whole experience around multi-touch",
      "Add a slide-out keyboard to reassure customers",
      "Launch a cheaper phone with fewer features",
      "License the software to other handset makers"
    ],
    explanation: "Apple bet on multi-touch and a simple interface, changing what people expected a phone to be."
  },
  {
    category: "Product",
    year: 1873,
    entrepreneur: "Levi Strauss – riveted jeans (1873)",
    image: "founder-portraits/additional-08.jpg",
    icon: "👖",
    question: "A tailor, Jacob Davis, has invented copper-riveted work trousers that don’t tear. He can’t afford the patent fee. You’re a wholesale merchant with fabric and money.",
    answer: "Partner with him, pay the patent and mass-produce durable work trousers",
    choices: [
      "Partner with him, pay the patent and mass-produce durable work trousers",
      "Ignore it and keep selling ordinary cloth",
      "Offer him a small sum and keep the idea secret",
      "Make them as a luxury fashion item"
    ],
    explanation: "Strauss and Davis patented the riveted work trouser together in 1873, creating jeans for miners and labourers."
  },
  {
    category: "Product",
    year: 2000,
    entrepreneur: "Sara Blakely – Spanx (2000)",
    image: "founder-portraits/additional-06.jpg",
    icon: "🧦",
    question: "You’ve designed footless, body-shaping tights. Hosiery mills, mostly run by men, turn you down because you’re an unknown with no experience.",
    answer: "Keep approaching mills in person until one agrees to make a prototype",
    choices: [
      "Keep approaching mills in person until one agrees to make a prototype",
      "Give up and return to your sales job",
      "Pay an expensive design agency to pitch for you",
      "Rebrand it as sportswear"
    ],
    explanation: "Blakely kept pitching. A mill owner eventually agreed to back her, and she built the brand on her own savings."
  },
  {
    category: "Price",
    year: 1908,
    entrepreneur: "Henry Ford – Model T (1908–27)",
    image: "founder-portraits/additional-01.jpg",
    icon: "🚘",
    question: "Cars are luxury goods that cost more than a typical worker earns in a year. You want one in every household.",
    answer: "Redesign production around a moving assembly line and pass the savings on",
    choices: [
      "Redesign production around a moving assembly line and pass the savings on",
      "Keep prices high and sell to the wealthy",
      "Use cheaper, weaker materials",
      "Hand-build each car and offer payment plans"
    ],
    explanation: "The moving assembly line (1913) cut build time dramatically, and Ford’s price fell year after year."
  },
  {
    category: "Price",
    year: 1950,
    entrepreneur: "Ingvar Kamprad – IKEA (1950s)",
    image: "founder-portraits/additional-03.jpg",
    icon: "🪑",
    question: "Rival Swedish furniture makers pressure suppliers to boycott you, threatening your low prices.",
    answer: "Source from Poland and redesign furniture as flat-pack",
    choices: [
      "Source from Poland and redesign furniture as flat-pack",
      "Raise prices to cover the higher costs",
      "Merge with a rival",
      "Close and restart in another country"
    ],
    explanation: "IKEA sourced from Poland and pioneered flat-pack design, cutting transport costs and keeping prices low."
  },
  {
    category: "Price",
    year: 1890,
    entrepreneur: "Thomas Lipton – Lipton tea (1890)",
    image: "founder-portraits/additional-04.jpg",
    icon: "🍵",
    question: "Tea passes through many middlemen before it reaches customers, so it’s expensive for ordinary families.",
    answer: "Buy plantations and sell directly in packaged form, cutting out middlemen",
    choices: [
      "Buy plantations and sell directly in packaged form, cutting out middlemen",
      "Sell premium tea in a few boutique shops",
      "Dilute the blend to lower the price",
      "Lobby government to cut tea taxes"
    ],
    explanation: "Lipton bought estates in Ceylon and sold tea direct to the public, making quality tea much cheaper."
  },
  {
    category: "Price",
    year: 2003,
    entrepreneur: "Jack Ma – Taobao (2003)",
    image: "founder-portraits/additional-05.jpg",
    icon: "🛍️",
    question: "eBay dominates online shopping in China and charges sellers fees. Buyers and sellers also don’t trust each other.",
    answer: "Make Taobao free for sellers and build trust with an escrow payment system",
    choices: [
      "Make Taobao free for sellers and build trust with an escrow payment system",
      "Match eBay’s fees to look credible",
      "Copy eBay’s features exactly",
      "Charge more and position as premium"
    ],
    explanation: "Taobao was free for sellers, and Alipay held payments until goods arrived, helping it overtake eBay in China."
  },
  {
    category: "Place",
    year: 1994,
    entrepreneur: "Jeff Bezos – Amazon (1994–95)",
    image: "founder-portraits/jeff-bezos.jpg",
    icon: "📚",
    question: "You want to offer every book ever published, but a shop that big (and its stock) is impossible for a start-up.",
    answer: "Use the web as the shop and fulfil orders from wholesalers’ stock at first",
    choices: [
      "Use the web as the shop and fulfil orders from wholesalers’ stock at first",
      "Open a chain of very large bookshops",
      "Wait until you can afford your own warehouses",
      "Sell only current bestsellers"
    ],
    explanation: "Amazon launched online with wholesaler inventory and built warehouses and logistics as demand grew."
  },
  {
    category: "Place",
    year: 1955,
    entrepreneur: "Ray Kroc – McDonald’s franchising (1955)",
    image: "founder-portraits/ray-kroc.jpg",
    icon: "🍔",
    question: "You want hamburger restaurants nationwide, with the same quality in each, but you have limited capital.",
    answer: "Franchise with strict standard systems, and own the land that franchisees lease",
    choices: [
      "Franchise with strict standard systems, and own the land that franchisees lease",
      "Open all the stores yourself with bank loans",
      "Let each franchisee design their own menu",
      "Sell franchises with no standards to raise cash fast"
    ],
    explanation: "Kroc franchised with rigorous standards and gained income from property, scaling the brand across the US."
  },
  {
    category: "Place",
    year: 1872,
    entrepreneur: "Aaron Montgomery Ward – mail order (1872)",
    image: "founder-portraits/additional-09.jpg",
    icon: "📬",
    question: "Rural Americans pay high prices at local general stores and have little choice. They’re spread across a huge country.",
    answer: "Sell by mail-order catalogue with a satisfaction-guaranteed, money-back promise",
    choices: [
      "Sell by mail-order catalogue with a satisfaction-guaranteed, money-back promise",
      "Open one large department store in Chicago",
      "Send travelling salesmen to every farm",
      "Wait for railways to reach every town"
    ],
    explanation: "Ward’s catalogue brought a huge range to rural customers, and his guarantee overcame distrust of buying unseen."
  },
  {
    category: "Place",
    year: 1998,
    entrepreneur: "Mo Ibrahim – Celtel (1998)",
    image: "founder-portraits/mo-ibrahim.jpg",
    icon: "📡",
    question: "Across Africa, few people have landlines, and most can’t afford contracts or pass credit checks.",
    answer: "Build mobile networks directly and sell prepaid airtime through local vendors",
    choices: [
      "Build mobile networks directly and sell prepaid airtime through local vendors",
      "Wait for governments to build landline networks",
      "Target only wealthy city customers on contracts",
      "Import second-hand handsets only"
    ],
    explanation: "Celtel built networks across Africa and used prepaid airtime, sold widely, to reach customers without bank accounts."
  },
  {
    category: "Promotion",
    year: 1890.5,
    entrepreneur: "Asa Candler – Coca-Cola (1890s)",
    image: "founder-portraits/asa-candler.jpg",
    icon: "🥤",
    question: "Your syrup drink is little-known and you want people across America to try it.",
    answer: "Hand out free-drink coupons and put the logo on everyday items",
    choices: [
      "Hand out free-drink coupons and put the logo on everyday items",
      "Wait for word of mouth",
      "Spend everything on a few newspaper ads",
      "Sell only through pharmacies"
    ],
    explanation: "Candler’s coupons and branded merchandise got people to try it and see the logo everywhere."
  },
  {
    category: "Promotion",
    year: 1940,
    entrepreneur: "Estée Lauder – skincare (1940s)",
    image: "founder-portraits/estee-lauder.jpg",
    icon: "🧴",
    question: "Your brand is new and has no advertising budget. Department stores are reluctant to stock it.",
    answer: "Give out free samples and personal demonstrations",
    choices: [
      "Give out free samples and personal demonstrations",
      "Buy a big magazine advertising campaign",
      "Cut prices below competitors",
      "Hire a famous face"
    ],
    explanation: "Free samples, demonstrations and word of mouth built demand that won department-store counter space."
  },
  {
    category: "Promotion",
    year: 1979,
    entrepreneur: "Akio Morita / Sony – Walkman (1979)",
    image: "founder-portraits/akio-morita.jpg",
    icon: "🎧",
    question: "Market research says nobody will buy a personal stereo that can’t record. Your engineers believe in it.",
    answer: "Let the public experience it: give staff and young trendsetters Walkmans to wear and demo in public",
    choices: [
      "Let the public experience it: give staff and young trendsetters Walkmans to wear and demo in public",
      "Do more market research before deciding",
      "Add recording so research looks better",
      "Sell only in music shops with no demonstrations"
    ],
    explanation: "Sony ignored the research and put Walkmans on people in public places. Seeing it in use created demand."
  },
  {
    category: "Promotion",
    year: 1976,
    entrepreneur: "Anita Roddick – The Body Shop (1976)",
    image: "founder-portraits/anita-roddick.jpg",
    icon: "🌿",
    question: "You can’t afford advertising, and the beauty industry sells glamour and promises.",
    answer: "Make ethics and campaigning the story, earning press coverage and loyalty",
    choices: [
      "Make ethics and campaigning the story, earning press coverage and loyalty",
      "Borrow to buy TV advertising",
      "Hire a celebrity ambassador",
      "Copy rivals’ glamorous packaging"
    ],
    explanation: "The Body Shop built its brand on natural ingredients and public campaigns on environmental and social issues, winning free publicity."
  },
  {
    category: "People",
    year: 1900,
    entrepreneur: "Madam C.J. Walker – hair care (1900s)",
    image: "founder-portraits/madam-cj-walker.jpg",
    icon: "💇",
    question: "You make hair products for Black women, but mainstream retail and funding are closed to you.",
    answer: "Recruit and train a national network of women sales agents",
    choices: [
      "Recruit and train a national network of women sales agents",
      "Sell through white-owned department stores",
      "Hire only male salesmen",
      "Wait until a big retailer approaches you"
    ],
    explanation: "Walker trained thousands of women as agents, giving them income, status and her a direct selling channel."
  },
  {
    category: "People",
    year: 2000.5,
    entrepreneur: "Tony Hsieh – Zappos (2000s)",
    image: "founder-portraits/tony-hsieh.jpg",
    icon: "👟",
    question: "Many customers distrust buying shoes online because they can’t try them on.",
    answer: "Make service the differentiator: empower staff, free shipping and returns",
    choices: [
      "Make service the differentiator: empower staff, free shipping and returns",
      "Undercut every rival’s prices",
      "Spend most of your budget on advertising",
      "Use tightly scripted call-centre staff"
    ],
    explanation: "Zappos made customer service the product, and staff were empowered to go beyond scripts to earn loyalty."
  },
  {
    category: "People",
    year: 1962,
    entrepreneur: "Dame Stephanie Shirley – Freelance Programmers (1962)",
    image: "founder-portraits/stephanie-shirley.jpg",
    icon: "💻",
    question: "Skilled women programmers leave work after marriage or childbirth, and clients doubt firms run by women.",
    answer: "Build a team of women programmers working flexibly from home",
    choices: [
      "Build a team of women programmers working flexibly from home",
      "Hire only male graduates for credibility",
      "Compete only on lowest price",
      "Open prestigious central offices"
    ],
    explanation: "Shirley, a refugee who arrived in Britain on the Kindertransport, built a home-working team of women and sold under “Steve”, which won clients."
  },
  {
    category: "People",
    year: 1963,
    entrepreneur: "Mary Kay Ash – Mary Kay Cosmetics (1963)",
    image: "founder-portraits/additional-10.jpg",
    icon: "🏆",
    question: "You want to build a sales force of women with little business experience, many of whom lack confidence.",
    answer: "Train, recognise and reward them publicly with prizes and encouragement",
    choices: [
      "Train, recognise and reward them publicly with prizes and encouragement",
      "Pay low flat wages",
      "Hire only experienced managers",
      "Offer commission with no training or support"
    ],
    explanation: "Mary Kay Ash built the company around recognition, training and rewards, making consultants proud and motivated."
  }
];

function reorderChoicesForCorrectOption(question, targetIndex) {
  const correctChoice = question.answer;
  const currentIndex = question.choices.indexOf(correctChoice);

  if (currentIndex === -1 || currentIndex === targetIndex) {
    return;
  }

  const reordered = [...question.choices];
  const [answerChoice] = reordered.splice(currentIndex, 1);
  reordered.splice(targetIndex, 0, answerChoice);
  question.choices = reordered;
}

questions.forEach((question, index) => {
  question.image = namedPortraitMap[question.entrepreneur] || question.image || "";
  reorderChoicesForCorrectOption(question, (index + 1) % question.choices.length);
});

questions.sort((first, second) => first.year - second.year);
