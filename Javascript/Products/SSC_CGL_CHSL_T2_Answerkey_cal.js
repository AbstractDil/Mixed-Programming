
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

// For mathematics and Reasoning 

for (var totalMarks = 0, s = 0; s < 2; s++) {


    var sectionLabels = document.querySelectorAll('.section-lbl');
    var sectionTexts = sectionLabels[s].querySelector('span.bold').textContent;

  for ( var right = 0,notAttempted = 0, bonus = 0, i = 30 * s;i < 30 * s + 30;i++) {
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
  (wrong = 30 - notAttempted - right - bonus),
    (marks = 3 * (right + bonus) - 1 * wrong),
    (totalMarks += marks);

  console.log(
    "%c" +
    "Section Name : " +
    sectionTexts +
      "\nAttempted : " +
      (30 - notAttempted) +
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
console.log(" %c Total Marks in Math and Reasoning : " + totalMarks, "background: #222; color: skyblue;");

// For English 

for (var totalMarks_II = 0, s = 2; s < 3; s++) {
    var sectionLabels = document.querySelectorAll('.section-lbl');
    var sectionTexts = sectionLabels[s].querySelector('span.bold').textContent;
    //console.log("Section Name : " + sectionTexts); 
    for ( var right = 0,notAttempted = 0, bonus = 0, i = 45 * (s-2);i < 45 * (s-2) + 45;i++) {
      //console.log(i);
      " -- " ===
      document.getElementsByClassName("grp-cntnr")[1].getElementsByClassName("question-pnl")[i].getElementsByClassName("bold")[9].textContent && notAttempted++;
        
      try {
        document.getElementsByClassName("grp-cntnr")[1]
          .getElementsByClassName("question-pnl")
          [i].getElementsByClassName("rightAns")[0].textContent[0] ===
          document.getElementsByClassName("grp-cntnr")[1]
            .getElementsByClassName("question-pnl")
            [i].getElementsByClassName("bold")[9].textContent && right++;
      } catch {
        bonus++;
      }
    }
  (wrong = 45 - notAttempted - right - bonus),
    (marks = 3 * (right + bonus) - 1 * wrong),
    (totalMarks_II += marks);
  
  console.log(
    "%c" +
    "Section Name : " +
    sectionTexts +
      "\nAttempted : " +
      (45 - notAttempted) +
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
  //console.log("%c Total Marks in English : " + totalMarks_II, "color: skyblue;");


  // for GS

  for (var totalMarks_III = 0, s = 3; s < 4; s++) {
    var sectionLabels = document.querySelectorAll('.section-lbl');
    var sectionTexts = sectionLabels[s].querySelector('span.bold').textContent;
    //console.log("Section Name : " + sectionTexts); 
    for (  var right = 0,notAttempted = 0, bonus = 0, i = 25 * (s-3);i < 25 * (s-3) + 25;i++) {
      //console.log(i);
      " -- " ===
      document.getElementsByClassName("grp-cntnr")[1].getElementsByClassName("section-cntnr")[1].getElementsByClassName("question-pnl")[i].getElementsByClassName("bold")[9].textContent && notAttempted++;
        
      try {
        document.getElementsByClassName("grp-cntnr")[1]
        .getElementsByClassName("section-cntnr")[1].getElementsByClassName("question-pnl")
          [i].getElementsByClassName("rightAns")[0].textContent[0] ===
          document.getElementsByClassName("grp-cntnr")[1].getElementsByClassName("section-cntnr")[1]
            .getElementsByClassName("question-pnl")
            [i].getElementsByClassName("bold")[9].textContent && right++;
      } catch {
        bonus++;
      }
    }
  (wrong = 25 - notAttempted - right - bonus),
    (marks = 3 * (right + bonus) - 1 * wrong),
    (totalMarks_III += marks);
  
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

  let marksInSessionII =  (totalMarks_II) + (totalMarks_III);


  console.log("%c Total Marks in Eng & GS : " + marksInSessionII, "color: skyblue;");

  // For Computer 

  for (var totalMarks_Comp = 0, s = 4; s < 5; s++) {
    var sectionLabels = document.querySelectorAll('.section-lbl');
    var sectionTexts = sectionLabels[s].querySelector('span.bold').textContent;
    //console.log("Section Name : " + sectionTexts); 
    for ( var right = 0,notAttempted = 0, bonus = 0, i = 20 * (s-4);i < 20 * (s-4) + 20;i++) {
      //console.log(i);
      " -- " ===
      document.getElementsByClassName("grp-cntnr")[2].getElementsByClassName("question-pnl")[i].getElementsByClassName("bold")[9].textContent && notAttempted++;
        
      try {
        document.getElementsByClassName("grp-cntnr")[2]
          .getElementsByClassName("question-pnl")
          [i].getElementsByClassName("rightAns")[0].textContent[0] ===
          document.getElementsByClassName("grp-cntnr")[2]
            .getElementsByClassName("question-pnl")
            [i].getElementsByClassName("bold")[9].textContent && right++;
      } catch {
        bonus++;
      }
    }
  (wrong = 20 - notAttempted - right - bonus),
    (marks = 3 * (right + bonus) - 1 * wrong),
    (totalMarks_Comp += marks);
  
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

  console.log("%c Total Marks in Computer : " + totalMarks_Comp, "color: skyblue;");




console.log("%c MathHub Score Card Generating System \n Powered by : MathHub Combined (https://mathhub.nandysagar.in) \n Developed by : Sagar Nandy (https://www.nandysagar.in/) ", "background: #222; color: #ca5565;")
