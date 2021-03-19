"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const factories_1 = require("../factories");
exports.default = (router) => {
    router.get('/ranking/last', async (request, response) => {
        const controller = factories_1.makeLoadLastRankingController();
        const httpResponse = await controller.handle();
        response.status(httpResponse.statusCode).json(httpResponse.data);
    });
};
