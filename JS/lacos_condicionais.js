//Laços condicionais

const input = require('readline-sync')

const random = 5

let n = Number(input.question('Qual numero você escolhe?'))

while(n !== random){
    console.log("Você errou o número. Tente novamente...")

    n = Number(input.question('Qual numero você escolhe?'))

}

console.log("Você acertou!!")





