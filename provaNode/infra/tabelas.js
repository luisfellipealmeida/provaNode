class Tabelas {
    init (conexao){
        this.conexao = conexao;
        this.criarAluno();

    }
    
    criarAluno(){
        let sql = 'CREATE TABLE IF NOT EXISTS aluno '+
        '(id_aluno_pk INT NOT NULL AUTO_INCREMENT PRIMARY KEY,'+
        'nome VARCHAR(150) NOT NULL,'+
        'nota1 INT(11),'+
        'nota2 INT(11),'+
        'nota3 INT(11),'+
        'nota4 INT(11),'+
        'media double,'+
        'resultado VARCHAR(50))'

        this.conexao.query(sql, erro => {
            if(erro){
                console.log(erro)
            }else{
                console.log('Tabela ALUNO criada com sucesso!')
            }
        })
    }
}
module.exports = new Tabelas