import React from 'react';
import {
  Paper,
  Typography,
  Box,
  Card,
  CardContent,
  Stack,
} from '@mui/material';
import {
  TrendingUp,
  People,
  ShoppingCart,
  AttachMoney,
} from '@mui/icons-material';

const StatCard: React.FC<{
  title: string;
  value: string | number;
  icon: React.ReactNode;
  color: string;
}> = ({ title, value, icon, color }) => (
  <Card sx={{ height: '100%' }}>
    <CardContent>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 48,
            height: 48,
            borderRadius: 1,
            backgroundColor: color,
            color: 'white',
            mr: 2,
          }}
        >
          {icon}
        </Box>
        <Box>
          <Typography variant="h4" component="div" fontWeight="bold">
            {value}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {title}
          </Typography>
        </Box>
      </Box>
    </CardContent>
  </Card>
);

const Dashboard: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      
      <Stack spacing={3}>
        <Stack 
          direction={{ xs: 'column', sm: 'row' }} 
          spacing={3}
          sx={{ 
            '& > *': { 
              flex: { xs: 'none', sm: 1 }
            }
          }}
        >
          <StatCard
            title="Total Orders"
            value="1,234"
            icon={<ShoppingCart />}
            color="#1976d2"
          />
          <StatCard
            title="Total Users"
            value="567"
            icon={<People />}
            color="#2e7d32"
          />
          <StatCard
            title="Revenue"
            value="$89,012"
            icon={<AttachMoney />}
            color="#ed6c02"
          />
          <StatCard
            title="Active Users"
            value="234"
            icon={<TrendingUp />}
            color="#9c27b0"
          />
        </Stack>

        <Stack direction={{ xs: 'column', md: 'row' }} spacing={3}>
          <Paper sx={{ p: 3, height: 400, flex: 2 }}>
            <Typography variant="h6" gutterBottom>
              Recent Activity
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Charts and recent activity would go here...
            </Typography>
          </Paper>
          <Paper sx={{ p: 3, height: 400, flex: 1 }}>
            <Typography variant="h6" gutterBottom>
              Quick Stats
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Additional statistics and information would go here...
            </Typography>
          </Paper>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Dashboard;