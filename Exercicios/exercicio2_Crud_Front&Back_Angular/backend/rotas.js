const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000; //porta padrão
const mysql = require('mysql');
//configurando o body parser para pegar POSTS mais tarde
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//definindo as rotas
const router = express.Router();
router.get('/', (req, res) => res.json({ message: 'Funcionando!' }));
app.use('/', router); // requisições que chegam na raiz devem ser enviadas para o router

//inicia o servidor
app.listen(port);
console.log('API funcionando!');


// função deve ficar no final do arquivo
function execSQLQuery(sqlQry, res) {
    const connection = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: '',
        database: 'escola'
    });

    connection.query(sqlQry, function (error, results, fields) {
        if (error)
            res.json(error);
        else
            res.json(results);
        connection.end();
        console.log('executou!');
    });
}



// Realizando a Matricula de um aluno
router.post('/add/matricula', (req, res) => {
    const cod_aluno = req.body.cod_aluno;
    const cod_disc = req.body.cod_disc;

    execSQLQuery(`INSERT INTO matricula(codAluno, codDiscip) VALUES('${cod_aluno}','${cod_disc}')`, res);
});

// Listagem de Alunos por disciplina
router.get('/disciplina/:id?', (req, res) => {

    let sql = "";
    if (req.params.id) {
        sql = "SELECT aluno.nome \n" +
            "FROM aluno,discip \n" +
            "INNER JOIN matricula m\n" +
            "ON(m.codDiscip = " + parseInt(req.params.id) + ")\n" +
            "WHERE aluno.codigo = m.codAluno and discip.codigo = " + parseInt(req.params.id) + ";"
    }
    execSQLQuery(sql, res);
})

// ROTAS EXTRAS

 // Lista Disciplina
router.get('/disciplinas', (req, res) => {
    execSQLQuery('SELECT * FROM discip', res);
})

// Lista Alunos
router.get('/alunos', (req, res) => {
    execSQLQuery('SELECT * FROM aluno', res);
})

// Lista Dados de um aluno
router.get('/aluno/:id?', (req, res) => {
    let filter = '';
    if (req.params.id) filter = ' WHERE codigo=' + parseInt(req.params.id);
    execSQLQuery('SELECT * FROM aluno' + filter, res);
})

// Lista de Matriculas
router.get('/matricula', (req, res) => {
    execSQLQuery('SELECT * FROM matricula', res);
})



/*
 router.get('/aluno/:id?', (req, res) => {
    let filter = '';
    if (req.params.id) filter = ' WHERE ID=' + parseInt(req.params.id);
    execSQLQuery('SELECT * FROM aluno' + filter, res);
})

router.delete('/delete/aluno/:id', (req, res) => {
    execSQLQuery('DELETE FROM aluno WHERE ID=' + parseInt(req.params.id), res);
})


router.patch('/update/clientes/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const nome = req.body.nome.substring(0, 150);
    const cpf = req.body.cpf.substring(0, 11);
    execSQLQuery(`UPDATE Clientes SET Nome='${nome}', CPF='${cpf}' WHERE ID=${id}`, res);
})
*/