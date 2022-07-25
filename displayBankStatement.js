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
        .concat(`${this._formatPence(transaction.balance)}`);
    });
    return list;
  }

  _formatMoney(amount) {
    if (amount != null) {
      return `${this._formatPence(amount)} || `;
    } else {
      return "|| ";
    }
  }

  _formatDate(date) {
    return `${date.toLocaleString().split(",")[0]} || `;
  }

  _formatPence(amount) {
    if (Number.isInteger(amount)) {
      return `${amount}.00`;
    } else if (amount.toString().split(".")[1].length === 1) {
      return `${amount}0`;
    } else {
      return `${amount.toFixed(2)}`;
    }
  }
}

module.exports = DisplayBankStatement;
