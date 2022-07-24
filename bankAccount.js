class BankAccount {
  constructor() {
    this.balance = 0;
    this.history = [];
  }

  deposit(amount) {
    this.balance += amount;
    this.history.push({
      date: new Date(),
      credit: null,
      debit: amount,
      balance: this.balance,
    });
  }

  withdraw(amount) {
    this.balance -= amount;
    this.history.push({
      date: new Date(),
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
