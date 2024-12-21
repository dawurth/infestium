import express from 'express';
import bodyParser from 'body-parser';
import agentRoutes from './routes/agents';

const app = express();
app.use(bodyParser.json());
app.use('/agents', agentRoutes);

export default app;