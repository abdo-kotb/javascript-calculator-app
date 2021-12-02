import { setTheme, toggleThumb, initTheme } from './themeSwitch.js';
import calculator from './calculator.js';

const inputs = document.querySelectorAll('input[name="theme"]');
const numbersKeys = document.querySelectorAll('[data-number]');
const allClearKey = document.querySelector('[data-allClear]');
const deleteKey = document.querySelector('[data-delete]');
const operationsKeys = document.querySelectorAll('[data-operator]');
const equalKey = document.querySelector('[data-equal]');

initTheme();

inputs.forEach(switcher => {
  switcher.addEventListener('click', e => {
    setTheme(e.target.value);
    toggleThumb(e.target.id);
    e.target.setAttribute('checked', '');
  });
});

numbersKeys.forEach(num =>
  num.addEventListener('click', function () {
    calculator.appendNumbers(this.textContent);
    calculator.display();
  })
);

allClearKey.addEventListener('click', function () {
  calculator.clearAll();
  calculator.display();
});

deleteKey.addEventListener('click', function () {
  calculator.deleteOne();
  calculator.display();
});

operationsKeys.forEach(operator =>
  operator.addEventListener('click', function () {
    calculator.setOperator(operator.textContent);
    calculator.display();
  })
);

equalKey.addEventListener('click', function () {
  calculator.updateDisplay();
});
