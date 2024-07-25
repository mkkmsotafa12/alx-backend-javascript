const calculateNumber = (a, b) => {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new TypeError("Both arguments must be numbers.");
  }

  return Math.round(a) + Math.round(b);
};

module.exports = calculateNumber;
