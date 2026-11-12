const founders = {
  Product: "Sara Blakely",
  Price: "Jack Ma",
  Place: "Mo Ibrahim",
  Promotion: "Anita Roddick",
  People: "Madam C.J. Walker"
};

const founderMatches = {
  Product: { name: "Sara Blakely", company: "Spanx", avatar: "sara-blakely", portrait: "founder-portraits/17_Sara_Blakely.jpg", symbol: "Footless shaping tights", quote: "“Don’t be intimidated by what you don’t know. It’s all about learning as you go.”", quoteSource: "Sara Blakely, in a 2014 interview with Inc." },
  Price: { name: "Jack Ma", company: "Alibaba / Taobao", avatar: "jack-ma", portrait: "founder-portraits/19_Jack_Ma.jpg", symbol: "Shopping bag (online marketplace)", quote: "“Never give up. Today is hard, tomorrow will be worse, but the day after tomorrow will be sunshine.”", quoteSource: "Jack Ma, founder of Alibaba" },
  Place: { name: "Mo Ibrahim", company: "Celtel", avatar: "mo-ibrahim", portrait: "founder-portraits/16_Mo_Ibrahim.jpg", symbol: "Mobile phone with signal waves", quote: "“Africans must not fear Africa. We are capable, and our continent is full of opportunities.”", quoteSource: "Mo Ibrahim, founder of Celtel" },
  Promotion: { name: "Anita Roddick", company: "The Body Shop", avatar: "anita-roddick", portrait: "founder-portraits/12_Anita_Roddick.jpg", symbol: "Skincare jar with a leaf", quote: "“If you think health and beauty are a luxury then you’re much mistaken.”", quoteSource: "Anita Roddick, founder of The Body Shop" },
  People: { name: "Madam C.J. Walker", company: "Walker Manufacturing", avatar: "madam-cj-walker", portrait: "founder-portraits/5_Madam_C._J._Walker.jpg", symbol: "Hair comb (hair-care products)", quote: "“I had to make my own opportunities.”", quoteSource: "Madam C.J. Walker, entrepreneur and philanthropist" }
};

const fivePs = [
  { title: "Product", description: "Design a solution that solves a real problem and creates obvious value.", icon: "🧩" },
  { title: "Price", description: "Set a value that reflects both customer willingness to pay and business goals.", icon: "💸" },
  { title: "Place", description: "Put the product where customers can discover, access, and buy it easily.", icon: "📍" },
  { title: "Promotion", description: "Communicate benefits through the channels that reach your intended audience.", icon: "📣" },
  { title: "People", description: "Deliver great service through motivated teams and customer-focused experiences.", icon: "🤝" }
];

const namedPortraitMap = {
  "James Dyson - Bagless vacuum": "founder-portraits/13_James_Dyson.jpg",
  "Steve Jobs - Apple iPhone": "founder-portraits/20_Steve_Jobs.jpg",
  "Levi Strauss - Riveted jeans": "founder-portraits/2_Levi_Strauss.jpg",
  "Sara Blakely - Spanx": "founder-portraits/17_Sara_Blakely.jpg",
  "Henry Ford - Model T": "founder-portraits/6_Henry_Ford.jpg",
  "Ingvar Kamprad - IKEA": "founder-portraits/8_Ingvar_Kamprad.jpg",
  "Thomas Lipton - Lipton tea": "founder-portraits/3_Thomas_Lipton.jpg",
  "Jack Ma - Taobao": "founder-portraits/19_Jack_Ma.jpg",
  "Jeff Bezos - Amazon": "founder-portraits/15_Jeff_Bezos.jpg",
  "Ray Kroc - McDonald’s franchising": "founder-portraits/9_Ray_Kroc.jpg",
  "Aaron Montgomery Ward - Mail order": "founder-portraits/1_Aaron_Montgomery_Ward.jpg",
  "Mo Ibrahim - Celtel": "founder-portraits/16_Mo_Ibrahim.jpg",
  "Asa Candler - Coca-Cola": "founder-portraits/4_Asa_Candler.jpg",
  "Estée Lauder - Skincare": "founder-portraits/7_Estee_Lauder.jpg",
  "Akio Morita - Sony Walkman": "founder-portraits/14_Morita_Akio.jpg",
  "Anita Roddick - The Body Shop": "founder-portraits/12_Anita_Roddick.jpg",
  "Madam C.J. Walker - Hair care": "founder-portraits/5_Madam_C._J._Walker.jpg",
  "Tony Hsieh - Zappos": "founder-portraits/18_Tony_Hsieh.jpg",
  "Dame Stephanie Shirley - Freelance Programmers": "founder-portraits/10_Dame_Stephanie_Shirley.jpg",
  "Mary Kay Ash - Mary Kay Cosmetics": "founder-portraits/11_Mary_Kay_Ash.jpg"
};

