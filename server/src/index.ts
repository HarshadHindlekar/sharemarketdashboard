import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';

dotenv.config();

const app = express();
const port = Number(process.env.PORT) || 3000;

app.use(cors());
app.use(express.json());

app.get('/api/health', (_request, response) => {
  response.json({
    service: 'sharemarket-dashboard-server',
    status: 'ok',
    timestamp: new Date().toISOString()
  });
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
