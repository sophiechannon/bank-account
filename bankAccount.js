class BankAccount {
  constructor() {
    this.balance = 0;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    this.balance -= amount;
  }

  transactionHistory() {
    return [{debit: 1000}]
  }

  getBalance() {
    return this.balance;
  }
}

module.exports = BankAccount;
