//Objetos

//Como criar um objeto no JavaScript?

let pessoa = {
    nome: 'Diego',
    idade: 35
}

console.log(pessoa)
console.log(pessoa.nome)
console.log(pessoa['nome'])//forma alternativa

//como que faço para adicionar um elemento nesse objeto?

pessoa.altura = 1.81
console.log(pessoa)

//Como remover um chave?

delete pessoa.altura
console.log(pessoa)

//como percorrer?

for(let chave in pessoa){
    console.log(chave)
}