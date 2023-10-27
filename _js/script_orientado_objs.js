// let pessoa = {
//     nome:'',
//     setNome : function(novoNome){
//         this.nome = novoNome;
//     },
//     getNome : function(){
//         return this.nome;
//     },
//     maos : 2,
//     pes : 2
// }

// pessoa.setNome('Victor Ivan');

// let pessoa_nova = Object.create(pessoa); // Usando de Prototypes - Importando já propriedades de pessoas

// pessoa_nova.cabeca = 1;
// pessoa_nova.setNome('Guilherme');

// console.log(pessoa);
// console.log(pessoa_nova);
// console.log(pessoa_nova.hasOwnProperty('pes')); // Dá falso, por que `pes` é uma propriedade de pessoa, mas não de pessoa_nova.
// console.log(pessoa_nova.maos);
// console.log(pessoa_nova.pes);


// function criaPessoa(nome, idade, peso, tamanho){
//     let pessoa = Object.create({});
//     pessoa.nome = nome;
//     pessoa.idade = idade;
//     pessoa.peso = peso;
//     pessoa.tamanho = tamanho;

//     return pessoa;
// }

// newPeople = criaPessoa('Victor Ivan', 24, 80, 1.75);

// console.log(newPeople);


// function Cachorro(nome, raça, cor){
//     this.nome = nome;
//     this.raça = raça;
//     this.cor = cor;
// }

// let dog = new Cachorro('Cedrik', 'Vira-Lata', 'Cinza-Preto');
// console.log(dog)



// function Cachorro(nome, raça, cor){
//     this.nome = nome;
//     this.raça = raça;
//     this.cor = cor;
// }

// let dog = new Cachorro('Cedrik', 'Vira-Lata', 'Cinza-Preto');
// // Metodo mais correto de anexar metodos (funções) a uma classe;
// Cachorro.prototype.uivar = function(){
//     console.log('Auuuu!!!')
// };

// console.log(dog)
// dog.uivar();


// Construtor na classe ES6 - New!! 

// class Cachorro1{
//     constructor(nome, raça, cor){
//         this.nome = nome;
//         this.raça = raça;
//         this.cor = cor;
//     }

//     get getRaca(){
//         return this.raça;
//     }

//     set setRaca(raça){
//         this.raça = raça;
//     }
// }

// let patas = Symbol()

// Cachorro1.prototype[patas] = 4;

// let dog1 = new Cachorro1('Huck', 'Vira-Lata', 'Marron Claro')
// console.log(dog1);

// Cachorro1.prototype.uivar = function (){
//     console.log('Auuuuuu!!');
// }

// dog1.uivar();

// console.log(Cachorro1.prototype[patas]);

// dog1.setRaca = 'Dobberman';

// let raca = dog1.getRaca;

// console.log(raca);

// class Mamifero{
//     constructor(patas){
//         this.patas = patas;
//     }
// }

// class Cachorro extends Mamifero{
//     constructor(patas, raça){
//         super(patas, patas);
//         this.raça = raça;
//     }
// }

// let dog = new Cachorro(4,'Vira-Lata');

// console.log(dog);
// console.log(new Cachorro instanceof Mamifero); // Verifica se a classe Cachorro extends de Mamifero