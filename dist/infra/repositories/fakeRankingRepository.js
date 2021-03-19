"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FakeRankingRepository = void 0;
const dataSources_1 = require("../dataSources");
class FakeRankingRepository {
    async loadLastRanking() {
        return dataSources_1.ranking.map(item => ({
            player: item.user,
            score: item.score,
            matchDate: new Date(item.date),
            heroes: item.heroes
        }));
    }
}
exports.FakeRankingRepository = FakeRankingRepository;
