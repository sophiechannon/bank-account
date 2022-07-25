const formatPence = require('./formatPence')

class DisplayBankStatement {
  constructor(transactions) {
    this.transactions = transactions;
  }

  print() {
    return `date || credit || debit || balance${this._transactionList()}`;
  }

  // private methods

  _transactionList() {
    let list = "";
    this.transactions.forEach((transaction) => {
      list = list
        .concat(`\n${this._formatDate(transaction.date)}`)
        .concat(this._formatMoney(transaction.credit))
        .concat(this._formatMoney(transaction.debit))
        .concat(`${formatPence(transaction.balance)}`);
    });
    return list;
  }

  _formatMoney(amount) {
    if (amount != null) {
      return `${formatPence(amount)} || `;
    } else {
      return "|| ";
    }
  }

  _formatDate(date) {
    return `${date.toLocaleString().split(",")[0]} || `;
  }
}

module.exports = DisplayBankStatement;
