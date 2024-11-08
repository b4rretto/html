//TESTESPEC.JS VAI FICAR O TESTE


// it("Lista de Teste", function (){
//     expect(inteiro(1)).toBe(1);
//     expect(inteiro(2)).toBe(2);
//     expect(inteiro(3)).toBe(3);
//     expect(inteiro(4)).toBe(4);
// })

// describe("Teste de números", function(){
//     it("Fizz Buzz", function () {
//         expect(jogo(1)).toBe(1);
//         expect(jogo(2)).toBe(2);
//         expect(jogo(3)).toBe("Fizz");
//         expect(jogo(4)).toBe(4);
//         expect(jogo(5)).toBe("Buzz");
//         expect(jogo(6)).toBe("Fizz");
//         expect(jogo(7)).toBe(7);
//         expect(jogo(8)).toBe(8);
//         expect(jogo(9)).toBe("Fizz");
//         expect(jogo(10)).toBe("Buzz");
//     })
// })

// describe("Teste de média", function() {
//     it("Resultado", function() {
//         let res = aluno();
//         expect(res).toEqual("Reprovado")
//     })
// })

// describe("Pessoas", function() {
//     let nome = "Gabriel";
//     let sobrenome = "Barretto";
//     let idade = 17;

//     let pessoa = new Pessoa(nome, sobrenome, idade);

//     it('Teste - Nome', function() {
//         expect("Gabriel").toBe(pessoa.nome())
//     })
//     it('Teste - Nome e Sobrenome', function() {
//         expect("Gabriel Barretto").toBe(pessoa.nome_completo())
//     })
//     it('Teste - Nome, Sobrenome e idade', function() {
//         expect("Gabriel Barretto tem a idade de 17 anos").toBe(pessoa.nome_tudo())
//     })
// })


// EXERCICÍO 1
// describe("Multiplicação de tres numeros", function(){
//     it('resultado', function(){
//         expect(multiplicacao(2,2,2)).toBe(8)
//     })
// })

// EXERCICÍO 2
//  it('resultado', function(){
//     expect(divisao(4,2)).toBe(2)
//  })

// EXERCICÍO 3 
    // it('fahrenheit', function(){
    //     expect(celsiusFahrenheit(20)).toBe(68)
    // })
    // it('celsius', function(){
    //     expect(fahrenheitCelsius(68)).toBe(20)
    // })


//EXERCICÍO 4
//  it('Media dos alunos', function(){
//     expect(calcularMedia(8, 9, 10)).toBe(9)
//  })

//EXERCICÍO 5
// it('Conta de Caracters', function(){
//     expect(contarCaracteres("Hello")).toBe(5)
//     expect(contarCaracteres("12345")).toBe(5)
// })

// EXERCICÍO 6 
describe("Operações:", function(){
        it("Soma: ", function(){
            expect(operacoes(10, 20, "+")).toBe(30)
        })
    
        it("Subtração: ", function(){
            expect(operacoes(10, 10, "-")).toBe(0)
        })
    
        it("Multiplicação: ", function(){
            expect(operacoes(10, 20, "*")).toBe(200)
        })
    
        it("Divisão: ", function(){
            expect(operacoes(10, 5, "/")).toBe(2)
        })
    
    })