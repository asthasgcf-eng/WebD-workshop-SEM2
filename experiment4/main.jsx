function calculateResult() {
    let numSubjects = document.getElementById('subCount').value;
    let totalMarks = 0;
    let marksArray = [];


    for (let i = 1; i <= numSubjects; i++) {
        let score = parseFloat(prompt("Enter marks for subject " + i));// Prompting user for marks of each subject
        marksArray.push(score);
        totalMarks += score;
    }


    let average = totalMarks / numSubjects;

  
    let grade = "";
    let status = (average >= 40) ? "Pass" : "Fail";

    if (average >= 90) grade = "A+";
    else if (average >= 75) grade = "A";
    else if (average >= 60) grade = "B";
    else if (average >= 40) grade = "C";
    else grade = "F";

    

    let resultDiv = document.getElementById('displayArea');
    resultDiv.innerHTML = `
        <div class="result-item"><span>Total Marks:</span> <b>${totalMarks}</b></div>
        <div class="result-item"><span>Average:</span> <b>${average.toFixed(2)}%</b></div>
        <div class="result-item"><span>Grade:</span> <b>${grade}</b></div>
        <div class="result-item"><span>Status:</span> <span class="${status}">${status}</span></div>
    `;
}