const Statement = require("./displayBankStatement");
const BankAccount = require("./bankAccount");

describe("print", () => {

  beforeAll(() => {
    jest.spyOn(Date, 'now').mockImplementation(() => new Date('2022-07-23'));
  });
  
  afterAll(() => {
    Date.now.mockRestore();
  });
  
  it("just prints the header if there are no transactions", () => {
    const account = new BankAccount();
    const statement = new Statement(account.transactionHistory());
    expect(statement.print()).toEqual("date || credit || debit || balance");
  });
  it("prints out a single transaction correctly, whole pounds", () => {
    const account = new BankAccount();
    account.deposit(1000);
    const statement = new Statement(account.transactionHistory());
    expect(statement.print()).toEqual(
      "date || credit || debit || balance\n23/07/2022 || || 1000.00 || 1000.00"
    );
  });
});
