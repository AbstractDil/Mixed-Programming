/*
----------------------------------------------------------------------------
Using JQuery and Javascript to generate answer key for SSC Delhi Police 2023 exam
-----------------------------------------------------------------------------
@Author: Sagar Nandy

@Date: 2023-12-06

*/

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


// Calculate Session-1 Score GK
// Each Question Carries 1 marks and there is not negative marking


for (var totalMarks = 0, s = 0; s < 1; s++) {
    var sectionLabels = document.querySelectorAll('.section-lbl');
    var sectionTexts = sectionLabels[s].querySelector('span.bold').textContent;

  for ( var right = 0,notAttempted = 0, bonus = 0, i = 50 * s;i < 50 * s + 50;i++) {
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
  (wrong = 50 - notAttempted - right - bonus),
    (marks = 1 * (right + bonus) - 0.25 * wrong),
    (totalMarks += marks);

  console.log(
    "%c" +
    "Section Name : " +
    sectionTexts +
      "\nAttempted : " +
      (50 - notAttempted) +
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
// console.log("%c Total Marks in General Knowledge : " + totalMarks, "color: skyblue;");




// Calculate Session-2  Score Reasoning
// Each Question Carries 3 marks and there is 1 negative marking for every wrong question


for (var totalMarks_II = 0, s = 1; s < 2; s++) {
  var sectionLabels = document.querySelectorAll('.section-lbl');
  var sectionTexts = sectionLabels[s].querySelector('span.bold').textContent;
  //console.log("Section Name : " + sectionTexts); 
  for ( var right = 0,notAttempted = 0, bonus = 0, i = 25 * (s-1);i < 25 * (s-1) + 25;i++) {
    //console.log(i);
    " -- " ===
    document.getElementsByClassName("section-cntnr")[1].getElementsByClassName("question-pnl")[i].getElementsByClassName("bold")[9].textContent && notAttempted++;
      
    try {
      document.getElementsByClassName("section-cntnr")[1]
        .getElementsByClassName("question-pnl")
        [i].getElementsByClassName("rightAns")[0].textContent[0] ===
        document.getElementsByClassName("section-cntnr")[1]
          .getElementsByClassName("question-pnl")
          [i].getElementsByClassName("bold")[9].textContent && right++;
    } catch {
      bonus++;
    }
  }
(wrong = 25 - notAttempted - right - bonus),
  (marks = 1 * (right + bonus) - 0.25 * wrong),
  (totalMarks_II += marks);

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

// console.log("%c Total Marks in Reasoning : " + totalMarks_II, "color: skyblue;");






    // Score For Math Section

    for (var totalMarks_III = 0, s = 2; s < 3; s++) {
      var sectionLabels = document.querySelectorAll('.section-lbl');
      var sectionTexts = sectionLabels[s].querySelector('span.bold').textContent;
     //console.log("Section Name : " + sectionTexts);
  
    // for(var q=0;q<1;q++){
  
    for ( var right = 0,notAttempted = 0, bonus = 0, i = 15 * (s-2);i < 15 * (s-2) + 15;i++) {
        //console.log(i);
        " -- " ===
        document.getElementsByClassName("section-cntnr")[2].getElementsByClassName("question-pnl")[i].getElementsByClassName("bold")[9].textContent && notAttempted++;
          
        try {
          document.getElementsByClassName("section-cntnr")[2]
            .getElementsByClassName("question-pnl")
            [i].getElementsByClassName("rightAns")[0].textContent[0] ===
            document.getElementsByClassName("section-cntnr")[2]
              .getElementsByClassName("question-pnl")
              [i].getElementsByClassName("bold")[9].textContent && right++;
        } catch {
          bonus++;
        }
      }
    //}
  
    (wrong = 15 - notAttempted - right - bonus),
      (marks_III = 1 * (right + bonus) - 0.25 * wrong),
      (totalMarks_III += marks_III);
  
    console.log(
      "%c" +
      "Section Name : " +
      sectionTexts +
        "\nAttempted : " +
        (15 - notAttempted) +
        "\nRight Answers : " +
        right +
        "\nWrong Answers : " +
        wrong +
        "\nBonus : " +
        bonus +
        "\nMarks : " +
        marks_III,  "background: #222; color:#D3D3D3;font-size:12px;"
    );
  }
  
// console.log("%c Total Marks in Numerical Ability : " + totalMarks_III, "color: skyblue;");

// Score For Computer Section 

for (var totalMarks_IV = 0, s = 3; s < 4; s++) {
    var sectionLabels = document.querySelectorAll('.section-lbl');
    var sectionTexts = sectionLabels[s].querySelector('span.bold').textContent;
    //console.log("Section Name : " + sectionTexts); 
    for ( var right = 0, notAttempted = 0, bonus = 0, i = 10 * (s-3);i < 10 * (s-3) + 10;i++) {
      //console.log(i);
      " -- " ===
      document.getElementsByClassName("section-cntnr")[3].getElementsByClassName("question-pnl")[i].getElementsByClassName("bold")[9].textContent && notAttempted++;
        
      try {
        document.getElementsByClassName("section-cntnr")[3]
          .getElementsByClassName("question-pnl")
          [i].getElementsByClassName("rightAns")[0].textContent[0] ===
          document.getElementsByClassName("section-cntnr")[3]
            .getElementsByClassName("question-pnl")
            [i].getElementsByClassName("bold")[9].textContent && right++;
      } catch {
        bonus++;
      }
    }
  (wrong = 10 - notAttempted - right - bonus),
    (marks = 1 * (right + bonus) - 0.25 * wrong),
    (totalMarks_IV += marks);
  
  console.log(
    "%c" +
    "Section Name : " +
    sectionTexts +
      "\nAttempted : " +
      (10 - notAttempted) +
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
  

  /*
  for (var totalMarks_IV = 0, s = 3; s < 4; s++) {
    var sectionLabels = document.querySelectorAll('.section-lbl');
    var sectionTexts = sectionLabels[s].querySelector('span.bold').textContent;
    //console.log("Section Name : " + sectionTexts);

  for(var q=0;q<1;q++){

    for ( var right = 0,notAttempted = 0, bonus = 0, i = 10 * q;i < 10 * q + 10;i++) {
      //console.log(i);
      " -- " ===
      document.getElementsByClassName("section-cntnr")[3].getElementsByClassName("question-pnl")[i].getElementsByClassName("bold")[9].textContent && notAttempted++;
        
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
  }

  (wrong = 10 - notAttempted - right - bonus),
    (marks_IV = 1 * (right + bonus) - 0.25 * wrong),
    (totalMarks_IV += marks_IV);

  console.log(
    "%c" +
    "Section Name : " +
    sectionTexts +
      "\nAttempted : " +
      (10 - notAttempted) +
      "\nRight Answers : " +
      right +
      "\nWrong Answers : " +
      wrong +
      "\nBonus : " +
      bonus +
      "\nMarks : " +
      marks_IV,  "background: #222; color:#D3D3D3;font-size:12px;"
  );
}
*/
  
 

  const total = totalMarks + totalMarks_II + totalMarks_III + totalMarks_IV;
  
  console.log(" %c Total Marks : " + total, "background: #222; color: skyblue;");
  
  console.log("%c SSC Delhi Police Exam 2023 Score Card Generating System  \n Developed by : Sagar Nandy (https://www.nandysagar.in/) ", "background: #222; color: #ca4565;")


  
  