
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


// Calculate Session-1 Score Reasoning and Mathematics 
// Each Question Carries 3 marks and there is not negative marking


for (var totalMarks = 0, s = 0; s < 2; s++) {
    var sectionLabels = document.querySelectorAll('.section-lbl');
    var sectionTexts = sectionLabels[s].querySelector('span.bold').textContent;

  for ( var right = 0,notAttempted = 0, bonus = 0, i = 20 * s;i < 20 * s + 20;i++) {
    " -- " ===
      document
        .getElementsByClassName("question-pnl")
        [i].getElementsByClassName("bold")[10].textContent && notAttempted++;
       // var sectionTexts = sectionLabels[i].querySelector('span.bold').textContent;
    try {
      document
        .getElementsByClassName("question-pnl")
        [i].getElementsByClassName("rightAns")[0].textContent[0] ===
        document
          .getElementsByClassName("question-pnl")
          [i].getElementsByClassName("bold")[10].textContent && right++;
    } catch {
      bonus++;
    }
  }
  (wrong = 20 - notAttempted - right - bonus),
    (marks = 3 * (right + bonus) - 0 * wrong),
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
console.log(" %c \nTotal Marks in Session-1 : " + totalMarks, "background: #222; color: skyblue;");

console.log("%c Powered by : MathHub Combined (https://mathhub.nandysagar.in) ", "background: #222; color: #ca5565;font-size:14px;")


// Calculate Session-2 General Awarness Score 
// Each Question Carries 3 marks and there is 1 negative marking for every wrong question


for (var totalMarks = 0, s = 2; s < 3; s++) {
    var sectionLabels = document.querySelectorAll('.section-lbl');
    var sectionTexts = sectionLabels[s].querySelector('span.bold').textContent;

  for ( var right = 0,notAttempted = 0, bonus = 0, i = 25 * s;i < 25 * s + 25;i++) {
    " -- " ===
      document.getElementsByClassName("question-pnl")[i].getElementsByClassName("bold")[10].textContent && notAttempted++;
      
    try {
      document
        .getElementsByClassName("question-pnl")
        [i].getElementsByClassName("rightAns")[0].textContent[0] ===
        document
          .getElementsByClassName("question-pnl")
          [i].getElementsByClassName("bold")[10].textContent && right++;
    } catch {
      bonus++;
    }
  }
  (wrong = 25 - notAttempted - right - bonus),
    (marks = 3 * (right + bonus) - 1 * wrong),
    (totalMarks += marks);

  console.log(
    "%c" +
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
      marks,  "background: #222; color:#D3D3D3;font-size:12px;"
  );
}

// Calculate Session-2 English Score 
// Each Question Carries 3 marks and there is 1 negative marking for every wrong question

for (var totalMarks = 0, s = 3; s < 4; s++) {
    var sectionLabels = document.querySelectorAll('.section-lbl');
    var sectionTexts = sectionLabels[s].querySelector('span.bold').textContent;
    console.log("Section Name : " + sectionTexts);

  for ( var right = 0,notAttempted = 0, bonus = 0, i = 25 * s;i < 25 * s + 25;i++) {
    " -- " ===
      document.getElementsByClassName("question-pnl")[i].getElementsByClassName("bold")[11].textContent && notAttempted++;
    try {
      document
        .getElementsByClassName("question-pnl")
        [i].getElementsByClassName("rightAns")[0].textContent[0] ===
        document
          .getElementsByClassName("question-pnl")
          [i].getElementsByClassName("bold")[11].textContent && right++;
    } catch {
      bonus++;
    }
  }
  (wrong = 25 - notAttempted - right - bonus),
    (marks = 3 * (right + bonus) - 1 * wrong),
    (totalMarks += marks);

  console.log(
    "%c" +
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
      marks,  "background: #222; color:#D3D3D3;font-size:12px;"
  );
}
