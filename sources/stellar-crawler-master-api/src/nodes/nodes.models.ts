import { clients } from "../ipc";
import { RPC_PORT } from "../config";
import { StellarNode } from "../../../stellar-crawler/src/types/StellarNode";

  const nodes: Array<StellarNode> = [
    {
      id: '1',
      name: 'Master node',
      type: 'master',
      address: `localhost:${RPC_PORT}`,
      status: 'on',
    },
  ]
  //   {
  //     id: 2,
  //     name: 'Worker #1247',
  //     type: 'slave',
  //     address: 'localhost:3002',
  //     crawler: 'Playwright',
  //     status: 'on'
  //   }
  // ];

  const toNode = (data: any) => ({
    name: data.client ?? "Unknown",
    ...data.data,
  })
  
  const dynamicNodes = () => (nodes.concat(clients.map(client => toNode(client))))

  export const getNodes = (): Array<StellarNode> => {
    return dynamicNodes();
  };
  
  export const getNodeById = (id: number): StellarNode | undefined => {
    return clients.find(node => node.id === id);
  };
  
  export const createNode = (node: StellarNode): void => {
    clients.push(node);
  };
  
  export const updateNode = (node: StellarNode): void => {
    const index = clients.findIndex(u => u.id === node.id);
    clients[index] = node;
  };
  
  export const deleteNode = (id: number): void => {
    const index = clients.findIndex(u => u.id === id);
    clients.splice(index, 1);
  };