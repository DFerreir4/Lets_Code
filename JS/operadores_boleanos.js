// Operadores Boleanos

const n = 10
console.log(n == 10)
console.log(n > 20)

console.log(n == 10)
console.log(10 == '10')
console.log(10 === '10')

console.log(10 != '10')
console.log(10 !== '10')

//Conjuções lógica
//And => &&
let idade = 17
let tenhoCNH = true

const possoDirigir = idade >= 18 && tenhoCNH === true
console.log("Posso Dirigir? ",possoDirigir)

//Or => ||

idade = 40

const votoFacultativo = idade < 18 || idade >= 70

//Not => !

const estouGostandoDoCurso = false
console.log(!estouGostandoDoCurso)