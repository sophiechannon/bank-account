const BankAccount = require('./bankAccount');

describe('printStatement', () => {
  it('initially prints an empty statement', () => {
    const account = new BankAccount();
    expect(account.printStatement()).toEqual("date || credit || debit || balance");
  });
})