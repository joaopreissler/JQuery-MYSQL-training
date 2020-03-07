const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const Pagamento = require("./views/Models/Pagamento");

//Connect Database Sequelize

app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

//body-parser configuration
app.use(bodyParser.urlencoded({ extended: false}))
//parse aplication/json
app.use(bodyParser.json())

//Rotas
app.get('/pagamento', function(req, res){
   
    Pagamento.findAll().then(function(pagamentos){
        res.render('pagamento',{pagamentos: pagamentos});
    })
});

app.get('/cad-pagamento', function(req, res){
    res.render('cad-pagamento');
});

app.post('/add-pagamento', function(req, res){
    Pagamento.create({
        nome: req.body.nome,
        valor: req.body.valor
    }).then(function(){
        res.redirect("/pagamento");
    }).catch(function(erro){
        res.send("Erro: Pagamento não foi cadastrado com sucesso" + erro)

    })
    //res.send("Nome: " + req.body.nome + "<br>Valor: " + req.body.valor)
    

});

app.listen(8080);