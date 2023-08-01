
for (var totalMarks = 0, s = 0; s < 4; s++) {

    var sectionLabels = document.querySelectorAll('.section-lbl');
    var sectionTexts = sectionLabels[s].querySelector('span.bold').textContent;

  for ( var right = 0,notAttempted = 0, bonus = 0, i = 25 * s;i < 25 * s + 25;i++) {
    " -- " ===
      document
        .getElementsByClassName("question-pnl")
        [i].getElementsByClassName("bold")[5].textContent && notAttempted++;
       // var sectionTexts = sectionLabels[i].querySelector('span.bold').textContent;
    try {
      document
        .getElementsByClassName("question-pnl")
        [i].getElementsByClassName("rightAns")[0].textContent[0] ===
        document
          .getElementsByClassName("question-pnl")
          [i].getElementsByClassName("bold")[5].textContent && right++;
    } catch {
      bonus++;
    }
  }
  (wrong = 25 - notAttempted - right - bonus),
    (marks = 2 * (right + bonus) - 0.5 * wrong),
    (totalMarks += marks);

  console.log(
    "Section Name : " +
    sectionTexts +
      "\nAttempted : " +
      (25 - notAttempted) +
      "\nRight Answers : " +
      right +
      "\nWrong Answers : " +
      wrong +
      "\nBonus : " +
      bonus +
      "\nMarks : " +
      marks
  );
}
console.log("\nTotal Marks : " + totalMarks);
