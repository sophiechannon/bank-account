Bank account
============

## Requirements
- You should be able to interact with your code via a REPL like IRB or Node. (You don't need to implement a command line interface that takes input from STDIN.)
- Deposits, withdrawal.
- Account statement (date, amount, balance) printing.
- Data can be kept in memory (it doesn't need to be stored to a database or anything).


## Acceptance criteria
- Given a client makes a deposit of 1000 on 10-01-2023
- And a deposit of 2000 on 13-01-2023
- And a withdrawal of 500 on 14-01-2023
- When she prints her bank statement, then she would see:

````console
date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00
````


## How to use this program

Linting (ESList) and tests (Jest) have both been configured to run through NPM.

````console
npm use node
npm init -y
npm install
npm run tests
````

The program runs in node, for example:
````node
node
const BankAccount = require('./bankAccount);
const displayBankStatement = require('./displayBankStatement);
const account = new BankAccount();
const statement = new displayBankStatement(BankAccount);
account.withdraw(1000);
account.desposit(500);
statement.print();
````


## Planning

![CRC cards](./documents/CRC%20cards%20-%20bank%20account%20tech%20test.png?raw=true "Model mapping")

I decided to work with two classes to handle this problem. A BankAccount class that handles the account management from a known balance (withdrawing and depositing), and a separate class to handle the formatting when printing a bank statement (displayBankStatement). I did consider a third class to handle the transactions separately from the bank account, but felt that it made more sense to stay within the domain of the bank account as a basic function of it. I passed the BankAccount class to the displayBankStatement class, because there could be many accounts, but they would all need printing the same way.

## Edge cases
I decided not to test for some eventualities, such as the amount to be withdrawn / deposited being a string vs an integer. This is becasue if I implemented a front end or command line interface for this project, I would use a function to convert the incoming string to an integer/float. 

## Questions to employer

- What happens if the client goes overdrawn? Will the transaction be rejected, or will they be allowed to go overdrawn?

I decided to go ahead an implement a check that returns an error and cancels the transaction if the account will be overdrawn

- Does the client have an overdraft?

I would implement this by running a check that the withdrawral amount was not greater than the positive amount in the account minus the overdraft amount. If it was, the transaction would not be saved to the log and the client would receive a message telling them that the transaction was cancelled. I would also set up a notification to inform the customer that their account had entered the overdraft.


