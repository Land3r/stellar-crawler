"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const nodes_controller_1 = require("./nodes.controller");
// New Router instance
const router = (0, express_1.Router)();
// Nodes routes
router.get('/', nodes_controller_1.getNodesController);
router.get('/:id', nodes_controller_1.getNodeByIdController);
router.post('/', // path
nodes_controller_1.createNodeController // controller
);
router.put('/:id', // path
nodes_controller_1.updateNodeController // controller
);
router.delete('/:id', nodes_controller_1.deleteNodeController);
exports.default = router;
