class BankAccount {
  #amount = 0;

  constructor(initialAmount) {
    this.#amount = initialAmount;
  }

  deposit(amount) {
    this.#amount += amount;
  }

  withdraw(amount) {
    this.#amount -= amount;
  }

  view() {
    console.log(this.#amount);
  }
  get calculate(){
    return this.#amount;
  }
  set calculate(param){
    return this.#amount = param;
  }
}

class BankAccount extends bankAccountVip{
  constructor(result){
    this.result = result;
  }
  static calcolo(result){
    if(result instanceof BankAccountVip){
      
    }
  }
}

const bankAccountVip = new BankAccountVip(1000);
bankAccountVip.deposit(500);
bankAccountVip.deposit(1200);
bankAccountVip.withdraw(800);
bankAccountVip.deposit(3500);
bankAccountVip.view();