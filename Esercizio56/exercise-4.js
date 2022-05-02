function sum(...array) {
  /* return num1 + num2 + num3; */
  return array.reduce((sum, value) => sum + value)
}

/* const numbers = [1, 2, 3]; */
console.log(sum(1, 2, 3));