function calculate() {
    const input1 = parseFloat(document.getElementById('input1').value);
    const input2 = parseFloat(document.getElementById('input2').value);
    const operation = document.getElementById('operation').value;
    let result;
  
    switch(operation) {
      case 'sum':
        result = input1 + input2;
        break;
      case 'subtract':
        result = input1 - input2;
        break;
      case 'multiply':
        result = input1 * input2;
        break;
      default:
        result = 'Invalid operation';
    }
  
    document.getElementById('result').textContent = 'Result: ' + result;
  }
  