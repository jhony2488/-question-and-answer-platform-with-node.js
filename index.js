const express = require('express')
const bodyParser = require('body-parser')
const database = require('./database/connection')
const pergunta = require('./database/pergunta')
const app = express()

database
  .authenticate()
  .then(() => {
    console.log('conexão feita com o banco de dados')
  })
  .catch((error) => {
    console.log('erro na conexão com o banco de dados:' + error)
  })

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  pergunta.findAll({ raw: true, order: [['id', 'DESC']] }).then((perguntas) => {
    res.render('index', {
      perguntas,
    })
  })
})
app.get('/perguntar', (req, res) => {
  res.render('perguntar')
})
app.post('/salvarpergunta', (req, res) => {
  let title = req.body.title
  let description = req.body.description
  pergunta
    .create({
      title,
      description,
    })
    .then(() => {
      res.redirect('/')
    })
})

app.get('/perguntar/:id', (req, res) => {
  let id = req.params.id
  pergunta.findOne({ where: { id } }).then((res) => {
    if (res != undefined) {
      res.render('perguntaOne', {
        pergunta: res,
      })
    } else {
      res.redirect('/')
    }
  })
})

app.listen(8080, () => {
  console.log('app rodando')
})
