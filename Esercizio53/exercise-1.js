function sum(num1, num2, num3, num4, num5) {
    return num1 + num2 + num3 + num4 + num5;
}
const num = [1, 2, 3, 4, 5]
console.log(sum(...num));