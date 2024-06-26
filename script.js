const questionnaire = [
    {
        id: 'q1',
        question: 'General fatigue or weakness',
        answers: ['Mild or rarely occurring', 'Moderate or regularly occurring', 'Severe or often occurring', 'Not applicable']
    },
    {
        id: 'q2',
        question: 'Difficulty losing weight',
        answers: ['Mild or rarely occurring', 'Moderate or regularly occurring', 'Severe or often occurring', 'Not applicable']
    },
    {
        id: 'q3',
        question: 'Frequent illness/infections',
        answers: ['Mild or rarely occurring', 'Moderate or regularly occurring', 'Severe or often occurring', 'Not applicable']
    },
    {
        id: 'q4',
        question: 'High stress lifestyle',
        answers: ['Mild or rarely occurring', 'Moderate or regularly occurring', 'Severe or often occurring', 'Not applicable']
    },
    {
        id: 'q5',
        question: 'Smoking',
        answers: ['Mild or rarely occurring', 'Moderate or regularly occurring', 'Severe or often occurring', 'Not applicable']
    },
    {
        id: 'q6',
        question: 'Drinking more than 2 cups of coffee/day',
        answers: ['Mild or rarely occurring', 'Moderate or regularly occurring', 'Severe or often occurring', 'Not applicable']
    },
    {
        id: 'q7',
        question: 'Bad breath and/or body odour',
        answers: ['Mild or rarely occurring', 'Moderate or regularly occurring', 'Severe or often occurring', 'Not applicable']
    },
    {
        id: 'q8',
        question: 'Constipation',
        answers: ['Mild or rarely occurring', 'Moderate or regularly occurring', 'Severe or often occurring', 'Not applicable']
    },
    {
        id: 'q9',
        question: 'Bags under eyes',
        answers: ['Mild or rarely occurring', 'Moderate or regularly occurring', 'Severe or often occurring', 'Not applicable']
    },
    {
        id: 'q10',
        question: 'Crave sugars, bread, alcohol',
        answers: ['Mild or rarely occurring', 'Moderate or regularly occurring', 'Severe or often occurring', 'Not applicable']
    },
    {
        id: 'q11',
        question: 'Difficulty digesting certain foods',
        answers: ['Mild or rarely occurring', 'Moderate or regularly occurring', 'Severe or often occurring', 'Not applicable']
    },
    {
        id: 'q12',
        question: 'Have used antibiotics in past 10 years',
        answers: ['Mild or rarely occurring', 'Moderate or regularly occurring', 'Severe or often occurring', 'Not applicable']
    },
    {
        id: 'q13',
        question: 'Allergies',
        answers: ['Mild or rarely occurring', 'Moderate or regularly occurring', 'Severe or often occurring', 'Not applicable']
    },
    {
        id: 'q14',
        question: 'Poor concentration or memory',
        answers: ['Mild or rarely occurring', 'Moderate or regularly occurring', 'Severe or often occurring', 'Not applicable']
    },
    {
        id: 'q15',
        question: 'Belching or burping after meals',
        answers: ['Mild or rarely occurring', 'Moderate or regularly occurring', 'Severe or often occurring', 'Not applicable']
    },
    {
        id: 'q16',
        question: 'Skin/complexion problems',
        answers: ['Mild or rarely occurring', 'Moderate or regularly occurring', 'Severe or often occurring', 'Not applicable']
    },
    {
        id: 'q17',
        question: 'Frequent consumption of red meat',
        answers: ['Mild or rarely occurring', 'Moderate or regularly occurring', 'Severe or often occurring', 'Not applicable']
    },
    {
        id: 'q18',
        question: 'Regular use of dairy products',
        answers: ['Mild or rarely occurring', 'Moderate or regularly occurring', 'Severe or often occurring', 'Not applicable']
    },
    {
        id: 'q19',
        question: 'Heavy alcohol consumption',
        answers: ['Mild or rarely occurring', 'Moderate or regularly occurring', 'Severe or often occurring', 'Not applicable']
    },
    {
        id: 'q20',
        question: 'Exposure to toxins/chemicals',
        answers: ['Mild or rarely occurring', 'Moderate or regularly occurring', 'Severe or often occurring', 'Not applicable']
    },
    {
        id: 'q21',
        question: 'Frequent mood swings',
        answers: ['Mild or rarely occurring', 'Moderate or regularly occurring', 'Severe or often occurring', 'Not applicable']
    },
    {
        id: 'q22',
        question: 'Depressed and/or irritable',
        answers: ['Mild or rarely occurring', 'Moderate or regularly occurring', 'Severe or often occurring', 'Not applicable']
    },
    {
        id: 'q23',
        question: 'Brittle fingernails',
        answers: ['Mild or rarely occurring', 'Moderate or regularly occurring', 'Severe or often occurring', 'Not applicable']
    },
    {
        id: 'q24',
        question: 'Dry, brittle hair, split ends',
        answers: ['Mild or rarely occurring', 'Moderate or regularly occurring', 'Severe or often occurring', 'Not applicable']
    },
    {
        id: 'q25',
        question: 'High fat/high cholesterol diet',
        answers: ['Mild or rarely occurring', 'Moderate or regularly occurring', 'Severe or often occurring', 'Not applicable']
    },
    {
        id: 'q26',
        question: 'Nervousness/anxiety/tension/worry',
        answers: ['Mild or rarely occurring', 'Moderate or regularly occurring', 'Severe or often occurring', 'Not applicable']
    },
    {
        id: 'q27',
        question: 'Insomnia/restless sleep',
        answers: ['Mild or rarely occurring', 'Moderate or regularly occurring', 'Severe or often occurring', 'Not applicable']
    },
    {
        id: 'q28',
        question: 'Low fibre diet',
        answers: ['Mild or rarely occurring', 'Moderate or regularly occurring', 'Severe or often occurring', 'Not applicable']
    },
    {
        id: 'q29',
        question: 'Muscle cramps',
        answers: ['Mild or rarely occurring', 'Moderate or regularly occurring', 'Severe or often occurring', 'Not applicable']
    },
    {
        id: 'q30',
        question: 'Sleepy when sitting up',
        answers: ['Mild or rarely occurring', 'Moderate or regularly occurring', 'Severe or often occurring', 'Not applicable']
    },
    {
        id: 'q31',
        question: 'Female: menstrual cramps',
        answers: ['Mild or rarely occurring', 'Moderate or regularly occurring', 'Severe or often occurring', 'Not applicable']
    },
    {
        id: 'q32',
        question: 'Bronchitis/asthma/pneumonia/emphysema',
        answers: ['Mild or rarely occurring', 'Moderate or regularly occurring', 'Severe or often occurring', 'Not applicable']
    },
    {
        id: 'q33',
        question: 'Cellulite',
        answers: ['Mild or rarely occurring', 'Moderate or regularly occurring', 'Severe or often occurring', 'Not applicable']
    },
    {
        id: 'q34',
        question: 'Cold hands and feet',
        answers: ['Mild or rarely occurring', 'Moderate or regularly occurring', 'Severe or often occurring', 'Not applicable']
    },
    {
        id: 'q35',
        question: 'Varicose veins',
        answers: ['Mild or rarely occurring', 'Moderate or regularly occurring', 'Severe or often occurring', 'Not applicable']
    },
    {
        id: 'q36',
        question: 'Feeling out of control',
        answers: ['Mild or rarely occurring', 'Moderate or regularly occurring', 'Severe or often occurring', 'Not applicable']
    },
    {
        id: 'q37',
        question: 'Food/chemical sensitivities',
        answers: ['Mild or rarely occurring', 'Moderate or regularly occurring', 'Severe or often occurring', 'Not applicable']
    },
    {
        id: 'q38',
        question: 'Frequent yeast/fungus problems',
        answers: ['Mild or rarely occurring', 'Moderate or regularly occurring', 'Severe or often occurring', 'Not applicable']
    },
    {
        id: 'q39',
        question: 'Bones break easily, osteoporosis',
        answers: ['Mild or rarely occurring', 'Moderate or regularly occurring', 'Severe or often occurring', 'Not applicable']
    },
    {
        id: 'q40',
        question: 'Too little exercise',
        answers: ['Mild or rarely occurring', 'Moderate or regularly occurring', 'Severe or often occurring', 'Not applicable']
    }
];

