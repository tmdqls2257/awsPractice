import { Request, Response } from 'express'
import * as tweetsRepository from '../data/tweets'

// controller에서 다른곳으로 리턴하는 것이 아니라 controller 안에서 반응 코드의 값을
// 보내줄것 임으로 아무것도 리턴하지 않는 void 를 넣어준다.
export async function getTweets(req: Request, res: Response): Promise<void> {
  const tweets = await tweetsRepository.getAll()
  res.status(200).json(tweets)
}
