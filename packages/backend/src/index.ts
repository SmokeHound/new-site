import express, { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(helmet());
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true
}));
app.use(express.json());

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.get('/api/dashboard/stats', (req, res) => {
  res.json({
    totalOrders: 1234,
    totalUsers: 567,
    revenue: 89012,
    activeUsers: 234
  });
});

app.get('/api/users', (req, res) => {
  res.json([
    { id: 1, name: 'John Doe', email: 'john@example.com', status: 'active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'active' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', status: 'inactive' }
  ]);
});

app.get('/api/orders', (req, res) => {
  res.json([
    { id: 1, customer: 'John Doe', amount: 299.99, status: 'completed', date: '2024-01-15' },
    { id: 2, customer: 'Jane Smith', amount: 149.50, status: 'pending', date: '2024-01-16' },
    { id: 3, customer: 'Bob Johnson', amount: 89.99, status: 'shipped', date: '2024-01-17' }
  ]);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;