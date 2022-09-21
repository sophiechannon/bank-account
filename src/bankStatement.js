class BankStatement {
  constructor(transactions) {
    this.transactions = transactions;
  }

  print() {
    return `date || credit || debit || balance${this.#transactionList()}`;
  }

  // private methods

  #transactionList() {
    let list = "";
    this.transactions.forEach((transaction) => {
      list = list
        .concat(`\n${this.#formatDate(transaction.date)}`)
        .concat(this.#formatMoney(transaction.credit))
        .concat(this.#formatMoney(transaction.debit))
        .concat(`${transaction.balance.toFixed(2)}`);
    });
    return list;
  }

  #formatMoney(amount) {
    if (amount) {
      return `${amount.toFixed(2)} || `;
    } else {
      return "|| ";
    }
  }

  #formatDate(date) {
    return `${date.toLocaleString().split(",")[0]} || `;
  }
}

module.exports = BankStatement;