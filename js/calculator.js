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
    console.log(`${this._output}`.trim());
    this._output = this._output.trim().slice(0, -1);
  }

  appendNumbers(number) {
    if (number.includes('.') && this._output.includes('.')) return;

    if (number.includes('0') && this._output === '0') return;

    if (this._output === '0' && !number.includes('.'))
      this._output = number.trim();
    else if (number.includes('.') && !this._output) this._output = '0.';
    else this._output += number.trim();
  }

  setOperator(operator) {
    if (!this._output && !operator.includes('-')) return;

    this._compute();

    if (!this._compute() && this._operator)
      this._output = this._output.replace(this._operator, '');

    this._operator = operator.trim();

    this._output
      ? (this._output += ` ${operator.trim()} `)
      : (this._output += operator.trim());
  }

  _compute() {
    const [prevOperand, curOperand] = this._output.split(this._operator);

    const prev = parseFloat(prevOperand);
    const cur = parseFloat(curOperand);
    console.log(cur, prev, this._operator.trim());

    if (isNaN(cur) || isNaN(prev)) return false;

    switch (this._operator.trim()) {
      case '+':
        this._output = `${prev + cur}`;
        break;
      case '-':
        this._output = `${prev - cur}`;
        break;
      case 'x':
        this._output = `${prev * cur}`;
        break;
      case '/':
        if (cur === 0) return;
        else this._output = `${prev / cur}`;
        break;
      default:
        return;
    }
  }

  display() {
    const outputNumber = this._output === '' ? '' : +this._output;
    // this._output = this._output.slice(0, 10);
    this._outputScreen.textContent = this._output;
    // outputNumber.toLocaleString('en', {
    //   maximumFractionDigits: 4,
    // });
  }

  updateDisplay() {
    this._compute();

    this.display();

    if (isFinite(this._output)) this._output = '';
  }
}

export default new Calculator();
