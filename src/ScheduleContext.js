import React, { createContext, useState, useContext, useEffect } from 'react';

const ScheduleContext = createContext();

export const useSchedule = () => {
  return useContext(ScheduleContext);
};

export const ScheduleProvider = ({ children }) => {
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    const savedSchedule = localStorage.getItem('schedule');
    if (savedSchedule) {
      setSchedule(JSON.parse(savedSchedule));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('schedule', JSON.stringify(schedule));
  }, [schedule]);

  const addActivity = (activity) => {
    setSchedule([...schedule, activity]);
  };

  return (
    <ScheduleContext.Provider value={{ schedule, addActivity }}>
      {children}
    </ScheduleContext.Provider>
  );
};
export default ScheduleContext;
