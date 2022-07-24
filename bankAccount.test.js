const BankAccount = require("./bankAccount");

describe("transactionHisotory", () => {
  it("Has an empty history initially", () => {
    const account = new BankAccount();
    expect(account.transactionHistory()).toEqual([]);
  });
  it("Keeps a log of deposits - one transaction", () => {
    const account = new BankAccount();
    date = new Date();
    account.deposit(1000);
    expect(account.transactionHistory()).toEqual([
      { date: date, credit: null, debit: 1000, balance: 1000 },
    ]);
  });
  it("Keeps a log of deposits - two transactions", () => {
    const account = new BankAccount();
    const date = new Date();
    account.deposit(1000);
    account.withdraw(500);
    expect(account.transactionHistory()).toEqual([
      { date: date, credit: null, debit: 1000, balance: 1000 },
      { date: date, credit: 500, debit: null, balance: 500 },
    ]);
  });
  it("Works for amounts that are not whole pounts", () => {
    const account = new BankAccount();
    const date = new Date();
    account.deposit(10.50);
    account.withdraw(2.62);
    expect(account.transactionHistory()).toEqual([
      { date: date, credit: null, debit: 10.5, balance: 10.5 },
      { date: date, credit: 2.62, debit: null, balance: 7.88 },
    ]);
  });
});
