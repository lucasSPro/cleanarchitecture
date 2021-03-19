"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadLastRankingController = void 0;
const contracts_1 = require("../contracts");
const viewModels_1 = require("../viewModels");
class LoadLastRankingController {
    constructor(lastRankingLoader) {
        this.lastRankingLoader = lastRankingLoader;
    }
    async handle() {
        try {
            const ranking = await this.lastRankingLoader.load();
            return contracts_1.ok(viewModels_1.RankingScoreViewModel.mapCollection(ranking));
        }
        catch (error) {
            return contracts_1.serverError(error);
        }
    }
}
exports.LoadLastRankingController = LoadLastRankingController;
