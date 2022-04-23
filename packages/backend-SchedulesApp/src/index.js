import express from 'express'
import cors from 'cors'
import routes from './routes/routes.js'
import helmet from 'helmet'

const app = express()

app.use(express.json())

app.use(cors())

app.use(helmet())

app.use('/api', routes)

app.listen(3333, () => {
  console.log('Server Running on PORT 3333')
})
