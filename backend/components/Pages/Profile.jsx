import React, { useState } from 'react';
import { Container, Typography, Avatar, Card, CardContent, Grid, Tabs, Tab, Box, TextField, Button, Snackbar } from '@mui/material';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import './Profile.css';

export const Profile = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [profilePicture, setProfilePicture] = useState('path/to/profile/picture.jpg'); // Ensure this path is correct or use a placeholder image
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const userProfile = {
    name: 'John Doe',
    age: 28,
    id: '123456',
    weight: 75,
    height: 175,
    goal: 'Build Muscle',
  };

  const progressData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Weight (kg)',
        data: [70, 72, 73, 74, 75, 76, 75.5],
        borderColor: '#6f55f2',
        backgroundColor: 'rgba(111, 85, 242, 0.2)',
        fill: true,
      },
    ],
  };

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  const handleUpdateClick = () => {
    setSnackbarMessage('Profile updated successfully!');
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleProfilePictureChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfilePicture(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const renderTabContent = () => {
    switch (tabIndex) {
      case 0:
        return (
          <Box p={3}>
            <Typography variant="h6" fontWeight="bold">Profile Settings</Typography>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField fullWidth label="First Name" defaultValue={userProfile.name.split(' ')[0]} />
              </Grid>
              <Grid item xs={6}>
                <TextField fullWidth label="Last Name" defaultValue={userProfile.name.split(' ')[1]} />
              </Grid>
              <Grid item xs={6}>
                <TextField fullWidth label="Age" defaultValue={userProfile.age} />
              </Grid>
              <Grid item xs={6}>
                <TextField fullWidth label="Height" defaultValue={`${userProfile.height} cm`} />
              </Grid>
              <Grid item xs={6}>
                <TextField fullWidth label="Weight" defaultValue={`${userProfile.weight} kg`} />
              </Grid>
              <Grid item xs={6}>
                <TextField fullWidth label="Blood Group" defaultValue="O+" />
              </Grid>
              <Grid item xs={6}>
                <TextField fullWidth label="Medical Condition" defaultValue="None" />
              </Grid>
              <Grid item xs={6}>
                <TextField fullWidth label="Date of Joining" defaultValue="01-01-2023" />
              </Grid>
              <Grid item xs={6}>
                <TextField fullWidth label="Phone Number" defaultValue="(123) 456-7890" />
              </Grid>
              <Grid item xs={6}>
                <TextField fullWidth label="Email Address" defaultValue="john.doe@example.com" />
              </Grid>
              <Grid item xs={6}>
                <TextField fullWidth label="City" defaultValue="New York" />
              </Grid>
              <Grid item xs={6}>
                <TextField fullWidth label="Country" defaultValue="USA" />
              </Grid>
            </Grid>
            <Box mt={2}>
              <Button
                variant="contained"
                color="primary"
                className="update-button"
                onClick={handleUpdateClick}
              >
                Update
              </Button>
            </Box>
          </Box>
        );
      case 1:
        return (
          <Box p={3}>
            <Typography variant="h6" fontWeight="bold">Progress Tracking</Typography>
            <Line data={progressData} />
            <Typography variant="body2" mt={2}>
              This graph shows your weight progression over the past few months, helping you track your fitness journey.
            </Typography>
          </Box>
        );
      case 2:
        return (
          <Box p={3}>
            <Typography variant="h6" fontWeight="bold">Achievements</Typography>
            <Typography variant="body1" mt={2}>1. Completed 100kg Deadlift</Typography>
            <Typography variant="body1">2. Ran 5km under 25 minutes</Typography>
            <Typography variant="body1">3. Consistent workouts for 6 months</Typography>
          </Box>
        );
      default:
        return null;
    }
  };

  return (
    <Container className="profile-container">
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card className="profile-card">
            <CardContent>
              <Box display="flex" flexDirection="column" alignItems="center">
                <Avatar
                  src={profilePicture}
                  alt={userProfile.name}
                  className="profile-avatar"
                  sx={{ width: 150, height: 150 }}
                />
                <Typography variant="h5" fontWeight="bold" mt={2}>{userProfile.name}</Typography>
                <Typography variant="body1">ID: {userProfile.id}</Typography>
                <br/>
                <Button
                  variant="contained"
                  component="label"
                  color="primary"
                  className="change-picture-button"
                >
                  Change Profile Picture
                  <input
                    type="file"
                    hidden
                    accept="image/*"
                    onChange={handleProfilePictureChange}
                  />
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={8}>
          <Card className="right-block-card">
            <CardContent>
              <Tabs value={tabIndex} onChange={handleTabChange} indicatorColor="primary" textColor="primary">
                <Tab label="Profile Settings" />
                <Tab label="Progress Tracking" />
                <Tab label="Achievements" />
              </Tabs>
              {renderTabContent()}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        message={snackbarMessage}
      />
    </Container>
  );
};

export default Profile;