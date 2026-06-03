const calculator = {
  add(a, b) {
    return a + b;
  },

  subtract(a, b) {
    return a - b;
  },

  multiply(a, b) {
    return a * b;
  },

  divide(a, b) {
    if (b === 0) {
      return "Cannot divide by zero";
    }
    return a / b;
  }
};

console.log(calculator.add(10, 5));       // 15
console.log(calculator.subtract(10, 5));  // 5
console.log(calculator.multiply(10, 5));  // 50
console.log(calculator.divide(10, 5));    // 2