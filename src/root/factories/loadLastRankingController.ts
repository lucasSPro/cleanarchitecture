import { LastRankingLoaderService } from '../../app/service'
import { FakeRankingRepository } from '../../infra/repositories'
import { LoadLastRankingController } from '../../presentation/controllers'
import { Controller } from '../../presentation/contracts'

export const makeLoadLastRankingController = (): Controller => {
    const repo = new FakeRankingRepository()
    const loader =  new LastRankingLoaderService(repo)
    return  new LoadLastRankingController(loader)
}