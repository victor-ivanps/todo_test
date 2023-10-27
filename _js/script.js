class Tarefa{
    constructor(nome, descricao, data_inicio, data_fim){
        this.nome = nome;
        this.descricao = descricao;
        this.data_inicio = data_inicio;
        this.data_fim = data_fim;
    }

    get getName(){
        return this.nome;
    };

    get getDescricao(){
        return this.descricao;
    }

    get getData_inicio(){
        return this.data_inicio;
    };

    get getData_fim(){
        return this.data_fim;
    }

    set setName(name){
        this.name = name;
    };

    set setDescricao(descricao){
        this.descricao = descricao;
    }

    set setData_inicio(data_inicio){
        this.data_inicio = data_inicio;
    };

    set setData_fim(data_fim){
        this.data_fim = data_fim;
    }
};

class Lista_Tarefa{
    constructor(nome){
        this.nome = nome;
        this.array_tarefa = [];
    }

    get getName(){
        return this.nome;
    }

    inclui_tarefa(Tarefa){
        this.array_tarefa.push(Tarefa);
    }

    show_tarefas(){
        if(this.array_tarefa.length != 0){
            const tarefaList = document.getElementsByName('tarefaList')[0];
            for( let i=0; i < this.array_tarefa.length; i++ ){
                // console.log('Tarefa ',i+1);
                // console.log(`${this.array_tarefa[i].getName}`);
                // console.log(`${this.array_tarefa[i].getDescricao}`);
                // console.log(`${this.array_tarefa[i].getData_inicio}`);
                // console.log(`${this.array_tarefa[i].getData_fim}`);
                // console.log('');
                let item = document.createElement('li');
                item.textContent = `Tarefa ${i+1} 
                \n${this.array_tarefa[i].getName}
                \n${this.array_tarefa[i].getDescricao} 
                \n${this.array_tarefa[i].getData_inicio}
                \n${this.array_tarefa[i].getData_fim}`;
                tarefaList.appendChild(item);
            }
        }
        else{
            console.log('Sem Tarefas para começar!!');
        }
    }

};


let formulario = document.getElementsByTagName('form');

formulario[0].addEventListener('submit', function(event){
    event.preventDefault();

let titulo = document.getElementsByName('titulo')[0].value;
let descr = document.getElementsByName('descricao')[0].value;
let data_inicio = document.getElementsByName('data_inicio')[0].value;
let data_fim = document.getElementsByName('data_fim')[0].value;

let lista_tarefa = new Lista_Tarefa('Lista 1');
let tarefa = new Tarefa(titulo, descr, data_inicio, data_fim);

lista_tarefa.inclui_tarefa(tarefa);

lista_tarefa.show_tarefas();

document.getElementsByName('titulo')[0].value = '';
document.getElementsByName('descricao')[0].value = '';
document.getElementsByName('data_inicio')[0].value = '';
document.getElementsByName('data_fim')[0].value = '';
});
// recuperando_elementos(Lista_Tarefa);
// mostrar_tarefas(Lista_Tarefa)