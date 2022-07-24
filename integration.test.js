const Statement = require("./displayBankStatement");
const BankAccount = require("./bankAccount");

describe("print", () => {
  it("just prints the header if there are no transactions", () => {
    const account = new BankAccount();
    const statement = new Statement(account.transactionHistory());
    expect(statement.print()).toEqual("date || credit || debit || balance");
  });
  it("just prints the header if there are no transactions", () => {
    const account = new BankAccount();
    const statement = new Statement(account.transactionHistory());
    expect(statement.print()).toEqual("date || credit || debit || balance");
  });
});
