
var examName = $('.main-info-pnl table tbody tr:nth-child(6) td:nth-child(2)').text();
var examDate = $('.main-info-pnl table tbody tr:nth-child(4) td:nth-child(2)').text();
var examShift = $('.main-info-pnl table tbody tr:nth-child(5) td:nth-child(2)').text();
var examCenter = $('.main-info-pnl table tbody tr:nth-child(3) td:nth-child(2)').text();
var examRollNo = $('.main-info-pnl table tbody tr:nth-child(1) td:nth-child(2)').text();
var candidateName = $('.main-info-pnl table tbody tr:nth-child(2) td:nth-child(2)').text();

console.log("%c Exam Name: " + examName
+ "\n Exam Date: " + examDate
+ "\n Exam Shift: " + examShift
+ "\n Exam Center: " + examCenter
+ "\n Exam Roll No: " + examRollNo
+ "\n Candidate Name: " + candidateName,
"background: #222; color: #bada55;");



for (var totalMarks = 0, s = 0; s < 5; s++) {


    var sectionLabels = document.querySelectorAll('.section-lbl');
    var sectionTexts = sectionLabels[s].querySelector('span.bold').textContent;

  for ( var right = 0,notAttempted = 0, bonus = 0, i = 20 * s;i < 20 * s + 20;i++) {
    " -- " ===
      document
        .getElementsByClassName("question-pnl")
        [i].getElementsByClassName("bold")[9].textContent && notAttempted++;
       // var sectionTexts = sectionLabels[i].querySelector('span.bold').textContent;
    try {
      document
        .getElementsByClassName("question-pnl")
        [i].getElementsByClassName("rightAns")[0].textContent[0] ===
        document
          .getElementsByClassName("question-pnl")
          [i].getElementsByClassName("bold")[9].textContent && right++;
    } catch {
      bonus++;
    }
  }
  (wrong = 20 - notAttempted - right - bonus),
    (marks = 1 * (right + bonus) - 0.25 * wrong),
    (totalMarks += marks);

  console.log(
    "%c" +
    "Section Name : " +
    sectionTexts +
      "\nAttempted : " +
      (20 - notAttempted) +
      "\nRight Answers : " +
      right +
      "\nWrong Answers : " +
      wrong +
      "\nBonus : " +
      bonus +
      "\nMarks : " +
      marks,  "background: #222; color:#D3D3D3;font-size:12px;"
  );

 




}
console.log(" %c \nTotal Marks : " + totalMarks, "background: #222; color: skyblue;");

console.log("%c SSC MTS 2023 Score Card Generating System \n Powered by : MathHub Combined (https://mathhub.nandysagar.in) \n Developed by : Sagar Nandy (https://www.nandysagar.in/) ", "background: #222; color: #ca5565;")
