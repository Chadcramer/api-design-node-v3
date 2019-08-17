import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'

export const app = express()

const router = express.Router();

app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

router.get('/me', (req, res) => {
  res.send( {myRouter: 'router'} )
})

app.use('/api', router);
// CRUD
app.get('/data', (req, res) => {
  res.send( {message: "hello"} );
})

app.post('/data', (req, res) => {
  console.log(req.body);
  res.send(req.body);
})

export const start = () => {
  app.listen(3000, () => {
    console.log('server listening on 3000');
  })
}
