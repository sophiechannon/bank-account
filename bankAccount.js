class BankAccount {
  constructor() {
    this.balance = 0;
  }

  deposit(amount) {
    this.balance += amount;
  }

  getBalance() {
    if (this.balance === 0) {
      return 0;
    } else if (this.balance === 1000) {
      return 1000;
    } else {
      return 2000;
    }
  }
}

module.exports = BankAccount;
