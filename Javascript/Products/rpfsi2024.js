
var examName = $('.main-info-pnl table tbody tr:nth-child(8) td:nth-child(2)').text();
var examDate = $('.main-info-pnl table tbody tr:nth-child(6) td:nth-child(2)').text();
var examShift = $('.main-info-pnl table tbody tr:nth-child(7) td:nth-child(2)').text();
var examCenter = $('.main-info-pnl table tbody tr:nth-child(5) td:nth-child(2)').text();
var examRollNo = $('.main-info-pnl table tbody tr:nth-child(1) td:nth-child(2)').text();
var candidateName = $('.main-info-pnl table tbody tr:nth-child(3) td:nth-child(2)').text();
var RegNo = $('.main-info-pnl table tbody tr:nth-child(2) td:nth-child(2)').text();
var Category = $('.main-info-pnl table tbody tr:nth-child(4) td:nth-child(2)').text();

console.log(
    "%c Exam Name: " + examName +
    "\n Exam Date: " + examDate +
    "\n Exam Shift: " + examShift +
    "\n Exam Center: " + examCenter +
    "\n Exam Roll No: " + examRollNo +
    "\n Regiration No: " + RegNo +
    "\n Candidate Name: " + candidateName +
    "\n Community: " + Category,
    "background: #222; color: #bada55;"
  );
  
  for (var totalMarks = 0, totalQuestions = 0, s = 0; s < 3; s++) {
    var sectionLabels = document.querySelectorAll('.section-lbl');
    var sectionTexts = sectionLabels[s].querySelector('span.bold').textContent;

    // Determine the start and end indices for questions in each section
    var startIndex, endIndex, totalSectionQuestions;
    if (s < 2) { // First two sections
        startIndex = 35 * s;
        endIndex = startIndex + 35;
    } else { // Third section (questions 71 to 120)
        startIndex = 70; // Question index starts from 71
        endIndex = 120; // Question index ends at 120
    }

    totalSectionQuestions = endIndex - startIndex;

    var right = 0, notAttempted = 0, bonus = 0;

    for (var i = startIndex; i < endIndex; i++) {
        // Increment totalQuestions for each question processed
        totalQuestions++;

        " -- " ===
            document
                .getElementsByClassName("question-pnl")
                [i].getElementsByClassName("bold")[10].textContent &&
            notAttempted++;

        try {
            document
                .getElementsByClassName("question-pnl")
                [i].getElementsByClassName("rightAns")[0].textContent[0] ===
                document
                    .getElementsByClassName("question-pnl")
                    [i].getElementsByClassName("bold")[10].textContent &&
                right++;
        } catch {
            bonus++;
        }
    }

    var wrong = totalSectionQuestions - notAttempted - right - bonus;
    var marks = 1 * (right + bonus) - 0.33 * wrong;
    totalMarks += marks;

    console.log(
        "%c" +
        "Section Name : " +
        sectionTexts +
        "\nTotal Questions : " +
        totalSectionQuestions +
        "\nAttempted : " +
        (totalSectionQuestions - notAttempted) +
        "\nRight Answers : " +
        right +
        "\nWrong Answers : " +
        wrong +
        "\nBonus : " +
        bonus +
        "\nMarks : " +
        marks,
        "background: #222; color:#D3D3D3;font-size:12px;"
    );
}

console.log(
    "%c Overall Total Questions: " + totalQuestions +
    "\nTotal Marks: " + totalMarks,
    "background: #222; color: skyblue;"
);

console.log("%c RPF SI 2024 Score Card Generating System \n Powered by : MathHub Combined (https://mathhub.nandysagar.in) \n Developed by : Sagar Nandy (https://www.nandysagar.in/) ", "background: #222; color: #ca5565;")
