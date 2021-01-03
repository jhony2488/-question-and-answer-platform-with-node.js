const sequelize = require('sequelize')
const connection = require('./connection')

const pergunta = connection.define('perguntas', {
  title: {
    type: sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: sequelize.TEXT,
    allowNull: false,
  },
})

pergunta.sync({ force: false }).then(() => {
  console.log('tabela criada')
})

module.exports = pergunta
