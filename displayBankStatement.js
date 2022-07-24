class DisplayBankStatement {
  constructor (transactions) {
    this.transactions = transactions;
  }
  print() {
    return 'date || credit || debit || balance'
  }

}

module.exports = DisplayBankStatement;