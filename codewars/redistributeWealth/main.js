function redistributeWealth(wealth, average = wealth.reduce((acc,n) => acc + n ) / wealth.length) {
  wealth.forEach((citizen, i) => wealth[i] = average)
}