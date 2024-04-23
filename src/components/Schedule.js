import './App.css';

function Schedule({ Schedule, deleteSchedule }) {
  return (
    <div className="Schedule">
      <p>{Schedule.nazev}</p>
      <p>{Schedule.date}</p>
      <p>{Schedule.time}</p>
      <p>{Schedule.obsah}</p>
      <button onClick={() => deleteSchedule(Schedule.id)}>Odebrat Hodinu</button>
    </div>
  );
}

export default Schedule;