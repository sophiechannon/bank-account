const Statement = require("./displayBankStatement");

describe("print", () => {
  it("just prints the header if there are no transactions", () => {
    const accountDouble = { transactionHistory: () => [] };
    const statement = new Statement(accountDouble.transactionHistory());
    expect(statement.print()).toEqual("date || credit || debit || balance");
  });
  it("prints the header and a line of transactions", () => {
    const date = new Date("2022-07-23");
    const accountDouble = {
      transactionHistory: () => [
        { date: date, credit: null, debit: 1000, balance: 1000 },
      ],
    };
    const statement = new Statement(accountDouble.transactionHistory());
    expect(statement.print()).toEqual(
      "date || credit || debit || balance\n23/07/2022 || || 1000.00 || 1000.00"
    );
  });
  it("prints the header and multiple lines of transactions", () => {
    const date = new Date("2022-07-23");
    const accountDouble = {
      transactionHistory: () => [
        { date: date, credit: null, debit: 1000, balance: 1000 },
        { date: date, credit: 500, debit: null, balance: 500 },
      ],
    };
    const statement = new Statement(accountDouble.transactionHistory());
    expect(statement.print()).toEqual(
      "date || credit || debit || balance\n23/07/2022 || || 1000.00 || 1000.00\n23/07/2022 || 500.00 || || 500.00"
    );
  });
  it("prints correctly when amounts aren't full pounds, but do end in 0", () => {
    const date = new Date("2022-07-23");
    const accountDouble = {
      transactionHistory: () => [
        { date: date, credit: null, debit: 10.5, balance: 10.5 },
        { date: date, credit: 2.5, debit: null, balance: 8 },
      ],
    };
    const statement = new Statement(accountDouble.transactionHistory());
    expect(statement.print()).toEqual(
      "date || credit || debit || balance\n23/07/2022 || || 10.50 || 10.50\n23/07/2022 || 2.50 || || 8.00"
    );
  });
});
