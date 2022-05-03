class BankAccount {
  #amount = 0;

  constructor(initialAmount) {
    this.#amount = initialAmount;
  }

  deposit(amount) {
    try{
      if (amount < 0) {
        throw new Error('The amount provided cannot be negative'); // Use custom Error class
      }
      else{
        this.#amount += amount;
      }
    }catch(err){
      console.log(err.message)
    }

  }

  withdraw(amount) {
    try{
      if (amount < 0) {
        throw new Error('The amount provided cannot be negative'); // Use custom Error class
      }
  
      else if (this.#amount < amount) {
        throw new Error('You cannot withdraw more than account balance'); // Use custom Error class
      }
      else{ 
        this.#amount -= amount;
      }
    }catch(err){
      console.log(err.message)
    }

  }

  view() {
    console.log(this.#amount);
  }
}
class NegativeAmountError extends Error {
  constructor(message) {
    super(message);
    this.message = err.message;
  }
}
class WithdrawNotPermittedError extends Error {
  constructor(message) {
    super(message);
    this.message = err.message;
  }
}

try {
  const bankAccount = new BankAccount(1000);
  bankAccount.deposit(500);
  bankAccount.deposit(200);
  bankAccount.withdraw(10000);
  bankAccount.view();
} catch (e) {
  console.log('Something went wrong during bank account operations');
}