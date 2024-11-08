// TESTE.JS AQUI VAMOS COLOCAR O CÓDIGO FONTE

// function inteiro(inteiro) {
//     return inteiro; //Solução mais simples para o erro
// }

//fizz buzz
// function jogo(numero){
//     if(numero %3 == 0) {
//         return "Fizz"
//     }

//     if(numero %5 == 0) {
//         return "Buzz"
//     }
//     return numero;
// }


// const aluno = (nota, media) => {
//     let resultado;
//     let desempenho = 3;
//     if (desempenho >= 7) {
//         resultado = "Aprovado"
//     } else {
//         resultado = "Reprovado"
//     }

//     return resultado;
// }

// class Pessoa {
//     constructor(_Nome, _SobreNome, _Idade){
//         let nome = _Nome;
//         let sobrenome = _SobreNome;
//         let idade = _Idade;

//         this.nome = () => {
//             return nome
//         }
//         this.nome_completo = () => {
//             return nome + ' ' + sobrenome
//         }
//         this.nome_tudo = () => {
//             return nome + ' ' + sobrenome + ' ' + 'tem a idade de ' + idade + ' ' + 'anos'
//         }
//     }}


// Exercicío 1
// Desenvolva uma aplicação que multiplique três números.
// Requisitos da Função:
// 1. Ela deve receber três argumentos numéricos.
// 2. A função deve retornar a multiplicação dos três números.
// Exemplos de Comportamento:
// • multiplicarTresNumeros(2, 3, 4) retorna 24.
// • multiplicarTresNumeros(1, 5, 2) retorna 10.
// • multiplicarTresNumeros(1, 0, 3) retorna 0.

// function multiplicacao (n1, n2, n3){
//     let resultado = n1 * n2 * n3

//     return resultado;
// }

// Exercícios 2:
// Desenvolva uma função dividir que divide dois números, garantindo que não haja
// divisão por zero.
// Requisitos da Função:
// • Recebe dois argumentos numéricos.
// • Retorna o resultado da divisão.
// Exemplos:
// • dividir(10, 2) retorna 5.
// • dividir(7, 0) retorna "Não é possível dividir por 0".

// function divisao (n1, n2){
//     let resultado = n1 / n2 

//     if (n2 == 0){
//         resultado = "Não é possível dividir por 0"
//     }

//     return resultado;
// }


// Exercício 3:
// Crie uma função celsiusFahrenheit e outra fahrenheitCelsius
// Requisitos das Funções:
// • celsiusFahrenheit converte de Celsius para Fahrenheit.
// • fahrenheitCelsius converte de Fahrenheit para Celsius.
// Exemplos de Comportamento:
// • celsiusFahrenheit(0) retorna 32.
// • fahrenheitCelsius(32) retorna 0.

// Fórmula:
// • Fahrenheit → Celsius
// o C = F – 32 / 1.8
// • Celsius → Fahrenheit
// o F = C + 32 * 1.8

    // function celsiusFahrenheit (c){
    //     let fahrenheit = (c * 1.8) + 32
    //     return fahrenheit;
    // }

    // function fahrenheitCelsius (f){
    //     let celsius = (f - 32) / 1.8
    //     return celsius;
    // }
    

// Exercício 4:
// Desenvolva uma função calcularMedia que calcula a média de três números.
// Requisitos da Função:
// • Recebe três argumentos numéricos.
// • Retorna a média aritmética.
// Exemplos:
// • calcularMedia(3, 4, 5) retorna 4.
// • calcularMedia(10, 20, 30) retorna 20.

//  function calcularMedia (n1, n2, n3){
//     media = (n1 + n2 + n3) / 3

//     return media;
//  }

// Exercício 5:
// Crie uma função contarCaracteres que retorna o número de caracteres em uma
// string.
// Requisitos da Função:
// • Recebe uma string como argumento.
// • Retorna o número de caracteres.
// Exemplos:
// • contarCaracteres("hello") retorna 5.
// • contarCaracteres("12345") retorna 5.

// function contarCaracteres(digitado){
//     let caracter = digitado.length 

//     return caracter;
// }



// Exercício 6:
// Crie uma função calculadora que realiza as quatro operações básicas (soma,
// subtração, multiplicação e divisão).

// Requisitos da Função:
// • A função recebe três argumentos: dois números e um operador ("+", "-", "*",
// "/").
// • Retorne o resultado da operação.
// Exemplos de Comportamento:
// • calculadora(4, 2, "+") retorna 6.
// • calculadora(4, 2, "/") retorna 2.

function operacoes(a,b,c){
    let soma = a + b;
    let sub = a - b;
    let mult = a * b;
    let div = a / b;

    switch (c) {
        case "+": return soma
        case "-": return sub
        case "*": return mult
        case "/": return div
    }
}