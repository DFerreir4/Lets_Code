//Arrays

//Como criar um array?

const nome = 'Diego'
const idade = 35
const altura = 1.81
const estudando = true

let arr = ['Diego',35,1.81,true]

console.log(arr)

//Como acessar elementos do array?

console.log('Primeiro elemento: ', arr[0])
console.log('Segundo elemento: ', arr[1])
console.log('Terceiro elemento: ', arr[2])
console.log('Quarto elemento: ', arr[3])

//Como obter o tamanho do array?

console.log('Tamanho ou quantidade do array: ',arr.length)

//Percorrendo arrays

// 1
//estático
for (let i = 0; i < 4; i++){
    console.log(arr[i])
}
//dinâmico
for (let i = 0; i < arr.length; i++){
    console.log(arr[i])
}

//2 - for of - percorrendo cada elemento do array - valores

for (let elemento of arr){
    console.log(elemento)
}

//3 - for in - percorrendo os indices - posições

for (let indice in arr){
    console.log(indice,arr[indice])
}