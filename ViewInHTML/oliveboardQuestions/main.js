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