const questions = [
  { category: "Product", year: 1978, city: "Malvern, England", entrepreneur: "James Dyson - Bagless vacuum", image: "founder-portraits/13_James_Dyson.jpg", icon: "🧹", question: "You’ve built a cleaner that outperforms existing vacuum bags and solves the problem of lost suction. You’re keen to profit from a product that a major manufacturer could easily copy. What do you do?" },
  { category: "Product", year: 2007, city: "Cupertino, California", entrepreneur: "Steve Jobs - Apple iPhone", image: "founder-portraits/20_Steve_Jobs.jpg", icon: "👆", question: "Every popular phone still demands a cramped keypad, but customers expect more. The market wants a device that feels like a pocket computer. What do you do?" },
  { category: "Product", year: 1873, city: "San Francisco, California", entrepreneur: "Levi Strauss - Riveted jeans", image: "founder-portraits/2_Levi_Strauss.jpg", icon: "👖", question: "A tailor offers you a strong new fastening for workwear, but it’s untested. Miners and labourers need durable clothing that won’t rip under strain. What do you do?" },
  { category: "Product", year: 2000, city: "Atlanta, Georgia", entrepreneur: "Sara Blakely - Spanx", image: "founder-portraits/17_Sara_Blakely.jpg", icon: "🧦", question: "You’ve designed footless shaping tights with no patent protection, and you have limited cash. Major manufacturers are not interested in a product that looks too unusual. What do you do?" },
  { category: "Price", year: 1908, city: "Detroit, Michigan", entrepreneur: "Henry Ford - Model T", image: "founder-portraits/6_Henry_Ford.jpg", icon: "🚘", question: "Cars are luxury goods that only wealthy customers can afford. You want to build a mass-market car that people can buy repeatedly and keep on the road. What do you do?" },
  { category: "Price", year: 1950, city: "Älmhult, Sweden", entrepreneur: "Ingvar Kamprad - IKEA", image: "founder-portraits/8_Ingvar_Kamprad.jpg", icon: "🪑", question: "Rival Swedish furniture makers are undercutting your prices with lower-cost imports. You still want to sell affordable furniture without sacrificing your low-price reputation. What do you do?" },
  { category: "Price", year: 1890, city: "Glasgow, Scotland", entrepreneur: "Thomas Lipton - Lipton tea", image: "founder-portraits/3_Thomas_Lipton.jpg", icon: "🍵", question: "Tea passes through too many middlemen, and your company is losing margin. You want an affordable product that grows into a mass market. What do you do?" },
  { category: "Price", year: 2003, city: "Hangzhou, China", entrepreneur: "Jack Ma - Taobao", image: "founder-portraits/19_Jack_Ma.jpg", icon: "🛍️", question: "eBay dominates online shopping in China, charging fees to sellers and setting the rules. You want a marketplace that is trusted by buyers and sellers alike. What do you do?" },
  { category: "Place", year: 1994, city: "Seattle, Washington", entrepreneur: "Jeff Bezos - Amazon", image: "founder-portraits/15_Jeff_Bezos.jpg", icon: "📚", question: "You want to offer every book in print online, but customers are cautious about buying without seeing the book first. How do you reach them?" },
  { category: "Place", year: 1955, city: "Chicago, Illinois", entrepreneur: "Ray Kroc - McDonald’s franchising", image: "founder-portraits/9_Ray_Kroc.jpg", icon: "🍔", question: "You want hamburgers that travel well, are quick to serve and taste the same everywhere. Your system needs to spread beyond a single town. What do you do?" },
  { category: "Place", year: 1872, city: "Chicago, Illinois", entrepreneur: "Aaron Montgomery Ward - Mail order", image: "founder-portraits/1_Aaron_Montgomery_Ward.jpg", icon: "📬", question: "Rural customers are cut off from city stores, and many live far from rail lines. You want to sell goods across a huge area without building dozens of stores. What do you do?" },
  { category: "Place", year: 1998, city: "London, England", entrepreneur: "Mo Ibrahim - Celtel", image: "founder-portraits/16_Mo_Ibrahim.jpg", icon: "📡", question: "Across Africa, few people have mobile phones. Landlines are scarce, contracts are hard to get and many families cannot pass credit checks. What do you do?" },
  { category: "Promotion", year: 1890.5, city: "Atlanta, Georgia", entrepreneur: "Asa Candler - Coca-Cola", image: "founder-portraits/4_Asa_Candler.jpg", icon: "🥤", question: "Your syrup drink is potent but no one knows it yet. You need to make it famous without relying on a handful of salesmen or a single retailer. What do you do?" },
  { category: "Promotion", year: 1940, city: "New York City, New York", entrepreneur: "Estée Lauder - Skincare", image: "founder-portraits/7_Estee_Lauder.jpg", icon: "🧴", question: "Your brand is selling beauty products through department stores, but the market is crowded and consumers wait for the next big trend. How do you create demand?" },
  { category: "Promotion", year: 1979, city: "Tokyo, Japan", entrepreneur: "Akio Morita - Sony Walkman", image: "founder-portraits/14_Morita_Akio.jpg", icon: "🎧", question: "Market research says nobody will buy a portable stereo that can’t record music. Your engineers believe the product is worth launching anyway. What do you do?" },
  { category: "Promotion", year: 1976, city: "Brighton, England", entrepreneur: "Anita Roddick - The Body Shop", image: "founder-portraits/12_Anita_Roddick.jpg", icon: "🌿", question: "You want to launch a business selling products with ethically sourced, cruelty-free and natural ingredients. You can’t afford advertising, and the beauty industry sells glamour and promises. What do you do?" },
  { category: "People", year: 1900, city: "Denver, Colorado", entrepreneur: "Madam C.J. Walker - Hair care", image: "founder-portraits/5_Madam_C._J._Walker.jpg", icon: "💇", question: "You make products for Black women, but the market is dominated by white-owned companies that sell through department stores. How do you build trust and reach customers?" },
  { category: "People", year: 2000.5, city: "Las Vegas, Nevada", entrepreneur: "Tony Hsieh - Zappos", image: "founder-portraits/18_Tony_Hsieh.jpg", icon: "👟", question: "Many customers distrust buying shoes online, and customer support costs are rising. You want a company culture that delights shoppers and keeps service exceptional. What do you do?" },
  { category: "People", year: 1962, city: "London, England", entrepreneur: "Dame Stephanie Shirley - Freelance Programmers", image: "founder-portraits/10_Dame_Stephanie_Shirley.jpg", icon: "💻", question: "You’re building a software company, but you need talented programmers while juggling social attitudes and the realities of a small business. How do you attract top talent?" },
  { category: "People", year: 1963, city: "Dallas, Texas", entrepreneur: "Mary Kay Ash - Mary Kay Cosmetics", image: "founder-portraits/11_Mary_Kay_Ash.jpg", icon: "🏆", question: "You want to build a sales organisation of women who can succeed without needing years of experience. You need to motivate them while giving them real opportunities to grow. What do you do?" }
];

