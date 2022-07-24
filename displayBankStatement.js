class DisplayBankStatement {
  constructor(transactions) {
    this.transactions = transactions;
  }

  // for testing purposes - to be deleted
  getTransactions() {
    return this.transactions;
  }

  print() {
    return `date || credit || debit || balance${this.transactionList()}`;
  }

  transactionList() {
    let list = "";
    this.transactions.forEach((transaction, index) => {
      list = list.concat(`\n${this.formatDate(transaction.date)} || `);
      if (transaction.credit != null) {
        list = list.concat(`${transaction.credit}.00 || `);
      } else {
        list = list.concat("|| ");
      }
      if (transaction.debit != null) {
        list = list.concat(`${transaction.debit}.00 || `);
      } else {
        list = list.concat("|| ");
      }
      list = list.concat(`${transaction.balance}.00`);
    });
    return list;
  }

  formatDate(date) {
    return date.toLocaleString().split(",")[0];
  }
}

module.exports = DisplayBankStatement;
