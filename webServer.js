function endExam() {
    const answers = {
        q1: 'D',
        q2: 'A',
        q3: 'C',
        q4: 'B',
        q5: 'D'
    };
    let score = 0;
    const feedback = [];

    Object.keys(answers).forEach((key, index) => {
        const selected = document.querySelector(`input[name="${key}"]:checked`);
        if (selected) {
            if (selected.value === answers[key]) {
                score++;
                feedback.push(`<p>Question ${index + 1}: Correct</p>`);
            } else {
                feedback.push(`<p>Question ${index + 1}: Incorrect</p>`);
            }
        } else {
            feedback.push(`<p>Question ${index + 1}: No answer selected</p>`);
        }
    });

    document.getElementById('score').innerText = `${score} / ${Object.keys(answers).length}`;
    document.getElementById('feedback').innerHTML = feedback.join('');
    document.getElementById('result').style.display = 'block';
}
