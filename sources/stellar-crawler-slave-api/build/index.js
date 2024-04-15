"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_ipc_1 = __importDefault(require("node-ipc"));
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)(); // New express instance
app.listen(9990, () => {
    // Callback function when server is successfully started
    console.log(`Server started at http://localhost:${9990}`);
});
// Create node-ipc
node_ipc_1.default.connectToNet('stellar', 3002, function () {
    node_ipc_1.default.server.on('message', function (data, socket) {
        node_ipc_1.default.log('got a message : ', data);
        node_ipc_1.default.server.emit(socket, 'message', data + ' world!');
    });
    node_ipc_1.default.server.on('socket.disconnected', function (data, socket) {
        console.log(arguments);
    });
    node_ipc_1.default.server.on('socket.connected', function (data, socket) {
        console.log(arguments);
    });
});
node_ipc_1.default.server.start();
// Export Express app
exports.default = app;
