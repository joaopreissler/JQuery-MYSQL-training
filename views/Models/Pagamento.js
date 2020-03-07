const db = require('./db')

const Pagamento = db.sequelize.define('pagamentos', {
    nome: {
        type: db.Sequelize.STRING
    },
    valor: {
        type: db.Sequelize.DOUBLE
    }
})

//Criar a tabela
//Pagamento.sync({force: true}) cria a tabela, comentar para não apagar a tabela antiga

module.exports = Pagamento;