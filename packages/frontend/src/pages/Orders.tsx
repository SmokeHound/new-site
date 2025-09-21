import React from 'react';
import {
  Typography,
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
} from '@mui/material';

const orders = [
  { id: 1, customer: 'John Doe', amount: 299.99, status: 'completed', date: '2024-01-15' },
  { id: 2, customer: 'Jane Smith', amount: 149.50, status: 'pending', date: '2024-01-16' },
  { id: 3, customer: 'Bob Johnson', amount: 89.99, status: 'shipped', date: '2024-01-17' },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'completed': return 'success';
    case 'pending': return 'warning';
    case 'shipped': return 'info';
    default: return 'default';
  }
};

const Orders: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Orders
      </Typography>
      
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Order ID</TableCell>
              <TableCell>Customer</TableCell>
              <TableCell align="right">Amount</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id} hover>
                <TableCell>#{order.id}</TableCell>
                <TableCell>{order.customer}</TableCell>
                <TableCell align="right">${order.amount}</TableCell>
                <TableCell>
                  <Chip 
                    label={order.status} 
                    color={getStatusColor(order.status) as any}
                    size="small"
                  />
                </TableCell>
                <TableCell>{order.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Orders;