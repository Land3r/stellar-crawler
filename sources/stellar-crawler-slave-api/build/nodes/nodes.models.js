"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteNode = exports.updateNode = exports.createNode = exports.getNodeById = exports.getNodes = void 0;
const nodes = [
    {
        id: 1,
        name: 'Master node',
        type: 'master',
        address: 'localhost:3001',
        status: 'on',
    },
    {
        id: 2,
        name: 'Worker #1247',
        type: 'slave',
        address: 'localhost:3002',
        crawler: 'Playwright',
        status: 'on'
    }
];
const getNodes = () => {
    return nodes;
};
exports.getNodes = getNodes;
const getNodeById = (id) => {
    return nodes.find(node => node.id === id);
};
exports.getNodeById = getNodeById;
const createNode = (node) => {
    nodes.push(node);
};
exports.createNode = createNode;
const updateNode = (node) => {
    const index = nodes.findIndex(u => u.id === node.id);
    nodes[index] = node;
};
exports.updateNode = updateNode;
const deleteNode = (id) => {
    const index = nodes.findIndex(u => u.id === id);
    nodes.splice(index, 1);
};
exports.deleteNode = deleteNode;
