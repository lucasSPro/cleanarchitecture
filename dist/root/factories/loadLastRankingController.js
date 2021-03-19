"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLoadLastRankingController = void 0;
const service_1 = require("../../app/service");
const repositories_1 = require("../../infra/repositories");
const controllers_1 = require("../../presentation/controllers");
const makeLoadLastRankingController = () => {
    const repo = new repositories_1.FakeRankingRepository();
    const loader = new service_1.LastRankingLoaderService(repo);
    return new controllers_1.LoadLastRankingController(loader);
};
exports.makeLoadLastRankingController = makeLoadLastRankingController;
