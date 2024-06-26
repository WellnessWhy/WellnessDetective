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
    // Add more questionnaire items here
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
  