import React from 'react';
import {
  Typography,
  Box,
  Paper,
  Stack,
} from '@mui/material';

const Analytics: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Analytics
      </Typography>
      
      <Stack spacing={3}>
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={3}>
          <Paper sx={{ p: 3, height: 300, flex: 1 }}>
            <Typography variant="h6" gutterBottom>
              Sales Chart
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Sales analytics chart would go here...
            </Typography>
          </Paper>
          <Paper sx={{ p: 3, height: 300, flex: 1 }}>
            <Typography variant="h6" gutterBottom>
              User Growth
            </Typography>
            <Typography variant="body2" color="text.secondary">
              User growth chart would go here...
            </Typography>
          </Paper>
        </Stack>
        <Paper sx={{ p: 3, height: 300 }}>
          <Typography variant="h6" gutterBottom>
            Revenue Analytics
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Detailed revenue analytics would go here...
          </Typography>
        </Paper>
      </Stack>
    </Box>
  );
};

export default Analytics;