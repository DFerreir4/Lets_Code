//Funções

function saudacao(){
    console.log("Olá, saja bem-vinda(o) ao nosso curso de JavaScript!")
}

//Como enviar parametros para as funções
//pode-se atribuir valor default no parametro. ex curso='JavaScript'
function saudacao(aluno,curso){
    console.log(`Olá ${aluno}, saja bem-vinda(o)  ao nosso curso de ${curso}!`)
}

saudacao('Diego','PHP')

//Retorno da função

function soma(a,b){
    return a + b
}

let resultado = soma(10,30)
console.log(resultado)


function maiorDoQue50(n){
    if(n > 50){
        return true
    }

    return false
}