const formatPence = require('./formatPence')

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
      throw new Error(`Transaction cancelled, your balance is £${formatPence(this.balance)}.`);
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

  // this is a duplicate of method on printer class. Needs to be DRY
  // _formatPence(amount) {
  //   if (Number.isInteger(amount)) {
  //     return `${amount}.00`;
  //   } else if (amount.toString().split(".")[1].length === 1) {
  //     return `${amount}0`;
  //   } else {
  //     return `${amount.toFixed(2)}`;
  //   }
  // }
}

module.exports = BankAccount;
