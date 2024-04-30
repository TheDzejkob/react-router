import React from 'react';
import { useParams } from 'react-router-dom';
import { useSchedule } from './ScheduleContext';

function DayView() {
  const { day } = useParams();
  const { schedule } = useSchedule();

  const filteredActivities = schedule.filter((activity) => activity.day === day);

  return (
    <div className="DayView">
      <h2>Rozvrh pro {day}</h2>
      {filteredActivities.length > 0 ? (
        <ul>
          {filteredActivities.map((activity, index) => (
            <li key={index}>
              <strong>{activity.subject}</strong> - {activity.time} - {activity.room}
            </li>
          ))}
        </ul>
      ) : (
        <p>Žádné aktivity neplánovány pro tento den.</p>
      )}
    </div>
  );
}

export default DayView;