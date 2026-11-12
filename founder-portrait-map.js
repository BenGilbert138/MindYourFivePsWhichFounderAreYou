const founderPortraitPaths = {
Product → 17_Sara_Blakely.jpg
Price → 19_Jack_Ma.jpg
Place → 16_Mo_Ibrahim.jpg
Promotion → 12_Anita_Roddick.jpg
People → 5_Madam_C._J._Walker.jpg
};

for (const [category, portrait] of Object.entries(founderPortraitPaths)) {
  if (founderMatches[category]) {
    founderMatches[category].portrait = portrait;
  }
}