function reorderChoicesForCorrectOption(question, targetIndex) {
  const correctChoice = question.answer;
  const currentIndex = question.choices.indexOf(correctChoice);
  if (currentIndex === -1 || currentIndex === targetIndex) return;
  const reordered = [...question.choices];
  const [answerChoice] = reordered.splice(currentIndex, 1);
  reordered.splice(targetIndex, 0, answerChoice);
  question.choices = reordered;
}

questions.forEach((question, index) => {
  question.image = namedPortraitMap[question.entrepreneur] || question.image || "";
  const period = question.year === 1890.5 ? "the 1890s" : question.year === 1900 ? "the 1900s" : question.year === 1940 ? "the 1940s" : question.year === 1950 ? "the 1950s" : question.year === 2000.5 ? "the 2000s" : question.year === 2003 ? "the 2000s" : question.year === 2007 ? "the 2000s" : question.year === 1979 ? "the 1970s" : question.year === 1976 ? "the 1970s" : question.year === 1963 ? "the 1960s" : question.year === 1962 ? "the 1960s" : question.year === 1998 ? "the 1990s" : question.year === 1994 ? "the 1990s" : question.year === 1872 ? "the 1870s" : question.year === 1873 ? "the 1870s" : question.year === 1908 ? "the 1900s" : question.year === 1890 ? "the 1890s" : "the 1900s";
  question.question = `It’s ${period} in ${question.city}, and ${question.question.charAt(0).toLowerCase()}${question.question.slice(1)}`;
  reorderChoicesForCorrectOption(question, (index + 1) % question.choices.length);
});

questions.sort((first, second) => first.year - second.year);
