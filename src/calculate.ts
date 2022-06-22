function calculate(calculation: string[], currNum: string): string {
  let temp: number = parseFloat(calculation[0]);
  for (let i = 0; i < calculation.length - 2; ) {
    const firstNum: number = temp;
    const operator = calculation[i + 1];
    const secondNum: number = parseFloat(calculation[i + 2]);

    switch (operator) {
      case '+':
        temp = firstNum + secondNum;
        break;
      case '-':
        temp = firstNum - secondNum;
        break;
      case '/':
        temp = firstNum / secondNum;
        break;
      case 'x':
        temp = firstNum * secondNum;
        break;
    }
    i += 2;
  }
  return temp.toString();
}

export { calculate };
