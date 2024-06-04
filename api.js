const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());


const database = {  //conexão
    host:'localhost',
    user:'root',
    password:'',
    database:'crudangular'
};


//rota para obter todas as pessoas 
app.get('/pessoa',async (req, res)=>{
   try{
const conexao = await mysql.createConnection(database);//conexão
const [rows] = await  conexao.query('SELECT * FROM pessoa ORDER BY nome');//sempre que acontecer o retorno de uma função async utilizar o await ele é usada para  esperar uma promessa seja resolvida. 
await conexao.end(); //encerrar a conexão depois que for executada.

res.json(rows); //retorno o valor da query no formato json


   }catch(erro){
    res.status(500).json({erro:erro.message});
   }
})


//rota para inserir nova pessoa
app.post('/pessoa', async (req,res)=> {
const pessoa = req.body;
try{
    const conexao = await mysql.createConnection(database);//conexão
    await conexao.execute('INSERT INTO pessoa (nome,email,idade) VALUES (?,?,?) ', [pessoa.nome,pessoa.email,pessoa.idade]);  //executar uma ação
    await conexao.end();
    res.status(201).json({message:'Pessoa criada com sucesso'});
    
       }catch(erro){
        res.status(500).json({erro:erro.message});
       }

})






//rodar a aaplicação

app.listen(3000,() => {
console.log('Rodando na porta 3000')
})