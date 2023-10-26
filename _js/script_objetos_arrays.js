// cachorro = {
//     nome: 'Stella',
//     idade: 10,
//     latir: function latir(){
//         console.log('Au Au Au!!!')
//     },
// };



// console.log(cachorro.nome);
// cachorro.latir();

// console.log(cachorro);

// truques = {
//     sentar: function sentar(){
//         console.log('~senta');
//     },
//     rolar: function rolar(){
//         console.log('~rolar')
//     },
// };

// Object.assign(cachorro, truques);

// console.log(cachorro);

// console.log(Object.keys(cachorro))


// Push e Pop - Operações de Inclusão e Exclusão de um elemento no fim de um array
// let lista_teste = ['Maria', 'Ana', 'João', 'Pedro'];
// let nome_removido = lista_teste.pop();
// console.log(nome_removido);
// console.log(lista_teste);
// lista_teste.push('Victor');
// console.log(lista_teste);

// Shift  e Unshift
// let lista_teste = ['Maria', 'Ana', 'João', 'Pedro'];
// let nome_removido = lista_teste.shift()
// console.log(nome_removido);
// console.log(lista_teste);
// lista_teste.unshift('Victor');
// console.log(lista_teste);


// Index_of and Last_Index_of
// let lista_teste = ['Maria', 'Ana Clara', 'João', 'Pedro Henrique', 'Ana Clara', 'Pedro Henrique'];
 // console.log(lista_teste.indexOf('Ana Clara'))
// console.log(lista_teste.indexOf('Pedro Henrique'))

// console.log(lista_teste.lastIndexOf('Ana Clara'))
// console.log(lista_teste.lastIndexOf('Pedro Henrique'))

// forEach - Executa uma função em cada elemente do 
// const num = [1,2,3,4,5,6,7,8,9];
// function multiplicaself(k){
//     console.log( k * k );
// }
// num.forEach(multiplicaself);

// Include - Retorna true caso o elemento passado como parametro esteja em uma array
// let lista_teste = ['Maria', 'Ana Clara', 'João', 'Pedro Henrique', 'Ana Clara', 'Pedro Henrique'];

// if (lista_teste.includes('Ana Clara')){
//     console.log("Existe uma Ana");
// }else{
//     console.log("Não existe uma Ana");
// }

// Trim - Tira tudo que não é uma letra ou simbolo na string.
// let texto = " \n Victor \n  "
// console.log(texto.trim())

// Padstart - Insere valores antes de uma string de forma padronizada
// let sku = '1';
// console.log(sku.padStart(6,'0'));
// PadEnd - Faz o que o Padstart, mas no final da string

// .split() separa uma frase em determinando o separador, transformando-o em um array
// .join() monta uma string a partir de array, tendo o separador dos elementos passado como parametro
// ['Victor','Ivan','Piloto','Santos'].join(' ')

// repeat - repete uma string, a quantidade de vezes é passada como parametro.
// for(let i = 1; i < 10; i++){
//     console.log('*'.repeat(i));
// }
// Forma a piramede de *

// Rest Operator - Aceita um numero indefinidos em uma função

// function imprimirElementos(...args){
//     for(let i = 0; i < args.length; i++){
//         console.log(args[i]);
//     }
// }
// imprimirElementos(1,2,3,4,5,6,7);
// console.log('Pausa');
// imprimirElementos(7,6,5,4);
// console.log('Pausa');
// imprimirElementos(1,1,2,3,5,8,11,19,31);

// Destructuring Objetos - Cria variaveis a partir de variaveis que existem dentro de um objeto.
// let obj = {
//     rodas: 4,
//     portas: 3,
//     tetosolar: true,
//     motor: '1.6'
// }
// const {rodas: vRodas, portas: vPortas, tetosolar: vTetosolar, motor: vMotor} = obj;
// console.log(vRodas);
// console.log(vPortas);
// console.log(vTetosolar);
// console.log(obj.tetosolar)


// Exercicio 1
// let array = [5,8,11,19,31]
// console.log(array[0]);
// console.log(array[2]);
// console.log(array[3]);

// Exercicio 2
// let array = [1,3];
// let array2 = [0,2,4,6];
// function mensagem(a){
//     console.log(a)
// }
// console.log(array.length);
// array.forEach(mensagem);
// console.log('pause');
// console.log(array2.length);
// array2.forEach(mensagem);

// Exercicio 3
// let onibus = {
//     rodas : 8,
//     passageiros : 40,
//     portas : 2
// };
// console.log(onibus.rodas);
// console.log(onibus.passageiros);
// console.log(onibus.portas);
// onibus.janelas = 20;
// delete onibus.rodas;
// console.log(onibus.janelas);
// console.log(onibus);

// Exercicio 4
// let nomes = ['Victor', 'Ivan', 'Ana', 'Caroline', 'Gabriele', 'Caline'];
// console.log(nomes.indexOf('Ivan'));

// const arr = []

// for(let i = 0; arr.length < 5; i+=5){
//     arr.push(i)
// }

// console.log(arr)


// let arr2 = [0, 5, 10, 15, 20];

// console.log(Math.max(...arr2));


// Exercicio 5
// function sumUniqueNumbers(arr){
//     let soma = 0;
//     let num = 0;
//     let tam = arr.length;
// for (let i = 0; i < tam; i++){
//         num = arr[i];
//         if ((arr.indexOf(num) == arr.lastIndexOf(num))){
//             soma += num;
//         }
//     }
//     return soma;
// }
// let arr1 = [1,2,2,3,4,5,5]
// console.log(sumUniqueNumbers(arr1));

// Exercicio 6
// function removeDuplicates(arr){
//     return Array.from(new Set(arr));
// }
// let arr1 = [1,2,2,3,4,5,5]