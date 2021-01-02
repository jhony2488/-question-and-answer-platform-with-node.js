const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.get('/:nome/:lang', (req, res) => {
  let nome = req.params.nome
  let lang = req.params.lang
  let exibirMsg = false
  let produtos = [
    { nome: 'coca', preco: 5.5 },
    { nome: 'biscoito', preco: 1.5 },
    { nome: 'leite', preco: 5 },
  ]
  res.render('index', {
    nome,
    lang,
    exibirMsg,
    produtos,
  })
})

app.listen(8080, () => {
  console.log('app rodando')
})
