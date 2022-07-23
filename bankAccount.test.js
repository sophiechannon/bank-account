const BankAccount = require("./bankAccount");

describe("printStatement", () => {
  it("initially prints an empty balance", () => {
    const account = new BankAccount();
    expect(account.getBalance()).toEqual(0);
  });
  it("displays update balance after a single deposit", () => {
    const account = new BankAccount();
    account.deposit(1000);
    expect(account.getBalance()).toEqual(1000);
  });
  it("displays update balance after two deposits", () => {
    const account = new BankAccount();
    account.deposit(1000);
    account.deposit(1000);
    expect(account.getBalance()).toEqual(2000);
  });
});
