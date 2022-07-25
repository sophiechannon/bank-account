const Statement = require("./displayBankStatement");
const BankAccount = require("./bankAccount");

describe("print", () => {
  beforeAll(() => {
    jest.spyOn(Date, "now").mockImplementation(() => new Date("2022-07-23"));
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

  it("prints out multiple transaction correctly, mixed transactions", () => {
    const account = new BankAccount();
    account.deposit(1000);
    account.deposit(56.7);
    account.deposit(23.65);
    account.withdraw(12.45);
    account.withdraw(579.43);
    account.deposit(22);

    const statement = new Statement(account.transactionHistory());
    expect(statement.print()).toEqual(
      "date || credit || debit || balance\n23/07/2022 || || 1000.00 || 1000.00\n23/07/2022 || || 56.70 || 1056.70\n23/07/2022 || || 23.65 || 1080.35\n23/07/2022 || 12.45 || || 1067.90\n23/07/2022 || 579.43 || || 488.47\n23/07/2022 || || 22.00 || 510.47"
    );
  });

  it("throws an error if account goes overdrawn and prevents transaction", () => {
    const account = new BankAccount();
    account.deposit(1000);
    expect(() => {
      account.withdraw(2000);
    }).toThrow("Transaction cancelled, your balance is £1000.")
  });
});
