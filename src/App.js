import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import DayView from './DayView';
import ScheduleForm from './ScheduleForm';
import { ScheduleProvider } from './ScheduleContext';
import './App.css';

function App() {
  return (
    <Router>
      <ScheduleProvider>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<ScheduleForm />} />
            <Route path="/:day" element={<DayView />} />
          </Routes>
        </div>
      </ScheduleProvider>
    </Router>
  );
}

export default App;