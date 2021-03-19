"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RankingScoreViewModel = void 0;
class RankingScoreViewModel {
    static map(entity) {
        return {
            ...entity,
            matchDate: entity.matchDate.toISOString()
        };
    }
    static mapCollection(entities) {
        return entities.map(entity => RankingScoreViewModel.map(entity));
    }
}
exports.RankingScoreViewModel = RankingScoreViewModel;
