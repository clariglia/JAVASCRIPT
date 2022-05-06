function sum(/* num1, num2, num3, num4, num5 */ ...param) {
    /* return num1 + num2 + num3 + num4 + num5; */
    return param.reduce((sum, value) => sum + value)
}
/* const num = [1, 2, 3, 4, 5] */
console.log(sum(1, 2, 3, 4, 5));