let numberBank = [];
let oddNumbers = [];
let evenNumbers = [];

function addNumber(num) {
  numberBank.push(num);
  render();
}

function sortFirstNumber() {
  if (numberBank.lenghth === 0) return;
  const num = numberBank.shift();
  if (num % 2 === 0) {
    evenNumbers.push(num);
  } else {
    oddNumbers.push(num);
  }
  render();
}

function sortAllNumbers() {
  numberBank.forEach((num) => {
    if (num % 2 === 0) {
      evenNumbers.push(num);
    } else {
      oddNumbers.push(num);
    }
  });
  numberBank = [];
  render();
}

function NumberForm() {
  const $form = document.createElement("form");
  $form.innerHTML = `
    <label>
      Add a number to the bank:
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

function SortFirstButton() {
  const $button = document.createElement("button");
  $button.textContent = "Sort 1";
  $button.addEventListener("click", sortFirstNumber);
  return $button;
}

function SortAllButton() {
  const $button = document.createElement("button");
  $button.textContent = "Sort All";
  $button.addEventListener("click", sortAllNumbers);
  return $button;
}
