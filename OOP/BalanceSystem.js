class BankAccount {
  #balance = 0;

  constructor(owner) {
    this.owner = owner;
  }

  deposit(amount) {
    if (amount < 0) {
      throw new Error("Amount should be positive");
    }

    this.#balance += amount;
  }

  withdrawl(amount) {
    if (this.#balance < amount) {
      throw new Error("Insufficient Balance");
    }

    this.#balance -= amount;
  }

  getDetails() {
    const details = {};
    details.balance = this.#balance;
    details.owner = this.owner;
    return details;
  }
}

const bank = new BankAccount("Arpan Ghosh");
bank.deposit(500);
console.log(bank.getDetails());
bank.withdrawl(300);
console.log(bank.getDetails());
