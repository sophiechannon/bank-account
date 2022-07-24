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
  it("displays update balance after deposit & withdrawal", () => {
    const account = new BankAccount();
    account.deposit(1000);
    account.withdraw(500);
    expect(account.getBalance()).toEqual(500);
  });
  it("Has an empty history initially", () => {
    const account = new BankAccount();
    expect(account.transactionHistory()).toEqual([]);
  });
  it("Keeps a log of deposits - one transaction", () => {
    const account = new BankAccount();
    date = new Date("2022-07-23");
    account.deposit(1000);
    expect(account.transactionHistory()).toEqual([
      { date: "23/07/2022", credit: null, debit: 1000, balance: 1000 },
    ]);
  });
  it("Keeps a log of deposits - two transaction", () => {
    const account = new BankAccount();
    dateOne = new Date("2022-07-23");
    dateTwo = new Date("2022-07-24");
    account.deposit(1000);
    account.withdraw(500);
    expect(account.transactionHistory()).toEqual([
      { date: "23/07/2022", credit: null, debit: 1000, balance: 1000 },
      { date: "24/07/2022", credit: 500, debit: null, balance: 500 }
    ]);
  });
});
