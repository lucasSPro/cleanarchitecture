import { LastRankingLoader } from '../../domain/usesCases';
import { Controller, HtttpResponse } from "../contracts";
import { RankingScoreViewModel } from "../viewModels";

export class LoadLastRankingController implements Controller {
    constructor (private  readonly lastRankingLoader: LastRankingLoader ){}
    async handle (): Promise<HtttpResponse<RankingScoreViewModel[]>> {
        try {
            const ranking =  await this.lastRankingLoader.load()
            return {
                statusCode: 200,
                data: ranking.map(item => ({
                    ...item,
                    matchDate: item.matchDate.toISOString()
                }))
            }
        } catch (error) {
            return{
                statusCode: 500,
                data: error.stack
            }
        }
    }
}