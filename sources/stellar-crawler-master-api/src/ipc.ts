import ipc from "node-ipc"
import { RPC_PORT } from "./config"
import db from './db' 
import { addMessage } from "./utils/db"
import { HELLO, HelloMessage } from '../../stellar-crawler/src/messages/hello'

let clients: any[] = []

// Create node-ipc
ipc.config.id = 'stellar'
ipc.serveNet('127.0.0.1', RPC_PORT, function () {

  ipc.server.on('connect', function(args) {
    console.log('client connected')
  })

  ipc.server.on('disconnect', function(args) {
    console.log('disconnected', args)
  })

  ipc.server.on(HELLO, (payload: HelloMessage) => {
    console.log(`client ${payload.client} said hello`)
    clients.push({
      client: payload.client,
      data: payload
    })
    addMessage(payload.id, HELLO, payload)
  })

  ipc.server.on(
    'socket.disconnected',
    function (socket, data) {
      console.log('client disconnected', data);
      if (data != null)
      {
        clients = clients.filter(elm => elm.clientId !== data)
      }      
    }
  )

  ipc.server.on(
    'message',
    function (data, socket) {
      ipc.log('got a message : ', data);
      ipc.server.emit(
        socket,
        'message',
        data + ' world!'
      );
    }
  );
})

ipc.server.start()

export { clients }