import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Divider, AppBar, Typography, Box, Toolbar, Avatar } from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useNavigate } from 'react-router-dom';
import UserControl from './UserControl';

const drawerWidth = 240;

function AdminDashboard() {
  const [selectedTab, setSelectedTab] = useState(0);
  const navigate = useNavigate();

  const handleTabChange = (tabIndex) => {
    setSelectedTab(tabIndex);
  };

  const handleLogout = () => {
    // Add any logout logic here if necessary (e.g., clearing auth tokens)
    navigate('/'); // Navigate to the login page
  };

  return (
    <Box sx={{ display: 'flex' }}>
        <Typography variant="h5" noWrap component="div">
          Admin Dashboard
        </Typography>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: '#A9A9A8', // Light grey background for the drawer
          },
        }}
      >
        <Toolbar />
        <Divider />
        <List>
          <ListItem button onClick={() => handleTabChange(0)} sx={{ backgroundColor: selectedTab === 0 ? '#e0e0e0' : 'inherit' }}>
            <ListItemIcon>
              <PeopleIcon color={selectedTab === 0 ? 'primary' : 'inherit'} />
            </ListItemIcon>
            <ListItemText primary="User Control" />
          </ListItem>
          <ListItem button onClick={() => handleTabChange(1)} sx={{ backgroundColor: selectedTab === 1 ? '#e0e0e0' : 'inherit' }}>
            <ListItemIcon>
              <AccountBoxIcon color={selectedTab === 1 ? 'primary' : 'inherit'} />
            </ListItemIcon>
            <ListItemText primary="My Profile" />
          </ListItem>
          <ListItem button onClick={handleLogout}>
            <ListItemIcon>
              <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
        <Divider />
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
        {selectedTab === 0 && (
          <>
            <Typography variant="h4" gutterBottom>User Control Panel</Typography>
            <UserControl />
          </>
        )}
        {selectedTab === 1 && (
          <>
            <Typography variant="h4" gutterBottom>My Profile</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
              <Avatar sx={{ width: 80, height: 80, mr: 3 }}>T</Avatar>
              <Box>
                <Typography variant="h6">Name: Toji</Typography>
                <Typography variant="body1">Email: admin@example.com</Typography>
                <Typography variant="body1">Role: Admin</Typography>
                <Typography variant="body1">Last Login: July 28, 2024</Typography>
              </Box>
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
}

export default AdminDashboard;