Bank account
============

| inputs | outputs |
|--------|---------|
| nothing | Just the header |
| deposit(1000), on 01/01/2022 | `Header > 01/01/2022 || || 1000.00 || 1000.00` |
| deposit(1000), on 01/01/2022 > deposit(1000), on 01/01/2022 | `Header > 01/01/2022 || || 1000.00 || 1000.00 > 01/01/2022 || || 1000.00 || 2000.00` |
| deposit(1000), on 01/01/2022 > withdraw(5000), on 01/01/2022 | `Header > 01/01/2022 || || 1000.00 || 1000.00 > 01/01/2022 || 500.00 || || 500.00` |


Edge cases:
- amounts deposited / withdrawn do not end in .00