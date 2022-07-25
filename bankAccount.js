class BankAccount {
  constructor() {
    this.balance = 0;
    this.history = [];
  }

  deposit(amount) {
    this.balance += amount;
    this.history.push({
      date: new Date(Date.now()),
      credit: null,
      debit: amount,
      balance: this.balance,
    });
  }

  withdraw(amount) {
    if (this.balance < amount) {
      throw new Error("Transaction cancelled, your balance is £10.");
    }
    this.balance -= amount;
    this.history.push({
      date: new Date(Date.now()),
      credit: amount,
      debit: null,
      balance: this.balance,
    });
  }

  transactionHistory() {
    return this.history;
  }
}

module.exports = BankAccount;
