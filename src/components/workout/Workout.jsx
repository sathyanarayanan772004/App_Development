import React, { useState } from 'react';
import { Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';
import WorkoutModal from './WorkoutModal';
import './Workout.css';

export const workout = [
  { id: 1, title: 'Push Up', img: require('../../assets/push-up.webp'), targetMuscle: 'Chest, Triceps', steps: 'Start in a plank position with your hands directly under your shoulders. Lower your body until your chest nearly touches the floor. Push yourself back up to the starting position.' },
  { id: 2, title: 'Jump Squat', img: require('../../assets/jump-squats.gif'), targetMuscle: 'Quads, Glutes', steps: 'Stand with feet hip-width apart. Lower your hips into a squat position. Jump up explosively from the squat position, then land softly and return to the squat position.' },  
  { id: 3, title: 'Lunges', img: require('../../assets/lunges.gif'), targetMuscle: 'Legs, Glutes', steps: 'Step forward with one leg and lower your hips until both knees are bent at about a 90-degree angle. Push back up to the starting position.' },
  { id: 4, title: 'Jumping Jack', img: require('../../assets/jumping-jacks.gif'), targetMuscle: 'Full Body', steps: 'Start with your feet together and hands at your sides. Jump up, spreading your legs and bringing your arms above your head. Return to the starting position.' },
  { id: 5, title: 'Crunches', img: require('../../assets/crunches.gif'), targetMuscle: 'Abdominals', steps: 'Lie on your back with knees bent and feet flat on the floor. Lift your upper body towards your knees while keeping your lower back on the floor.' },
  { id: 6, title: 'Deadlift', img: require('../../assets/deadlift.gif'), targetMuscle: 'Back, Legs', steps: 'Stand with feet hip-width apart. Bend at your hips and knees, grabbing the barbell. Lift the bar by straightening your hips and knees.' },
  { id: 7, title: 'Barbell Curl', img: require('../../assets/Barbell-Curl.gif'), targetMuscle: 'Biceps', steps: 'Stand with feet shoulder-width apart, holding a barbell with an underhand grip. Curl the bar towards your chest, keeping your elbows close to your body.' },
  { id: 8, title: 'Bench Press', img: require('../../assets/benchpress.gif'), targetMuscle: 'Chest, Triceps', steps: 'Lie on a bench with feet flat on the floor. Lower the barbell to your chest and press it back up.' },
  { id: 9, title: 'Sprint', img: require('../../assets/sprint.gif'), targetMuscle: 'Legs, Cardiovascular System', steps: 'Find a flat, open area. Sprint as fast as you can for 20-30 seconds. Rest for the same amount of time, then repeat.' },
  { id: 10, title: 'Bent Over Row', img: require('../../assets/bendover-row.gif'), targetMuscle: 'Back, Biceps', steps: 'Bend at the waist with knees slightly bent, holding a kettlebell. Pull the kettlebell towards your torso, keeping your back straight.' },
  { id: 11, title: 'Tricep Dips', img: require('../../assets/tricep-dips.gif'), targetMuscle: 'Triceps', steps: 'Use parallel bars or a bench. Lower your body by bending your elbows, then push back up to the starting position.' },
  { id: 12, title: 'Leg Press', img: require('../../assets/Leg-Press.gif'), targetMuscle: 'Legs', steps: 'Use a leg press machine. Push the platform away from you by extending your legs, then return to the starting position.' },
];

export const Workout = () => {
  const [selectedWorkout, setSelectedWorkout] = useState(null);

  const handleWorkoutClick = (workout) => {
    setSelectedWorkout(workout);
  };

  const handleCloseModal = () => {
    setSelectedWorkout(null);
  };

  return (
    <div>
      <br/>
      <Typography variant="h3" component="h1" align="center" fontWeight="bold" gutterBottom>
        WORKOUTS
      </Typography>

      <Grid container spacing={3} className="workout-grid">
        {workout.map((workout) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={workout.id}>
            <Card className="workout-card" onClick={() => handleWorkoutClick(workout)}>
              <CardMedia
                component="img"
                alt={workout.title}
                image={workout.img}
                sx={{ height: 220, objectFit: 'cover' }} // Ensures image covers the area
              />
              <CardContent>
                <Typography variant="h5" align="center" component="div">
                  {workout.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {selectedWorkout && (
        <WorkoutModal workout={selectedWorkout} onClose={handleCloseModal} />
      )}
    </div>
  );
};
