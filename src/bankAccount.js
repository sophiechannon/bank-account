class BankAccount {
  constructor() {
    this.balance = 0;
    this.history = [];
  }

  deposit(amount) {
    this.#zeroAmountError(amount, "deposit");
    this.balance += amount;
    this.history.push({
      date: new Date(Date.now()),
      credit: null,
      debit: amount,
      balance: this.balance,
    });
  }

  withdraw(amount) {
    this.#overdrawnError(amount)
    this.#zeroAmountError(amount, "withdraw");
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

  #zeroAmountError(amount, transactionType) {
    if (amount === 0) {
      throw new Error(
        `Transaction cancelled, you must enter an amount to ${transactionType}`
      );
    }
  }

  #overdrawnError(amount) {
    if (this.balance < amount) {
      throw new Error(
        `Transaction cancelled, your balance is £${this.balance.toFixed(2)}.`
      );
    }
  }
}

module.exports = BankAccount;
