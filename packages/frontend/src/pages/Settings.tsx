import React from 'react';
import {
  Typography,
  Box,
  Paper,
  List,
  ListItem,
  ListItemText,
  Switch,
  Divider,
} from '@mui/material';

const Settings: React.FC = () => {
  const [darkMode, setDarkMode] = React.useState(true);
  const [notifications, setNotifications] = React.useState(true);
  const [emailAlerts, setEmailAlerts] = React.useState(false);

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Settings
      </Typography>
      
      <Paper sx={{ mt: 2 }}>
        <List>
          <ListItem>
            <ListItemText 
              primary="Dark Mode" 
              secondary="Toggle dark/light theme"
            />
            <Switch
              checked={darkMode}
              onChange={(e) => setDarkMode(e.target.checked)}
            />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText 
              primary="Notifications" 
              secondary="Enable push notifications"
            />
            <Switch
              checked={notifications}
              onChange={(e) => setNotifications(e.target.checked)}
            />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText 
              primary="Email Alerts" 
              secondary="Receive alerts via email"
            />
            <Switch
              checked={emailAlerts}
              onChange={(e) => setEmailAlerts(e.target.checked)}
            />
          </ListItem>
        </List>
      </Paper>
    </Box>
  );
};

export default Settings;