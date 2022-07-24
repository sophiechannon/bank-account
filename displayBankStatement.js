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
    this.transactions.forEach((transaction, index) => {
      list = list
        .concat(`\n${this._formatDate(transaction.date)}`)
        .concat(this._formatMoney(transaction.credit))
        .concat(this._formatMoney(transaction.debit))
        .concat(`${transaction.balance}.00`);
    });
    return list;
  }

  _formatMoney(amount) {
    if (amount != null) {
      return `${amount}.00 || `;
    } else {
      return "|| ";
    }
  }

  _formatDate(date) {
    return `${date.toLocaleString().split(",")[0]} || `;
  }
}

module.exports = DisplayBankStatement;
