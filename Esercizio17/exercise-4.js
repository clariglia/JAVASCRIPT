function calculate(){
    let total = 0;
    return {
        add: function add(num){
            total += num
            return this;
        },
        multiply: function multiply(num){
            total *= num
            return this;
        },
        sub: function sub(num){
            total -= num
            return this;
        },
        divide: function divide(num){
            total /= num
            return this;
        },
        print: function printResult(){
            console.log(total)
        }
    }

}

console.log(calculate())

const calculator = calculate();
calculator .add(2).add(4).multiply(3).sub(1).sub(3).divide(2).printResult(); 
// Il risultato sarà: 7 