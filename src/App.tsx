import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import VoyageProgress from './components/VoyageProgress';

function App() {
  return (
    <VoyageProgress
      portOfLoading="Copenhagen"
      portOfDischarge="Oslo"
      departureTime="2022-12-12T10:00:00.822Z"
      arrivalTime="2022-12-12T19:00:00.822Z"
    />
  );
}

export default App;
