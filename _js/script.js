function recuperando_elementos(){
    let formulario = document.getElementsByTagName('form')

    formulario[0].addEventListener('submit', function(event){
        event.preventDefault();
    });

    let titulo = document.getElementsByName('titulo')[0].value;
    let descr = document.getElementsByName('descricao')[0].value;

    console.log('Titulo da Atividade:', titulo);
    console.log('Descrição da Atividade:', descr);
}