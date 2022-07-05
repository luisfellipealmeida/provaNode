const customExpress = require('./config/customExpress')
const conexao = require('./infra/connection')
const Tabelas = require('./infra/tabelas')
//const app = customExpress()

conexao.connect(erro => {
    if(erro){
        console.log(erro)
    }else{
        console.log('Concetado ao banco de dados!')

        Tabelas.init(conexao)
        const app = customExpress()
        
        app.listen(3000,() => console.log('servidor rodando na porta 3000'))
    }
})

 //Testar POST - Abra o CMD no windows
 //curl -d "nome=luis&nota1=25&nota2=51&nota3=78&nota4=76" http://localhost:3000/aluno
 
 /* JSON - http://localhost:3000/login
 {
     "email" : "juliana.silva@up.edu.br",
     "senha" : "12345"
 }
 */