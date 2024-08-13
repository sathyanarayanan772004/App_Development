import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';
import './ProgressTrackingPage.css'; // Assuming you have CSS for styling

ChartJS.register(LineElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const ProgressTrackingPage = () => {
  // Example progress data - replace with your actual data
  const progressData = [
    { date: '2024-01-01', workout: 'Cardio', duration: 30 },
    { date: '2024-02-01', workout: 'Strength', duration: 45 },
    { date: '2024-03-01', workout: 'Cardio', duration: 35 },
    { date: '2024-04-01', workout: 'Strength', duration: 50 },
    // Add more data as needed
  ];

  const chartData = {
    labels: progressData.map(item => item.date),
    datasets: [
      {
        label: 'Workout Duration',
        data: progressData.map(item => item.duration),
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
      },
    ],
  };

  return (
    <div className="progress-tracking-container">
      <h1>Progress Tracking</h1>
      <div className="progress-summary">
        <h2>Workout Summary</h2>
        <ul>
          {progressData.map((item, index) => (
            <li key={index}>
              <strong>{item.date}</strong>: {item.workout} - {item.duration} mins
            </li>
          ))}
        </ul>
      </div>
      <div className="progress-chart">
        <Line data={chartData} />
      </div>
    </div>
  );
};

export default ProgressTrackingPage;
