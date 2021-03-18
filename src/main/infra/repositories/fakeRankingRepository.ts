import { LoadLastRankingRepository } from "../../app/contracts";
import { RankingScoreModel } from "../../app/models/rankingScore";
import { ranking } from '../dataSources';

export class FakeRankingRepository implements LoadLastRankingRepository {
   async loadLastRanking (): Promise<RankingScoreModel[]> {
       return ranking.map(item => ({
           player: item.user,
           score: item.score,
           matchDate: new Date(item.date),
           heroes: item.heroes
       }))
   }
}