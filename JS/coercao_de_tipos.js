//Coerção (Converção) de tipos

// 1 -> Coerção explicita (Manual)
const n = 10
console.log(n, typeof n)

const nFormatString = String(n)
console.log(nFormatString, typeof nFormatString)

console.log(Number('12432432'))
console.log(parseFloat('5454877.212'))
console.log(parseInt('293838298.338'))
console.log(Boolean(1))

console.clear()

// 2 -> Coerção Implicita (Automática)

console.log(10 + '1')
console.log(10 - '1')
console.log(10 * '3')
console.log(10 - 'asasa')