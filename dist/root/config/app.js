"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const route_1 = require("./route");
const express_1 = __importDefault(require("express"));
const app = express_1.default();
route_1.setupRoutes(app);
exports.default = app;
