function multiTable(number) {
  return Array.from({length: 10},(_ , i) => `${i + 1} * ${number} = ${number * ++i}`).join('\n')
}