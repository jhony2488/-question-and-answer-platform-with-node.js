const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.render('index')
})
app.get('/perguntar', (req, res) => {
  res.render('perguntar')
})
app.post('/salvarpergunta', (req, res) => {
  let title = req.body.title
  let description = req.body.description
  res.send(
    `formulario recebido  <br/> title: ${title} description: ${description}`
  )
})

app.listen(8080, () => {
  console.log('app rodando')
})
