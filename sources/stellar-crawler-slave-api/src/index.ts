import ipc from "node-ipc"
import express from 'express';
import { randomUUID } from 'crypto'
import { StellarNode } from '../../stellar-crawler/src/types/StellarNode'
import { HELLO } from '../../stellar-crawler/src/messages/hello'

const node: StellarNode = {
    id: '1247',
    name: 'Slave node',
    type: 'slave',
    crawler: 'Playwright',
    address: 'localhost:3002',
    status: 'on'
}


const app = express(); // New express instance
const id = randomUUID()

app.listen(9990, () => {
  // Callback function when server is successfully started
  console.log(`Server started at http://localhost:${9990}`);
});

// Create node-ipc
ipc.config.id = id
ipc.connectToNet('stellar', 3002, function () {
  ipc.of.stellar.on(
    'connect',
    function(){
        ipc.log('## connected to stellar ##', ipc.config);
        ipc.of.stellar.emit(
            HELLO,
            {
                client: ipc.config.id,
                ...node
            }
        );
    }
);
ipc.of.stellar.on(
    'disconnect',
    function(){
        ipc.log('disconnected from world');
    }
);
ipc.of.stellar.on(
    'app.message',
    function(data){
        ipc.log('got a message from world : ', data);
    }
);

console.log(ipc.of.world);
})

// Export Express app
export default app;