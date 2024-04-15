import { Router } from 'express';
import homeRouter from './home.routes';
import nodesRouter from '../nodes/nodes.routes';

// Create a new Router instance
const router = Router();

// Mount the routers
router.use('/', homeRouter);
router.use('/api/nodes', nodesRouter);

export default router;