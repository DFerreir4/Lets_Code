//Laços númericos : For
const input = require('readline-sync')
//O problema
// let n1 = Number(input.question("Informe a nota 1: "))
// let n2 = Number(input.question("Informe a nota 2: "))
// let n3 = Number(input.question("Informe a nota 3: "))

// let media = (n1+n2+n3)/3

// Acumulador

// let acumulador = 0

// acumulador = acumulador + 10

// acumulador += 2

// acumulador++

// console.log(acumulador)

// Estrutura For

// for (let i = 0; i <= 4;i++){
//     console.log("repetição",i)
// }

// console.clear()

// for (let i = 12; i >8;i--){
//     console.log("repetição",i)
// }

//RESOLVENDO PROBLEMA INICIAL

let nota
let soma = 0

for(let i = 1; i <=3; i++){
    nota = Number(input.question(`Informe a nota ${i} do aluno : `))

    soma += nota
}

console.log(`A média do aluno é ${soma / 3}.`)