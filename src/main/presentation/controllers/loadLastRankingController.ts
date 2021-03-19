import { LastRankingLoader } from '../../domain/usesCases';
import { Controller, HtttpResponse, serverError, ok } from "../contracts";
import { RankingScoreViewModel } from "../viewModels";

export class LoadLastRankingController implements Controller {
    constructor (private  readonly lastRankingLoader: LastRankingLoader ){}
    async handle (): Promise<HtttpResponse<RankingScoreViewModel[]>> {
        try {
            const ranking =  await this.lastRankingLoader.load()
            const viewModels = ranking.map(item => ({
                ...item,
                matchDate: item.matchDate.toISOString()
            }))
            return ok(viewModels)
        } catch (error) {
            return serverError(error)
        }
    }
}