const form = document.getElementById('questionnaire-form');
const resultsContainer = document.getElementById('results-container');
const resultsTable = document.getElementById('results-table').querySelector('tbody');

// Generate questionnaire items
questionnaire.forEach(item => {
    const div = document.createElement('div');
    div.classList.add('form-group');

    const label = document.createElement('label');
    label.textContent = item.question;
    label.classList.add('font-weight-bold');

    const radioGroup = document.createElement('div');
    radioGroup.classList.add('form-check');

    item.answers.forEach((answer, index) => {
        const radioDiv = document.createElement('div');
        radioDiv.classList.add('form-check');

        const input = document.createElement('input');
        input.type = 'radio';
        input.name = item.id;
        input.value = index + 1;
        input.classList.add('form-check-input');
        input.id = `${item.id}_${index}`;

        const label = document.createElement('label');
        label.textContent = answer;
        label.classList.add('form-check-label');
        label.htmlFor = input.id;

        radioDiv.appendChild(input);
        radioDiv.appendChild(label);
        radioGroup.appendChild(radioDiv);
    });

    div.appendChild(label);
    div.appendChild(radioGroup);
    form.appendChild(div);
});

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const responses = {};
    for (const [key, value] of formData.entries()) {
        responses[key] = parseInt(value);
    }

    // Perform calculations and generate the results table
    const resultsData = calculateResults(responses);
    updateResultsTable(resultsData);

    // Show the results container
    resultsContainer.classList.remove('d-none');
});

function calculateResults(responses) {
    // Implement your calculation logic here
    // Return an array of objects with the following structure:
    // { label: 'Result 1', value: 123 }
    return [
        { label: 'Total Score', value: 456 },
        { label: 'Average Score', value: 2.3 },
        // Add more result items here
    ];
}

function updateResultsTable(data) {
    // Clear any existing table rows
    resultsTable.innerHTML = '';

    // Add new table rows
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





