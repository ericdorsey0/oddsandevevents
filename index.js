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

function NumberCount() {
  const $p = document.createElement("h1");
  $p.textContent = "Bank";
  return $p;
}

function NumberBank() {
  const $ul = document.createElement("ul");
  numberBank.forEach((num) => {
    const $li = document.createElement("li");
    $li.textContent = num;
    $ul.appendChild($li);
  });
  return $ul;
}

function OddNumbers() {
  const $section = document.createElement("section");
  $section.innerHTML = "<h1>Odd Numbers</h1>";
  const $ul = document.createElement("ul");
  oddNumbers.forEach((num) => {
    const $li = document.createElement("li");
    $li.textContent = num;
    $ul.appendChild($LI);
  });
}
