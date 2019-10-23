const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'teste'
});

function createTable(conn){

    const sql = "CREATE TABLE aluno (codigo INTEGER NOT NULL,nome VARCHAR(25),dt_nasc DATE,PRIMARY KEY (codigo)) ENGINE = INNODB";
   
    conn.query(sql, function (error, results, fields){
    if(error) return console.log(error);
    console.log('criou a tabela!');
    });
    
    const sql1 = "CREATE TABLE discip (codigo INTEGER NOT NULL,\n"+
    " nome  VARCHAR(25),\n"+
    " creditos INTEGER,\n"+
    " PRIMARY KEY (codigo)) ENGINE = INNODB;";

    conn.query(sql1, function (error, results, fields){
        if(error) return console.log(error);
        console.log('criou a tabela!');
        });
    
    const sql2 = "CREATE TABLE matricula (codAluno INTEGER NOT NULL,\n"+
        "codDiscip INTEGER NOT NULL, PRIMARY KEY (codAluno,\n"+
        "codDiscip), INDEX (codAluno), FOREIGN KEY (codAluno)\n"+
        "REFERENCES aluno(codigo) ON DELETE RESTRICT, INDEX\n"+
        "(codDiscip), FOREIGN KEY (codDiscip) REFERENCES discip(codigo)\n"+
        "ON DELETE RESTRICT) ENGINE = INNODB;";
    
    conn.query(sql2, function (error, results, fields){
            if(error) return console.log(error);
            console.log('criou a tabela!');
            });


   }


   function addRowsAluno(conn){
    const sql1 = "INSERT INTO aluno (codigo,nome,dt_nasc) VALUES ?";
    const values = [
    [1,"Bert C. Rosario","2020-07-19 10:30:56"],
    [2,"Conan W. Maldonado","2020-06-08 14:00:31"],
    [3,"Xander B. Berry","2019-11-04 03:25:51"],
    [4,"Jessica Z. Gibbs","2019-03-06 23:59:01"],
    [5,"Robert Y. Macias","2020-07-23 18:36:46"],
    [6,"Fritz B. Adkins","2019-05-27 19:01:30"],
    [7,"Hunter Z. Rich","2020-04-04 14:35:58"],
    [8,"Pearl Y. Blanchard","2019-04-13 00:32:39"],
    [9,"Jeanette X. Henderson","2019-10-19 17:14:07"],
    [10,"Lucas U. Valenzuela","2020-08-07 04:01:57"]
    ];
    conn.query(sql1, [values], function (error, results, fields){
    if(error) return console.log(error);
    console.log('adicionou registros!');
    conn.end();//fecha a conexão 
    });
   
   }

   function addRowsDisciplina(conn1){

    const sql2 = "INSERT INTO discip (codigo,nome,creditos) VALUES ?"
    const values = [
         [1,"DESENVOLVIMENTO WEB",36],
         [2,"ESTRUTURA DE DADOS 1",39],
         [3,"ESTRUTURA DE DADOS 2",55],
         [4,"REDE",55],
         [5,"CALCULO 1",45],
         [6,"CALCULO 2",46],
         [7,"CALCULO 3",50],
         [8,"ORIENTEADO OBJETO",63]
        ];
       
    conn1.query(sql2, [values], function (error, results, fields){
        if(error) return console.log(error);
        console.log('adicionou registros!');
        conn1.end();//fecha a conexão
        });
   }

   connection.connect(function(err){
   // if(err) return console.log(err);
    console.log('conectou!');
    createTable(connection);
    addRowsAluno(connection);
    addRowsDisciplina(connection);

   })

   /* 
   
    SITE : http://www.generatedata.com/
  
*/
   

   