const app = require('express')()
const bodyParser = require('body-parser')
const SERVER_PORT = 9000

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(bodyParser.text())

app.get('/', (request, response) => {
  return response.send('(GET) Ola esp!')
})

app.post('/', (request, response) => {
  console.log(request.body, request.connection.remoteAddress)
  return response.send('(POST) Voce me enviou: '
  + JSON.stringify(request.body)
  + ', Content-Type: '+ request.headers['content-type']
  + ', IP: '
  + request.connection.remoteAddress)
})

app.put('/', (request, response) => {
  return response.send('(PUT) Voce me enviou: ' + JSON.stringify(request.body))
})

app.patch('/', (request, response) => {
  return response.send('(PATCH) Voce me enviou: ' + JSON.stringify(request.body))
})

app.delete('/', (request, response) => {
  return response.send('(DELETE) Voce me enviou: ' + JSON.stringify(request.body))
})

app.listen(SERVER_PORT, () => console.log('Servidor está rodando na porta ' + SERVER_PORT))
