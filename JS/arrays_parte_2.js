//ARRAYS parte 2

const arr1 = [30,12,45,34,29]
const arr2 = []
//fateamento: slice

console.log(arr1.slice(0,3))

///Adicionamento de elementos: push | unshift

console.log('antes de adicionar:',arr2)

arr2.push(10,20,30)
arr2.push(40) //adiciona sempre no final

console.log('depois de adicionar:',arr2)

console.log('antes de adicionar:',arr2)

arr2.unshift(0) // adiciona sempre no início do array

console.log('depois de adicionar:',arr2)


//Removendo elementos: pop | shift

console.log('Antes de remover com o pop: ',arr2)

arr2.pop()//Remove sempre o ultimo elemento do array

console.log('Depois de remover com o pop: ',arr2)

arr2.shift() // remove sempre o primeiro elemento do array

//Concatenando arrays: concat

console.log('arr1',arr1)
console.log('arr2',arr2)
console.log(arr1.concat(arr2))

//Buscando elementos : indexOf | lastIndexOf

console.log(arr1)
let indice = arr1.indexOf(34)
console.log(indice) // se não encontrar o indice ele retorna -1 e se tiver dois dados iguais , vai ser retornado o indice do primeiro.

let arr3 = [1,2,3,3,5,3]

let indice2 = arr3.lastIndexOf(3)
console.log(indice2)

//Descobrindo a existência de um elemento: includes

console.log(arr1)

console.log(arr1.includes(10)) //sempre retorna o valor verdadeiro ou falso. Se tiver o valor no array, retorna verdadeiro.

//Invertendo Arrays: reverse

console.log(arr1)
console.log(arr1.reverse())

