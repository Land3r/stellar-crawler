"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const home_routes_1 = __importDefault(require("./home.routes"));
const nodes_routes_1 = __importDefault(require("../nodes/nodes.routes"));
// Create a new Router instance
const router = (0, express_1.Router)();
// Mount the routers
router.use('/', home_routes_1.default);
router.use('/api/nodes', nodes_routes_1.default);
exports.default = router;
