import React, { useState } from 'react';
import { useSchedule } from './ScheduleContext';

function ScheduleForm() {
  const { addActivity } = useSchedule();
  const [subject, setSubject] = useState('');
  const [room, setRoom] = useState('');
  const [day, setDay] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newActivity = { subject, room, day, time };
    addActivity(newActivity);
    setSubject('');
    setRoom('');
    setDay('');
    setTime('');
  };

  return (
    <div className="ScheduleForm">
      <h2>Přidat novou hodinu/aktivitu</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="subject"
          placeholder="Předmět"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
        />
        <input
          type="text"
          name="room"
          placeholder="Učebna"
          value={room}
          onChange={(e) => setRoom(e.target.value)}
          required
        />
        <select
          name="day"
          value={day}
          onChange={(e) => setDay(e.target.value)}
          required
        >
          <option value="">Vyberte den</option>
          <option value="monday">Pondělí</option>
          <option value="tuesday">Úterý</option>
          <option value="wednesday">Středa</option>
          <option value="thursday">Čtvrtek</option>
          <option value="friday">Pátek</option>
        </select>
        <input
          type="time"
          name="time"
          placeholder="Čas"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />
        <button type="submit">Přidat</button>
      </form>
   </div>
  );
}

export default ScheduleForm;