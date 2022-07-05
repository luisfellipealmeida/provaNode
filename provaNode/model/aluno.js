const conexao = require('../infra/connection')

class Aluno{

    adiciona(aluno, res){
        let sql = 'INSERT INTO aluno SET ?'
        conexao.query(sql,aluno,(erro, resultado)=> {
            if(erro){
                res.status(400).json(erro)
                console.log(erro)
            }else{
                this.mediaAluno()
                res.status(200).json(resultado)
            }
        })
    }

    lista(res){
        const sql = 'SELECT * FROM aluno'
        conexao.query(sql, (erro, resultado) => {
            if(erro){res.status(400).json(erro)
            }else{
                res.status(200).json(resultado)}})
    }

    buscaPorId(id, res){
        let sql = 'SELECT * FROM aluno WHERE id_aluno_pk=?'// ? = 1
        conexao.query(sql,id,(erro, resultado)=>{
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json(resultado)
            }
        })
    }
    
    altera(id, valores, res){
        let sql = 'UPDATE aluno SET ? WHERE id_aluno_pk = ?'
        conexao.query(sql,[valores, id],(erro, resultado)=>{
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json(resultado)
            }
        })
    }

    mediaAluno(){
        let media = (nota1 + nota2 + nota3 + nota4)/4;
        
        if (media >= 6) {
            resultado = "APROVADO"
        }
        if(media > 2 <= 5.9){
            resultado = "EXAME"
        }
        if(media < 2){
            resultado = "REPROVADO"
        }
        return media
        return resultado
    }

}

module.exports = new Aluno