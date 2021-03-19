import { makeLoadLastRankingController } from '../factories'

import { Router } from 'express'

export default (router: Router): void => {
  router.get('/ranking/last', async (request, response)=>{
      const controller = makeLoadLastRankingController()
      const httpResponse =  await controller.handle()
      response.status(httpResponse.statusCode).json(httpResponse.data)
  })
}