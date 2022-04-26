class BankAccount {
  #amount = 0;

  constructor(initialAmount) {
    this.#amount = initialAmount;
  }

  deposit(amount) {
    try{
      if(amount<0){
        throw new Error('Errore')
      }
      else{
        this.#amount += amount;
      }
    } catch(err){
      console.log(err);
    }
    // throw an exception if amount is negative

  }

  withdraw(amount) {
    try{
      if(amount>0 && this.#amount>amount){
        this.#amount -= amount;
      }
      else{
        throw new Error('Errore');
      }
    }catch(err){
      console.log(err.message);
    }
    // throw an exception if amount is negative or if withdrawal amount is greater than current amount
  }

  view() {
    console.log(this.#amount);
  }
}

const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(10000); // This operation should not be possible, because you cannot withdraw more than the account balance
bankAccount.view();