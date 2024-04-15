import { Request, Response } from 'express';
import {
  getNodes,
  getNodeById,
  createNode,
  updateNode,
  deleteNode
} from './nodes.models';
import { APIResponse } from '../models/response';
import { StellarNode } from '../../../stellar-crawler/src/types/StellarNode';

export const getNodesController = (req: Request, res: Response): void => {
  const nodes: StellarNode[] = getNodes();
  const rawRes: APIResponse<StellarNode> = {
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
  }
  res.status(200).json(rawRes);
};

export const getNodeByIdController = (req: Request, res: Response): void => {
  const id: number = parseInt(req.params.id, 10);
  const node: StellarNode | undefined = getNodeById(id);
  if (node) {
    res.status(200).json({ user: node });
  } else {
    res.status(404).json({ message: 'Node not found' });
  }
};

export const createNodeController = (req: Request, res: Response): void => {
  const node: StellarNode = req.body;
  createNode(node);
  res.status(201).json({
    message: 'Node created',
    node,
  });
};

export const updateNodeController = (req: Request, res: Response): void => {
  const id: string = req.params.id;
  const nodeUpdate: StellarNode = req.body;
  nodeUpdate.id = id;
  updateNode(nodeUpdate);
  res.status(200).json({
    message: 'Node updated',
    node: nodeUpdate,
  });
};

export const deleteNodeController = (req: Request, res: Response): void => {
  const id: number = parseInt(req.params.id, 10);
  deleteNode(id);
  res.status(200).json({
    message: `Node ${id} deleted`,
  });
};