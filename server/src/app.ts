import express, { NextFunction, Request, Response } from 'express'
import morgan from 'morgan'
import helmet from 'helmet'
import tweetsRouter from './router/tweets'

const app = express()
app.use(express.json())
app.use(helmet())
app.use(morgan('tiny'))

app.use('/tweets', tweetsRouter)

app.use((req: Request, res: Response, next: NextFunction) => {
  return res.sendStatus(404)
})

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.log(err)
  return res.sendStatus(500)
})

app.listen(8080, () => {
  console.log('Start')
})
