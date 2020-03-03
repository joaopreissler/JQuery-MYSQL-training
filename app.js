const express = require("express");

const app = express();

//conexão com DB MySQL
const mysql = require('mysql');
const connection = mysql.createConnection({
host: 'localhost',
user: 'joaoone',
password: '1234',
database: 'joao'
});

connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
   
    console.log('connected as id ' + connection.threadId);
  });

  connection.query('SELECT * FROM users', function(err, rows, fields){
      if (!err){
          console.log('Resultado: ', rows);
      }else{
          console.log('Erro ao realizar a consulta');
      }
  })

app.get("/", function(req, res){
    res.sendFile(__dirname + "/src/index.html");
});

app.get("/sobre-empresa", function(req, res){
    res.sendFile(__dirname + "/src/sobre-empresa.html");
});

app.get("/blog", function(req, res){
    res.send("Pagina do blog");
});

app.get("/contato", function(req, res){
    res.send("Pagina de contato");
});

//localhost:8080
app.listen(1000);