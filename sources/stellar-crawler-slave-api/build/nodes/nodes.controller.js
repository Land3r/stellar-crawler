"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteNodeController = exports.updateNodeController = exports.createNodeController = exports.getNodeByIdController = exports.getNodesController = void 0;
const nodes_models_1 = require("./nodes.models");
const getNodesController = (req, res) => {
    const nodes = (0, nodes_models_1.getNodes)();
    const rawRes = {
        responseBody: {
            code: 200,
            detail: '',
            label: '',
            totals: {
                count: nodes.length,
                max: 50,
                skip: 0,
                total: nodes.length
            },
            data: [
                ...nodes,
            ]
        }
    };
    res.status(200).json(rawRes);
};
exports.getNodesController = getNodesController;
const getNodeByIdController = (req, res) => {
    const id = parseInt(req.params.id, 10);
    const node = (0, nodes_models_1.getNodeById)(id);
    if (node) {
        res.status(200).json({ user: node });
    }
    else {
        res.status(404).json({ message: 'Node not found' });
    }
};
exports.getNodeByIdController = getNodeByIdController;
const createNodeController = (req, res) => {
    const node = req.body;
    (0, nodes_models_1.createNode)(node);
    res.status(201).json({
        message: 'Node created',
        node,
    });
};
exports.createNodeController = createNodeController;
const updateNodeController = (req, res) => {
    const id = parseInt(req.params.id, 10);
    const nodeUpdate = req.body;
    nodeUpdate.id = id;
    (0, nodes_models_1.updateNode)(nodeUpdate);
    res.status(200).json({
        message: 'Node updated',
        node: nodeUpdate,
    });
};
exports.updateNodeController = updateNodeController;
const deleteNodeController = (req, res) => {
    const id = parseInt(req.params.id, 10);
    (0, nodes_models_1.deleteNode)(id);
    res.status(200).json({
        message: `Node ${id} deleted`,
    });
};
exports.deleteNodeController = deleteNodeController;
