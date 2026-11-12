const founderPortraitPaths = {
  Product: "founder-portraits/17_Sara_Blakely.jpg",
  Price: "founder-portraits/19_Jack_Ma.jpg",
  Place: "founder-portraits/16_Mo_Ibrahim.jpg",
  Promotion: "founder-portraits/12_Anita_Roddick.jpg",
  People: "founder-portraits/5_Madam_C._J._Walker.jpg"
};

for (const [category, portrait] of Object.entries(founderPortraitPaths)) {
  if (founderMatches[category]) {
    founderMatches[category].portrait = portrait;
  }
}
