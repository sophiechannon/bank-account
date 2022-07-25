const formatPence = require("./formatPence");

class BankAccount {
  constructor() {
    this.balance = 0;
    this.history = [];
  }

  deposit(amount) {
    this._zeroAmountError(amount, "deposit");
    this.balance += amount;
    this.history.push({
      date: new Date(Date.now()),
      credit: null,
      debit: amount,
      balance: this.balance,
    });
  }

  withdraw(amount) {
    this._overdrawnError(amount)
    this._zeroAmountError(amount, "withdraw");
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

  // private methods

  _zeroAmountError(amount, transactionType) {
    if (amount === 0) {
      throw new Error(
        `Transaction cancelled, you must enter an amount to ${transactionType}`
      );
    }
  }

  _overdrawnError(amount) {
    if (this.balance < amount) {
      throw new Error(
        `Transaction cancelled, your balance is £${formatPence(this.balance)}.`
      );
    }
  }
}

module.exports = BankAccount;
