const questionnaire = [
    {
        id: 'q1',
        question: 'How often do you exercise?',
        answers: ['Rarely', 'Sometimes', 'Regularly']
    },
    {
        id: 'q2',
        question: 'How would you rate your stress level?',
        answers: ['Low', 'Moderate', 'High']
    },
    {
        id: 'q3',
        question: 'How many hours of sleep do you get on average?',
        answers: ['Less than 5', '5-7', 'More than 7']
    },
    {
        id: 'q4',
        question: 'How often do you eat vegetables?',
        answers: ['Rarely', 'Sometimes', 'Regularly']
    },
    {
        id: 'q5',
        question: 'How often do you drink alcohol?',
        answers: ['Never', 'Occasionally', 'Frequently']
    },
    {
        id: 'q6',
        question: 'Do you smoke?',
        answers: ['Yes', 'No']
    },
    {
        id: 'q7',
        question: 'How would you rate your overall health?',
        answers: ['Poor', 'Average', 'Good']
    },
    {
        id: 'q8',
        question: 'How often do you visit a doctor?',
        answers: ['Rarely', 'Once a year', 'Multiple times a year']
    },
    {
        id: 'q9',
        question: 'Do you have any chronic illnesses?',
        answers: ['Yes', 'No']
    },
    {
        id: 'q10',
        question: 'How often do you feel fatigued?',
        answers: ['Rarely', 'Sometimes', 'Often']
    },
    {
        id: 'q11',
        question: 'How would you rate your diet?',
        answers: ['Poor', 'Average', 'Healthy']
    },
    {
        id: 'q12',
        question: 'How often do you experience headaches?',
        answers: ['Rarely', 'Sometimes', 'Frequently']
    },
    {
        id: 'q13',
        question: 'Do you take any dietary supplements?',
        answers: ['Yes', 'No']
    },
    {
        id: 'q14',
        question: 'How often do you feel stressed at work?',
        answers: ['Rarely', 'Sometimes', 'Often']
    },
    {
        id: 'q15',
        question: 'Do you practice any relaxation techniques?',
        answers: ['Yes', 'No']
    },
    {
        id: 'q16',
        question: 'How would you rate your mental health?',
        answers: ['Poor', 'Average', 'Good']
    },
    {
        id: 'q17',
        question: 'How often do you socialize with friends or family?',
        answers: ['Rarely', 'Sometimes', 'Regularly']
    },
    {
        id: 'q18',
        question: 'Do you engage in any hobbies?',
        answers: ['Yes', 'No']
    },
    {
        id: 'q19',
        question: 'How often do you travel?',
        answers: ['Rarely', 'Occasionally', 'Frequently']
    },
    {
        id: 'q20',
        question: 'Do you have any pets?',
        answers: ['Yes', 'No']
    },
    {
        id: 'q21',
        question: 'How would you rate your financial stability?',
        answers: ['Poor', 'Average', 'Good']
    },
    {
        id: 'q22',
        question: 'Do you have health insurance?',
        answers: ['Yes', 'No']
    },
    {
        id: 'q23',
        question: 'How often do you cook at home?',
        answers: ['Rarely', 'Sometimes', 'Often']
    },
    {
        id: 'q24',
        question: 'How would you rate your work-life balance?',
        answers: ['Poor', 'Average', 'Good']
    },
    {
        id: 'q25',
        question: 'Do you volunteer or engage in community service?',
        answers: ['Yes', 'No']
    },
    {
        id: 'q26',
        question: 'How often do you experience back pain?',
        answers: ['Rarely', 'Sometimes', 'Frequently']
    },
    {
        id: 'q27',
        question: 'Do you meditate?',
        answers: ['Yes', 'No']
    },
    {
        id: 'q28',
        question: 'How often do you read books?',
        answers: ['Rarely', 'Sometimes', 'Often']
    },
    {
        id: 'q29',
        question: 'Do you have a regular sleep schedule?',
        answers: ['Yes', 'No']
    },
    {
        id: 'q30',
        question: 'How often do you feel anxious?',
        answers: ['Rarely', 'Sometimes', 'Often']
    },
    {
        id: 'q31',
        question: 'Do you drink enough water daily?',
        answers: ['Yes', 'No']
    },
    {
        id: 'q32',
        question: 'How often do you get a health check-up?',
        answers: ['Rarely', 'Once a year', 'Multiple times a year']
    },
    {
        id: 'q33',
        question: 'Do you have a balanced diet?',
        answers: ['Yes', 'No']
    },
    {
        id: 'q34',
        question: 'How often do you take breaks at work?',
        answers: ['Rarely', 'Sometimes', 'Often']
    },
    {
        id: 'q35',
        question: 'How would you rate your productivity at work?',
        answers: ['Low', 'Average', 'High']
    },
    {
        id: 'q36',
        question: 'Do you use any fitness apps?',
        answers: ['Yes', 'No']
    },
    {
        id: 'q37',
        question: 'How often do you feel overwhelmed?',
        answers: ['Rarely', 'Sometimes', 'Often']
    },
    {
        id: 'q38',
        question: 'Do you have a positive outlook on life?',
        answers: ['Yes', 'No']
    },
    {
        id: 'q39',
        question: 'How often do you experience indigestion?',
        answers: ['Rarely', 'Sometimes', 'Frequently']
    },
    {
        id: 'q40',
        question: 'How would you rate your overall happiness?',
        answers: ['Poor', 'Average', 'Good']
    }
];

  
  const form = document.getElementById('questionnaire-form');
  const resultsContainer = document.getElementById('results-container');
  const resultsTable = document.getElementById('results-table');
  
  // Generate questionnaire items
  questionnaire.forEach(item => {
    const div = document.createElement('div');
    div.classList.add('questionnaire-item');
  
    const label = document.createElement('label');
    label.textContent = item.question;
  
    const radioGroup = document.createElement('div');
    radioGroup.classList.add('radio-group');
  
    item.answers.forEach((answer, index) => {
      const radio = document.createElement('label');
  
      const input = document.createElement('input');
      input.type = 'radio';
      input.name = item.id;
      input.value = index + 1;
  
      const span = document.createElement('span');
      span.textContent = answer;
  
      radio.appendChild(input);
      radio.appendChild(span);
      radioGroup.appendChild(radio);
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
    resultsContainer.classList.remove('hidden');
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
  