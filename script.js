<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Questionnaire Web App</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="container">
    <h1 class="title">Questionnaire</h1>

    <form id="questionnaire-form">
      <!-- Questionnaire items will be dynamically generated here -->
    </form>

    <button type="submit" form="questionnaire-form" class="submit-button">Submit Questionnaire</button>

    <div id="results-container" class="hidden">
      <h2 class="title">Results</h2>
      <table id="results-table"></table>
    </div>

    <script src="script.js"></script>
  </div>
</body>
</html>
