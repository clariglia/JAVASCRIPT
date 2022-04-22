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

class BankAccountVip extends BankAccount{
  constructor(param){
    super(param)
  }
  deposit(param){
    if(this.calculate >= 1000){
      param += (param * 3 / 100)
      this.calculate += param;
    }
    else{
      this.calculate += param;
    }
  }
}


const bankAccountVip = new BankAccountVip(1000);
bankAccountVip.deposit(500);
bankAccountVip.deposit(1200);
bankAccountVip.withdraw(800);
bankAccountVip.deposit(3500);
bankAccountVip.view();

