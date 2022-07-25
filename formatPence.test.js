const formatPence = require("./formatPence")

describe('formatPence', () => {
  it("ensures amount is displayed in a money format with 2 decimal places", () => {
    expect(formatPence(5)).toEqual("5.00")
    expect(formatPence(5.5)).toEqual("5.50")
    expect(formatPence(5.55)).toEqual("5.55")
  })
})