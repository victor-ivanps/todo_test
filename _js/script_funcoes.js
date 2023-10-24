// function imprimindoConsole(){
//     console.log('doidera')
// }
// function imprimindoNumero(num){
//     console.log(`Olha o numero ai, ${num}`)
// }
// imprimindoConsole()
// imprimindoNumero(15)

// console.log('Arrow Function')
// console.log('Parece com o lambda no python, funciona sem a necessidade de se por um nome para a função.')
// let par = (n) => {
//     if ((n % 2) == 0){
//         return 'É par'
//     }
//     return 'É Impar'
// }


// Definindo funções quando não recebem um parametro
// console.log(par(10))
// console.log(par(11))
// function soma(a,b){
//     if(a === undefined || b === undefined){
//         console.log('Essa função necessita de dois argumentos')
//     }else{
//         console.log(`A soma é ${a+b}`)
//     }
// }
// soma(1)
// soma(1,2)


// function lembrarSoma(x){
//     return function(y){
//         return x+y;
//     }
// }
// let soma = lembrarSoma(10);
// console.log(soma(5));
// let idade = prompt('Digite sua idade')
// console.log(`Você tem ${idade} anos`)


// Função que retorna um nº aleatorio
// function numeroAleatorio(n){
//     console.log(Math.random()*n)
// }
// for(let i = 0; i < 10; i++){
//     numeroAleatorio(100)
// }


// Função que retorna se a pessoa pode entrar na auto escola
// function autoEscola(idade){
//     if (idade >= 18) {
//         console.log('Pode entrar na auto escola')
//     }else{
//         console.log('Não pode entrar na auto escola')
//     }
// }
// let idade = prompt('Qual a sua idade ?')
// autoEscola(idade)

// Função que retorna o tipo da variavel
// function informaTipo(n){
//     switch(typeof n){
//                 case 'string':
//                             console.log('tipo texto')
//                             break;
//                 case 'number':
//                             console.log('tipo numero')
//                             break;
//                 case 'boolean':
//                             console.log('tipo booleano')
//                             break;
//                 case 'undefined':
//                             console.log('tipo undefined')
//                             break;
//                 default:
//                         console.log('digite uma opção valida')
//     }
// }

// informaTipo('laele');
// informaTipo(3);
// informaTipo(true);
// informaTipo(undefined);
// informaTipo(null);

// Verifica se uma string é um palindromo
// function isPalindrome(palavra){
//     let flag = 0;
//     for(let i = 0; i < palavra.length; i++){
//         if (palavra[i] == palavra[palavra.length - i - 1]){
//             flag = 1;
//         }else{
//             flag = 0;   
//         }
//     }
    
//     if (flag == 1){
//         return true;
//     }else{
//         return false;
//     }
// }


// Função para calcular a media de um array
// function calculateAverage(lista){
//     if (lista.length == 0){
//         return 0;
//     }
//     else{
//         let soma = 0;
//         for(let i = 0; i < lista.length; i ++){
//             soma += lista[i];
//         }    
//         let media = soma / lista.length;
//         return media;
//     }
// }
// let lista_numeros = []
// console.log(calculateAverage(lista_numeros));


// Função que inverte a ordem de uma string
// function reverseString(a){
//     var b = '';
//     for(var i = 0; i < a.length; i++){
//         b += a[a.length-i-1];
//     }
//     return b;
// }
// reverseString('victor');

// Função que conta vogais
// function countVowels(texto){
    
//     let qnt_vogais = 0;

//     for(var i = 0; i < texto.length; i++){
//         if (texto[i] == 'a' || texto[i] == 'e' || texto[i] == 'i' || texto[i] == 'o' || texto[i] == 'u' || texto[i] == 'A' || texto[i] == 'E' || texto[i] == 'I' || texto[i] == 'O' || texto[i] == 'U'
//         ){    
//             qnt_vogais++;
//         }
//     }

//     return qnt_vogais;
// }
// let texto = 'Victor Ivan Piloto Santos';
// countVowels(texto);


// Função para somar todos os pares presentes
// function sumEvenNumbers(lista){

//     let soma = 0;

//     for(let i = 0; i < lista.length; i++){
//         if (lista[i] % 2 == 0){
//             soma += lista[i];
//         }
//     }

//     return soma;
// }
// let lista_numeros = [0,1,2,3,4,5,6,7,8,9];
// sumEvenNumbers(lista_numeros)