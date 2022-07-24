const Statement = require('./displayBankStatement');

describe("print", () => {
  it("just prints the header if there are no transactions", () => {
    const accountDouble = { transactionHistory: () => [] }
    const statement = new Statement(accountDouble.transactionHistory())
    expect(statement.print()).toEqual('date || credit || debit || balance');
  });
});