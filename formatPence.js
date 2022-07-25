const formatPence = (amount) => {
  if (Number.isInteger(amount)) {
    return `${amount}.00`;
  } else if (amount.toString().split(".")[1].length === 1) {
    return `${amount}0`;
  } else {
    return `${amount.toFixed(2)}`;
  }
};

module.exports = formatPence;
