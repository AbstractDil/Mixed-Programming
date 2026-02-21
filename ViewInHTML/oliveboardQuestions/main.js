document.addEventListener("DOMContentLoaded", function() {
        // 1. Image Path Fixer
        const prefix = "https://u1.oliveboard.in/exams/tests/";
        document.querySelectorAll('img').forEach(img => {
            let src = img.getAttribute('src');
            if (src && !src.startsWith('http')) {
                img.src = prefix + src;
            }
        });

        // 2. Identify Elements
        const rawTitle = document.querySelector('h3.text-center');
        const questionPane = document.getElementById('question-inner-pane');
        const questions = document.querySelectorAll('.question-outer-div');

        // 3. Create the New Structure
        const page = document.createElement('div');
        page.className = 'page';

        // Build Header
        const header = document.createElement('div');
        header.className = 'exam-header';
        header.innerHTML = `
            <div class="header-info">
                <h2>${rawTitle ? rawTitle.innerText : 'EXAMINATION PAPER'}</h2>
                
            </div>
        `;

        // Build Main Content
        const mainContent = document.createElement('div');
        mainContent.className = 'main-content';

        // Move all questions into the new mainContent
        questions.forEach(q => mainContent.appendChild(q));

        // Build Footer
        const footer = document.createElement('div');
        footer.className = 'footer';
        footer.innerHTML = `Compiled on ${new Date().toLocaleDateString()} by Sagar Nandy | OliveBoard RRB NTPC Graduate Level Live Mock Series`;

        // Assemble everything
        page.appendChild(header);
        page.appendChild(mainContent);
        page.appendChild(footer);

        // Replace the old layout with the new one
        if (questionPane) {
            questionPane.innerHTML = ''; // Clear old content
            questionPane.appendChild(page);
        }

        // Hide the old standalone title if it exists
        if (rawTitle) rawTitle.style.display = 'none';

        // Add Print Button
        const btn = document.createElement('button');
        btn.innerText = "Print to PDF";
        btn.className = "print-btn";
        btn.onclick = () => window.print();
        document.body.appendChild(btn);
    });

document.addEventListener("DOMContentLoaded", function () {
    // Hide all elements with the class 'hqt'
    document.querySelectorAll(".hqt").forEach(function (el) {
        el.style.display = "none";
    });

    // Hide all radio inputs
    document.querySelectorAll("input[type='radio']").forEach(function (el) {
        el.style.display = "none";
    });

    // Add 'img-thumbnail' class to all image tags
    document.querySelectorAll("img").forEach(function (img) {
        img.classList.add("img-fluid");
    });

    // Wrap each question in a Bootstrap panel
    let questions = document.querySelectorAll(".question-outer-div");
    questions.forEach(function (question, index) {
        let qNumber = index + 1; // Start numbering from 1
        
        // Create panel elements
        let panelDiv = document.createElement("div");
        panelDiv.className = "panel panel-default";

        let panelHeader = document.createElement("div");
        panelHeader.className = "panel-heading";
        panelHeader.innerHTML = `<b>Question ${qNumber}</b>`;

        let panelBody = document.createElement("div");
        panelBody.className = "panel-body";

        // Move the question content inside panelBody
        while (question.firstChild) {
            panelBody.appendChild(question.firstChild);
        }

        // Assemble the panel
        panelDiv.appendChild(panelHeader);
        panelDiv.appendChild(panelBody);

        // Replace the original question wrapper with the panel
        question.parentNode.replaceChild(panelDiv, question);
    });
});


