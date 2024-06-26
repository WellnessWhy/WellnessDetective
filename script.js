document.addEventListener('DOMContentLoaded', () => {
    fetch('data.json')
      .then(response => response.json())
      .then(data => {
        const { questionnaire, measureNames, weights } = data;
  
        const form = document.getElementById('questionnaire-form');
        const resultsContainer = document.getElementById('results-container');
        const resultsTable = document.querySelector('#results-table tbody');
  
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
  
        form.addEventListener('submit', (event) => {
          event.preventDefault();
          const formData = new FormData(form);
          const responses = {};
          for (const [key, value] of formData.entries()) {
            responses[key] = parseInt(value);
          }
          const resultsData = calculateResults(responses, weights, measureNames);
          updateResultsTable(resultsData);
          resultsContainer.classList.remove('d-none');
        });
  
        function calculateResults(responses, weights, measureNames) {
          return weights.map((weightsArray, index) => ({
            label: measureNames[index],
            value: calculateMeasure(responses, weightsArray)
          }));
        }
  
        function calculateMeasure(responses, weights) {
          return weights.reduce((sum, weight, index) => sum + (responses[`q${index + 1}`] || 0) * weight, 0);
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
      });
  });
  