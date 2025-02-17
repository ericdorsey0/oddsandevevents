// === State ===
let numberBank = []; // Stores numbers that are added
let oddNumbers = []; // Stores odd numbers
let evenNumbers = []; // Stores even numbers

/**
 * Adds a number to the number bank.
 * @param {number} num - The number to add
 */
function addNumber(num) {
  numberBank.push(num);
  render(); // Re-render the UI to reflect the state change
}

/**
 * Sorts the first number in the bank into either odd or even.
 */
function sortFirstNumber() {
  if (numberBank.length === 0) return; // No numbers to sort
  const num = numberBank.shift(); // Remove the first number from the bank
  if (num % 2 === 0) {
    evenNumbers.push(num);
  } else {
    oddNumbers.push(num);
  }
  render(); // Re-render the UI to reflect the state change
}

/**
 * Sorts all numbers in the bank into odd or even categories.
 */
function sortAllNumbers() {
  numberBank.forEach((num) => {
    if (num % 2 === 0) {
      evenNumbers.push(num);
    } else {
      oddNumbers.push(num);
    }
  });
  numberBank = []; // Clear the number bank after sorting
  render(); // Re-render the UI to reflect the state change
}

// === Components ===

/** Form for adding a number to the number bank */
function NumberForm() {
  const $form = document.createElement("form");
  $form.innerHTML = `
    <label>
      Enter a number:
      <input type="number" name="number" required />
    </label>
    <button type="submit">Add Number</button>
  `;
  $form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData($form);
    const number = parseInt(data.get("number"));
    if (!isNaN(number)) {
      addNumber(number);
    }
  });
  return $form;
}

/** Button to sort the first number in the bank */
function SortFirstButton() {
  const $button = document.createElement("button");
  $button.textContent = "Sort 1";
  $button.addEventListener("click", sortFirstNumber);
  return $button;
}

/** Button to sort all numbers in the bank */
function SortAllButton() {
  const $button = document.createElement("button");
  $button.textContent = "Sort All";
  $button.addEventListener("click", sortAllNumbers);
  return $button;
}

/** Displays the count of odd and even numbers */
function NumberCount() {
  const $p = document.createElement("h1");
  $p.textContent = `BANK`;
  return $p;
}

/** Displays the list of numbers in the number bank */
function NumberBank() {
  const $ul = document.createElement("ul");
  numberBank.forEach((num) => {
    const $li = document.createElement("li");
    $li.textContent = num;
    $ul.appendChild($li);
  });
  return $ul;
}

/** Displays a list of odd numbers */
function OddNumbers() {
  const $section = document.createElement("section");
  $section.innerHTML = "<h3>Odd Numbers</h3>";
  const $ul = document.createElement("ul");
  oddNumbers.forEach((num) => {
    const $li = document.createElement("li");
    $li.textContent = num;
    $ul.appendChild($li);
  });
  $section.appendChild($ul);
  return $section;
}

/** Displays a list of even numbers */
function EvenNumbers() {
  const $section = document.createElement("section");
  $section.innerHTML = "<h3>Even Numbers</h3>";
  const $ul = document.createElement("ul");
  evenNumbers.forEach((num) => {
    const $li = document.createElement("li");
    $li.textContent = num;
    $ul.appendChild($li);
  });
  $section.appendChild($ul);
  return $section;
}

// === Render ===

function render() {
  const $app = document.querySelector("#app");
  $app.innerHTML = `
    <h1>Number Bank</h1>
  `;

  // Render components
  $app.appendChild(NumberForm()); // Add form to input numbers
  $app.appendChild(NumberCount()); // Display odd and even numbers count
  $app.appendChild(NumberBank()); // Display numbers in the bank
  $app.appendChild(SortFirstButton()); // Button to sort the first number
  $app.appendChild(SortAllButton()); // Button to sort all numbers
  $app.appendChild(OddNumbers()); // Display odd numbers
  $app.appendChild(EvenNumbers()); // Display even numbers
}

// Initial render
render();
