// Function to add a random option to each select element
function addRandomOption() {
  const selects = document.querySelectorAll('select');
  selects.forEach(select => {
    const randomOption = document.createElement('option');
    randomOption.value = 'Random';
    randomOption.text = 'Random';
    randomOption.selected = true; // Make the random option preselected
    select.insertBefore(randomOption, select.firstChild);
  });
}

// Call the function to add random options
addRandomOption();

// Update the generate ideology function to handle random selections
document.getElementById('generate-ideology-btn').addEventListener('click', function() {
  var ideologyName = document.getElementById('ideology-name').value.trim();
  const governmentSelect = document.getElementById('government');
  const economySelect = document.getElementById('economy');
  const societySelect = document.getElementById('society');
  const environmentSelect = document.getElementById('environment');
  const cultureSelect = document.getElementById('culture');

  // Function to get a random option from a select element
  function getRandomOption(select) {
    const options = select.options;
    const randomIndex = Math.floor(Math.random() * (options.length - 1)) + 1; // Exclude the random option
    return options[randomIndex].value;
  }

  // Check if any of the selects have the random option selected
  const government = governmentSelect.value === 'Random' ? getRandomOption(governmentSelect) : governmentSelect.value;
  const economy = economySelect.value === 'Random' ? getRandomOption(economySelect) : economySelect.value;
  const society = societySelect.value === 'Random' ? getRandomOption(societySelect) : societySelect.value;
  const environment = environmentSelect.value === 'Random' ? getRandomOption(environmentSelect) : environmentSelect.value;
  const culture = cultureSelect.value === 'Random' ? getRandomOption(cultureSelect) : cultureSelect.value;

  // If no name is provided, default to "The created ideology"
  if (ideologyName === "") {
    ideologyName = "The created ideology";
  }

  // Create the result text
  const resultText = `${ideologyName} supports ${government} as its governance model, adopts ${economy}, is characterized by ${society}, and promotes ${culture}. Environmental policies are based on ${environment}.`;

  // Display the result
  document.getElementById('result-text').innerText = resultText;
});