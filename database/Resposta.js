const sequelize = require('sequelize')
const connection = require('./connection')

const resposta = connection.define('respostas', {
  body: {
    type: sequelize.TEXT,
    allowNull: false,
  },
  perguntaId: {
    type: sequelize.INTEGER,
    allowNull: false,
  },
})

resposta.sync({ force: false }).then(() => {
  console.log('tabela de resposta criada')
})
module.exports = resposta
