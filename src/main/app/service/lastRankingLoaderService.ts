import { RankingScore } from "../../domain/entities";
import { LastRankingLoader } from "../../domain/usesCases";
import { RankingUnavailableError } from "../errors";
import { LoadLastRankingRepository } from "../contracts"

export class LastRankingLoaderService implements LastRankingLoader{
    constructor (private readonly loadLastRankingRepository: LoadLastRankingRepository) {}
    async load (): Promise<RankingScore[]>{
        if(new Date().getHours() > 21){
            throw new RankingUnavailableError()
        }
        return this.loadLastRankingRepository.loadLastRanking()
    }
}