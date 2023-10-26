let pessoa = {
    nome:'',
    setNome : function(novoNome){
        this.nome = novoNome;
    },
    getNome : function(){
        return this.nome;
    }
}

console.log(pessoa.setNome('Victor Ivan'))
console.log(pessoa.getNome())