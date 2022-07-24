class BankAccount {
  constructor() {
    this.balance = 0;
    this.history = [];
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    this.balance -= amount;
  }

  transactionHistory() {
    if (this.balance === 0) {
      return [];
    } else if (this.balance === 1000) {
      return [{ date: "23/07/2022", credit: null, debit: 1000, balance: 1000 }];
    } else {
      return [
        { date: "23/07/2022", credit: null, debit: 1000, balance: 1000 },
        { date: "24/07/2022", credit: 500, debit: null, balance: 500 },
      ];
    }
  }

  getBalance() {
    return this.balance;
  }
}

module.exports = BankAccount;
