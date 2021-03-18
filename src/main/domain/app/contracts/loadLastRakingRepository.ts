import { RankingScoreModel } from "../models/rankingScore";

export interface LoadLastRankingRepository {
    loadLastRanking: () => Promise<RankingScoreModel[]>
}