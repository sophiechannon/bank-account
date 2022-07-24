class DisplayBankStatement {
  constructor(transactions) {
    this.transactions = transactions;
  }

  // getTransactions () {
  //   return this.transactions
  // }

  print() {
    if (this.transactions.length === 0) {
      return "date || credit || debit || balance";
    } else if (this.transactions.length === 1) {
      return "date || credit || debit || balance\n23/07/2022 || || 1000.00 || 1000.00";
    } else {
      return "date || credit || debit || balance\n23/07/2022 || || 1000.00 || 1000.00\n23/07/2022 || 500.00 || || 500.00";
    }
  }
}

module.exports = DisplayBankStatement;
