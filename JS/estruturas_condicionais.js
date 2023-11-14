const idade = 20

if (idade >= 18) {
    console.log("Você é [maior] de idade!")
} else {
    console.log("Você é [menor] de idade!")
}

// se media >= 7, aprovado
// se media < 7 && media >= 5, recuperaçao
// se media < 5 , reprovado

const media = 4

if (media >= 7) {
    console.log("Aprovado!")
} else if(media >= 5 && media < 7){
    console.log("recuperação")
} else if(media < 5){
    console.log("Reprovado!")
}