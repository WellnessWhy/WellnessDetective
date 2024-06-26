const questionnaire = [
    // Questions 1 to 67 as previously defined
    { id: 'q1', question: 'General fatigue or weakness', answers: ['Mild or rarely occurring', 'Moderate or regularly occurring', 'Severe or often occurring', 'Not applicable'] },
    { id: 'q2', question: 'Difficulty losing weight', answers: ['Mild or rarely occurring', 'Moderate or regularly occurring', 'Severe or often occurring', 'Not applicable'] },
    { id: 'q3', question: 'Frequent illness/infections', answers: ['Mild or rarely occurring', 'Moderate or regularly occurring', 'Severe or often occurring', 'Not applicable'] },
    { id: 'q4', question: 'High stress lifestyle', answers: ['Mild or rarely occurring', 'Moderate or regularly occurring', 'Severe or often occurring', 'Not applicable'] },
    { id: 'q5', question: 'Smoking', answers: ['Mild or rarely occurring', 'Moderate or regularly occurring', 'Severe or often occurring', 'Not applicable'] },
    { id: 'q6', question: 'Drinking more than 2 cups of coffee/day', answers: ['Mild or rarely occurring', 'Moderate or regularly occurring', 'Severe or often occurring', 'Not applicable'] },
    { id: 'q7', question: 'Bad breath and/or body odour', answers: ['Mild or rarely occurring', 'Moderate or regularly occurring', 'Severe or often occurring', 'Not applicable'] },
    { id: 'q8', question: 'Constipation', answers: ['Mild or rarely occurring', 'Moderate or regularly occurring', 'Severe or often occurring', 'Not applicable'] },
    { id: 'q9', question: 'Bags under eyes', answers: ['Mild or rarely occurring', 'Moderate or regularly occurring', 'Severe or often occurring', 'Not applicable'] },
    { id: 'q10', question: 'Crave sugars, bread, alcohol', answers: ['Mild or rarely occurring', 'Moderate or regularly occurring', 'Severe or often occurring', 'Not applicable'] },
    { id: 'q11', question: 'Difficulty digesting certain foods', answers: ['Mild or rarely occurring', 'Moderate or regularly occurring', 'Severe or often occurring', 'Not applicable'] },
    { id: 'q12', question: 'Have used antibiotics in past 10 years', answers: ['Mild or rarely occurring', 'Moderate or regularly occurring', 'Severe or often occurring', 'Not applicable'] },
    { id: 'q13', question: 'Allergies', answers: ['Mild or rarely occurring', 'Moderate or regularly occurring', 'Severe or often occurring', 'Not applicable'] },
    { id: 'q14', question: 'Poor concentration or memory', answers: ['Mild or rarely occurring', 'Moderate or regularly occurring', 'Severe or often occurring', 'Not applicable'] },
    { id: 'q15', question: 'Belching or burping after meals', answers: ['Mild or rarely occurring', 'Moderate or regularly occurring', 'Severe or often occurring', 'Not applicable'] },
    { id: 'q16', question: 'Skin/complexion problems', answers: ['Mild or rarely occurring', 'Moderate or regularly occurring', 'Severe or often occurring', 'Not applicable'] },
    { id: 'q17', question: 'Frequent consumption of red meat', answers: ['Mild or rarely occurring', 'Moderate or regularly occurring', 'Severe or often occurring', 'Not applicable'] },
    { id: 'q18', question: 'Regular use of dairy products', answers: ['Mild or rarely occurring', 'Moderate or regularly occurring', 'Severe or often occurring', 'Not applicable'] },
    { id: 'q19', question: 'Heavy alcohol consumption', answers: ['Mild or rarely occurring', 'Moderate or regularly occurring', 'Severe or often occurring', 'Not applicable'] },
    { id: 'q20', question: 'Exposure to toxins/chemicals', answers: ['Mild or rarely occurring', 'Moderate or regularly occurring', 'Severe or often occurring', 'Not applicable'] },
    { id: 'q21', question: 'Frequent mood swings', answers: ['Mild or rarely occurring', 'Moderate or regularly occurring', 'Severe or often occurring', 'Not applicable'] },
    { id: 'q22', question: 'Depressed and/or irritable', answers: ['Mild or rarely occurring', 'Moderate or regularly occurring', 'Severe or often occurring', 'Not applicable'] },
    { id: 'q23', question: 'Brittle fingernails', answers: ['Mild or rarely occurring', 'Moderate or regularly occurring', 'Severe or often occurring', 'Not applicable'] },
    { id: 'q24', question: 'Dry, brittle hair, split ends', answers: ['Mild or rarely occurring', 'Moderate or regularly occurring', 'Severe or often occurring', 'Not applicable'] },
    { id: 'q25', question: 'High fat/high cholesterol diet', answers: ['Mild or rarely occurring', 'Moderate or regularly occurring', 'Severe or often occurring', 'Not applicable'] },
    { id: 'q26', question: 'Nervousness/anxiety/tension/worry', answers: ['Mild or rarely occurring', 'Moderate or regularly occurring', 'Severe or often occurring', 'Not applicable'] },
    { id: 'q27', question: 'Insomnia/restless sleep', answers: ['Mild or rarely occurring', 'Moderate or regularly occurring', 'Severe or often occurring', 'Not applicable'] },
    { id: 'q28', question: 'Low fibre diet', answers: ['Mild or rarely occurring', 'Moderate or regularly occurring', 'Severe or often occurring', 'Not applicable'] },
    { id: 'q29', question: 'Muscle cramps', answers: ['Mild or rarely occurring', 'Moderate or regularly occurring', 'Severe or often occurring', 'Not applicable'] },
    { id: 'q30', question: 'Sleepy when sitting up', answers: ['Mild or rarely occurring', 'Moderate or regularly occurring', 'Severe or often occurring', 'Not applicable'] },
    { id: 'q31', question: 'Female: menstrual cramps', answers: ['Mild or rarely occurring', 'Moderate or regularly occurring', 'Severe or often occurring', 'Not applicable'] },
    { id: 'q32', question: 'Bronchitis/asthma/pneumonia/emphysema', answers: ['Mild or rarely occurring', 'Moderate or regularly occurring', 'Severe or often occurring', 'Not applicable'] },
    { id: 'q33', question: 'Cellulite', answers: ['Mild or rarely occurring', 'Moderate or regularly occurring', 'Severe or often occurring', 'Not applicable'] },
    { id: 'q34', question: 'Cold hands and feet', answers: ['Mild or rarely occurring', 'Moderate or regularly occurring', 'Severe or often occurring', 'Not applicable'] },
    { id: 'q35', question: 'Varicose veins', answers: ['Mild or rarely occurring', 'Moderate or regularly occurring', 'Severe or often occurring', 'Not applicable'] },
    { id: 'q36', question: 'Feeling out of control', answers: ['Mild or rarely occurring', 'Moderate or regularly occurring', 'Severe or often occurring', 'Not applicable'] },
    { id: 'q37', question: 'Food/chemical sensitivities', answers: ['Mild or rarely occurring', 'Moderate or regularly occurring', 'Severe or often occurring', 'Not applicable'] },
    { id: 'q38', question: 'Frequent yeast/fungus problems', answers: ['Mild or rarely occurring', 'Moderate or regularly occurring', 'Severe or often occurring', 'Not applicable'] },
    { id: 'q39', question: 'Bones break easily, osteoporosis', answers: ['Mild or rarely occurring', 'Moderate or regularly occurring', 'Severe or often occurring', 'Not applicable'] },
    { id: 'q40', question: 'Too little exercise', answers: ['Mild or rarely occurring', 'Moderate or regularly occurring', 'Severe or often occurring', 'Not applicable'] },
    { id: 'q41', question: 'Excessive mucous', answers: ['Mild or rarely occurring', 'Moderate or regularly occurring', 'Severe or often occurring', 'Not applicable'] },
    { id: 'q42', question: 'Short of breath climbing stairs', answers: ['Mild or rarely occurring', 'Moderate or regularly occurring', 'Severe or often occurring', 'Not applicable'] },
    { id: 'q43', question: 'Tingling in lips, fingers, arms, legs', answers: ['Mild or rarely occurring', 'Moderate or regularly occurring', 'Severe or often occurring', 'Not applicable'] },
    { id: 'q44', question: 'Chest pains', answers: ['Mild or rarely occurring', 'Moderate or regularly occurring', 'Severe or often occurring', 'Not applicable'] },
    { id: 'q45', question: 'Very rapid or slow heart beat', answers: ['Mild or rarely occurring', 'Moderate or regularly occurring', 'Severe or often occurring', 'Not applicable'] },
    { id: 'q46', question: 'Painful, hard or thin bowel movements', answers: ['Mild or rarely occurring', 'Moderate or regularly occurring', 'Severe or often occurring', 'Not applicable'] },
    { id: 'q47', question: 'Alternating constipation/diarrhea', answers: ['Mild or rarely occurring', 'Moderate or regularly occurring', 'Severe or often occurring', 'Not applicable'] },
    { id: 'q48', question: 'Recurrent bladder infections', answers: ['Mild or rarely occurring', 'Moderate or regularly occurring', 'Severe or often occurring', 'Not applicable'] },
    { id: 'q49', question: 'Female: Menopause, hot flashes', answers: ['Mild or rarely occurring', 'Moderate or regularly occurring', 'Severe or often occurring', 'Not applicable'] },
    { id: 'q50', question: 'Female: PMS', answers: ['Mild or rarely occurring', 'Moderate or regularly occurring', 'Severe or often occurring', 'Not applicable'] },
    { id: 'q51', question: 'Difficult urination', answers: ['Mild or rarely occurring', 'Moderate or regularly occurring', 'Severe or often occurring', 'Not applicable'] },
    { id: 'q52', question: 'Swollen glands, puffy throat', answers: ['Mild or rarely occurring', 'Moderate or regularly occurring', 'Severe or often occurring', 'Not applicable'] },
    { id: 'q53', question: 'Lower abdominal pain', answers: ['Mild or rarely occurring', 'Moderate or regularly occurring', 'Severe or often occurring', 'Not applicable'] },
    { id: 'q54', question: 'Frequent need to urinate', answers: ['Mild or rarely occurring', 'Moderate or regularly occurring', 'Severe or often occurring', 'Not applicable'] },
    { id: 'q55', question: 'Joint pain', answers: ['Mild or rarely occurring', 'Moderate or regularly occurring', 'Severe or often occurring', 'Not applicable'] },
    { id: 'q56', question: 'Sinus inflammation/discharge', answers: ['Mild or rarely occurring', 'Moderate or regularly occurring', 'Severe or often occurring', 'Not applicable'] },
    { id: 'q57', question: 'Arthritis', answers: ['Mild or rarely occurring', 'Moderate or regularly occurring', 'Severe or often occurring', 'Not applicable'] },
    { id: 'q58', question: 'Sudden weight gain/loss', answers: ['Mild or rarely occurring', 'Moderate or regularly occurring', 'Severe or often occurring', 'Not applicable'] },
    { id: 'q59', question: 'Headaches/Migraines', answers: ['Mild or rarely occurring', 'Moderate or regularly occurring', 'Severe or often occurring', 'Not applicable'] },
    { id: 'q60', question: 'Female: Taking birth control pills', answers: ['Mild or rarely occurring', 'Moderate or regularly occurring', 'Severe or often occurring', 'Not applicable'] },
    { id: 'q61', question: 'Lower back pains', answers: ['Mild or rarely occurring', 'Moderate or regularly occurring', 'Severe or often occurring', 'Not applicable'] },
    { id: 'q62', question: 'Dry, flaky skin', answers: ['Mild or rarely occurring', 'Moderate or regularly occurring', 'Severe or often occurring', 'Not applicable'] },
    { id: 'q63', question: 'Drink less than 6 glasses of fluids/day', answers: ['Mild or rarely occurring', 'Moderate or regularly occurring', 'Severe or often occurring', 'Not applicable'] },
    { id: 'q64', question: 'Water retention', answers: ['Mild or rarely occurring', 'Moderate or regularly occurring', 'Severe or often occurring', 'Not applicable'] },
    { id: 'q65', question: 'Low sex drive', answers: ['Mild or rarely occurring', 'Moderate or regularly occurring', 'Severe or often occurring', 'Not applicable'] },
    { id: 'q66', question: 'Feeling heavy/bloated after meals', answers: ['Mild or rarely occurring', 'Moderate or regularly occurring', 'Severe or often occurring', 'Not applicable'] },
    { id: 'q67', question: 'Chronic cough', answers: ['Mild or rarely occurring', 'Moderate or regularly occurring', 'Severe or often occurring', 'Not applicable'] }
];

