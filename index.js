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
