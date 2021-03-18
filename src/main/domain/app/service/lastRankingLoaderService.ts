import { RankingScore } from "../../entities";
import { LastRankingLoader } from "../../usesCases";

export class LastRankingLoaderService implements LastRankingLoader{
    constructor (private readonly loadLastRankingRepository: LoadLastRankingRepository) {}
    async load (): Promise<RankingScore[]>{

    }
}