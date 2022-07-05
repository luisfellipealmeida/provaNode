//const { json } = require('body-parser')
const { mediaAluno } = require('../model/aluno')
const Aluno = require('../model/aluno')
const rota = '/aluno'

module.exports = app => {
    app.get(rota, (req, res) => {
       // retorna os dados??
       Aluno.lista(res)
    })
    app.get((rota+'/:id'),(req, res) => {
      res.send('Você esta na rota '+ rota +' via GET')
      let id = parseInt(req.params.id)
      Aluno.buscaPorId(id, res)
    })
    app.post(rota, (req, res) => {
       console.log(req.body)
       Aluno.adiciona(req.body, res)
       
       res.send('Você esta na rota '+ rota +' via POST')
    })
    //PUT??
    app.patch((rota+'/:id'),(req, res) =>{
       let id = parseInt(req.params.id)
       let valores = req.body
       Aluno.altera(id, valores, res)
    })
 }
 //Testar POST - Abra o CMD no windows
 //curl -d "email=juliana.silva@up.edu.br&senha=12345" http://localhost:3000/aluno
 /* JSON - http://localhost:3000/aluno
 {
     "email" : "juliana.silva@up.edu.br",
     "senha" : "12345"
 }
 */