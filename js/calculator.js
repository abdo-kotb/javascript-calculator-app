class Calculator {
  _outputScreen = document.querySelector('.screen');
  _operator = '';
  _output = '';

  constructor() {}

  clearAll() {
    this._output = '';
    this._operator = '';
  }

  deleteOne() {
    this._output = this._output.slice(0, -1);
  }

  appendNumbers(number) {
    if (number.includes('.') && this._output.includes('.')) return;

    if (number.includes('0') && this._output === '0') return;

    this._output === '0'
      ? (this._output = number.trim())
      : (this._output += number.trim());
  }

  setOperator(operator) {
    if (!this._output && !operator.includes('-')) return;

    this._compute();

    this._operator = operator.trim();

    this._output
      ? (this._output += ` ${operator.trim()} `)
      : (this._output += operator.trim());

    console.log(this._output);
  }

  _compute() {
    const [prevOperand, curOperand] = this._output.split(this._operator);

    if (prevOperand?.trim() === '' || curOperand?.trim() === '') return;
    console.log(prevOperand, curOperand, this._operator.trim());

    switch (this._operator.trim()) {
      case '+':
        this._output = +prevOperand + +curOperand;
        break;
      case '-':
        this._output = +prevOperand - +curOperand;
        break;
      case 'x':
        this._output = +prevOperand * +curOperand;
        break;
      case '/':
        this._output = +prevOperand / +curOperand;
        break;
      default:
        return;
    }
  }

  display() {
    this._outputScreen.textContent = this._output;
  }

  updateDisplay(reset = true) {
    this._compute();

    this.display();

    if (isFinite(this._output) || reset) this._output = '';
  }
}

export default new Calculator();
