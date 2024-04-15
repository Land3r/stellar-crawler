import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import router from './routes';
import './ipc'
import db, { createDbIfNeeded } from './db'
import { API_PORT } from './config';

createDbIfNeeded()

// Create Express server
const app = express(); // New express instance

// Express configuration
app.use(cors()); // Enable CORS
app.use(helmet()); // Enable Helmet
app.use(morgan('dev')); // Enable Morgan
// app.disable('etag'); // Disable cache

app.use('/', router)

// Start Express server
app.listen(API_PORT, () => {
  // Callback function when server is successfully started
  console.log(`Server started at http://localhost:${API_PORT}`);
});

// Export Express app
export default app;