const measureNames = [
    "Digestive",
    "Intestinal",
    "Circulatory/Cardiovascular",
    "Nervous",
    "Immune/Lymphatic",
    "Respiratory",
    "Urinary",
    "Glandular/Endocrine",
    "Structural",
    "Reproductive"
];

// Weights for measures 1 to 10
const weights = [
    [1, 1, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0],
    [0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1],
    [1, 1, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0],
    [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

function calculateMeasure(responses, weights) {
    return weights.reduce((sum, weight, index) => sum + (responses[`q${index + 1}`] || 0) * weight, 0);
}

function calculateResults(responses) {
    const measures = weights.map((weightsArray, index) => ({
        label: measureNames[index],
        value: calculateMeasure(responses, weightsArray)
    }));
    return measures;
}

function updateResultsTable(data) {
    resultsTable.innerHTML = '';
    data.forEach(item => {
        const row = document.createElement('tr');
        const labelCell = document.createElement('td');
        labelCell.textContent = item.label;
        const valueCell = document.createElement('td');
        valueCell.textContent = item.value.toString();
        row.appendChild(labelCell);
        row.appendChild(valueCell);
        resultsTable.appendChild(row);
    });
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const responses = {};
    for (const [key, value] of formData.entries()) {
        responses[key] = parseInt(value);
    }
    const resultsData = calculateResults(responses);
    updateResultsTable(resultsData);
    resultsContainer.classList.remove('d-none');
});

// Generate questionnaire items
questionnaire.forEach((item, index) => {
    const div = document.createElement('div');
    div.classList.add('form-group');
    const label = document.createElement('label');
    label.classList.add('font-weight-bold');
    const questionNumber = document.createElement('span');
    questionNumber.classList.add('font-weight-bold');
    questionNumber.textContent = `${index + 1}. `;
    const questionText = document.createElement('span');
    questionText.textContent = item.question;
    label.appendChild(questionNumber);
    label.appendChild(questionText);
    const radioGroup = document.createElement('div');
    radioGroup.classList.add('form-check');
    item.answers.forEach((answer, answerIndex) => {
        const radioDiv = document.createElement('div');
        radioDiv.classList.add('form-check');
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = item.id;
        input.value = answerIndex + 1;
        input.classList.add('form-check-input');
        input.id = `${item.id}_${answerIndex}`;
        const answerLabel = document.createElement('label');
        answerLabel.textContent = answer;
        answerLabel.classList.add('form-check-label');
        answerLabel.htmlFor = input.id;
        radioDiv.appendChild(input);
        radioDiv.appendChild(answerLabel);
        radioGroup.appendChild(radioDiv);
    });
    div.appendChild(label);
    div.appendChild(radioGroup);
    form.appendChild(div);
});
