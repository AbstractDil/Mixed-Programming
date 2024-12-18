/*
----------------------------------------------------------------------------
Using JQuery and Javascript to generate answer key for SSC MTS 2023 exam
-----------------------------------------------------------------------------
@Author: Sagar Nandy

@Date: 2023-09-19

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
console.log("%c Total Marks in Session-I : " + totalMarks, "color: skyblue;");




// Calculate Session-2  Score 
// Each Question Carries 3 marks and there is 1 negative marking for every wrong question


for (var totalMarks_II = 0, s = 2; s < 4; s++) {
  var sectionLabels = document.querySelectorAll('.section-lbl');
  var sectionTexts = sectionLabels[s].querySelector('span.bold').textContent;
  //console.log("Section Name : " + sectionTexts); 
  for ( var right = 0,notAttempted = 0, bonus = 0, i = 25 * (s-2);i < 25 * (s-2) + 25;i++) {
    //console.log(i);
    " -- " ===
    document.getElementsByClassName("grp-cntnr")[2].getElementsByClassName("question-pnl")[i].getElementsByClassName("bold")[9].textContent && notAttempted++;
      
    try {
      document.getElementsByClassName("grp-cntnr")[2]
        .getElementsByClassName("question-pnl")
        [i].getElementsByClassName("rightAns")[0].textContent[0] ===
        document.getElementsByClassName("grp-cntnr")[2]
          .getElementsByClassName("question-pnl")
          [i].getElementsByClassName("bold")[10].textContent && right++;
    } catch {
      bonus++;
    }
  }
(wrong = 25 - notAttempted - right - bonus),
  (marks = 3 * (right + bonus) - 1 * wrong),
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

console.log("%c Total Marks in Session-II : " + totalMarks_II, "color: skyblue;");


console.log("%c SSC MTS 2023 Score Card Generating System \n Powered by : MathHub Combined (https://mathhub.nandysagar.in) \n Developed by : Sagar Nandy (https://www.nandysagar.in/) ", "background: #222; color: #ca5565;")


/*
    // Score For GS Section

    for (var totalMarks_GS = 0, s = 2; s < 3; s++) {
      var sectionLabels = document.querySelectorAll('.section-lbl');
      var sectionTexts = sectionLabels[s].querySelector('span.bold').textContent;
     //console.log("Section Name : " + sectionTexts);
  
    for(var q=0;q<1;q++){
  
      for ( var right = 0,notAttempted = 0, bonus = 0, i = 25 * q;i < 25 * q + 25;i++) {
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
    }
  
    (wrong = 25 - notAttempted - right - bonus),
      (marks_GS = 3 * (right + bonus) - 1 * wrong),
      (totalMarks_GS += marks_GS);
  
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
        marks_GS,  "background: #222; color:#D3D3D3;font-size:12px;"
    );
  }
  
  
        // Score For English Section 
      for (var totalMarks_Eng = 0, s = 3; s < 4; s++) {
      var sectionLabels = document.querySelectorAll('.section-lbl');
      var sectionTexts = sectionLabels[s].querySelector('span.bold').textContent;
      //console.log("Section Name : " + sectionTexts);
  
    for(var q=1;q<2;q++){
  
      for ( var right = 0,notAttempted = 0, bonus = 0, i = 25 * q;i < 25 * q + 25;i++) {
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
    }
  
    (wrong = 25 - notAttempted - right - bonus),
      (marks_Eng = 3 * (right + bonus) - 1 * wrong),
      (totalMarks_Eng += marks_Eng);
  
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
        marks_Eng,  "background: #222; color:#D3D3D3;font-size:12px;"
    );
  }
  
  const totalMarksII = totalMarks_GS + totalMarks_Eng;
  
  console.log(" %c \nTotal Marks in Session-II : " + totalMarksII, "background: #222; color: skyblue;");
  */



  