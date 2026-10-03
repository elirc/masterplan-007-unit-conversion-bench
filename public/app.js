import { convertLength } from './core.js';
const result = document.querySelector('#result');
document.querySelector('#conversion').addEventListener('submit', event => {
  event.preventDefault();
  try {
    const value = numberFromInput(document.querySelector('#value'));
    const from = document.querySelector('#from').value;
    const to = document.querySelector('#to').value;
    const converted = convertLength(value, from, to);
    result.classList.remove('error');
    result.textContent = `${value} ${from} = ${converted} ${to}`;
  } catch (error) { showError(error); }
});

function showError(error) {
  result.classList.add('error');
  result.textContent = error.message;
}
function numberFromInput(input) {
  if (input.value.trim() === '') throw new TypeError('Enter a number; blank is not zero.');
  const number = Number(input.value);
  if (!Number.isFinite(number)) throw new TypeError('Enter a finite number.');
  return number;
}
