function calculate(){
    let total = 0;
    return {
        add(num){
            total += num
            return this;
        },
        multiply(num){
            total *= num
            return this;
        },
        sub(num){
            total -= num
            return this;
        },
        divide(num){
            total /= num
            return this;
        },
        printResult(){
            console.log(total)
        }
    }

}

/* console.log(calculate()) */

const calculator = calculate();
calculator .add(2).add(4).multiply(3).sub(1).sub(3).divide(2).printResult(); 
// Il risultato sarà: 7 