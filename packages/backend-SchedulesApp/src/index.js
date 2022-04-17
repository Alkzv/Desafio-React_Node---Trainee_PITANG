import express from 'express'
import cors from 'cors'

const app = express()

app.use(express.json())

app.use(cors())

app.use((response, request, next) => { // Middleware
  next()
})

app.use(express.json())

app.post('/', (request, response) => {
  response.status(200).send(`Requisição ${request.method} recebida com sucesso!`)
})

app.get('/', (request, response) => {
  response.status(200).send(`Requisição ${request.method} recebida com sucesso!`)
})

app.get('/:id', (request, response) => {
  const id = request.params.id
  response.status(200).send(`Requisição ${request.method} recebida com sucesso! ID:${id}`)
})

app.put('/:id', (request, response) => {
  const id = request.params.id
  response.status(200).send(`Requisição ${request.method} recebida com sucesso! ID: ${id}`)
})

app.delete('/:id', (request, response) => {
  const id = request.params.id
  response.status(200).send(`Requisição ${request.method} recebida com sucesso! ID: ${id}`)
})

app.listen(3000, () => {
  console.log('Server Running on PORT 3000')
})
