import { Router } from 'express';
import {
  createNodeController,
  deleteNodeController,
  getNodeByIdController,
  getNodesController,
  updateNodeController
} from './nodes.controller';

// New Router instance
const router = Router();

// Nodes routes
router.get('/', getNodesController);
router.get('/:id', getNodeByIdController);
router.post(
  '/', // path
  createNodeController // controller
);
router.put(
  '/:id', // path
  updateNodeController // controller
);
router.delete('/:id', deleteNodeController);

export default router;