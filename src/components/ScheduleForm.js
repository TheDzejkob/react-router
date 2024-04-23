import './App.css';

function ScheduleForm({ Schedule, deleteSchedule }) {
  return (
    <form onSubmit={handleSubmit}>
     <input type='text' value={nazev} onChange={onNazevChange} placeholder='Nazev Hodiny/Učiva'></input>
     <input type='date' value={date} onChange={onDateChange}></input>
     <input type='time' value={time} onChange={onTimeChange} ></input>
     <input type='text' value={obsah} onChange={onObsahChange} placeholder='Popisek'></input>
     <button type='submit' >Pridat hodinu/ucivo</button>
    </form>
  );
}

export default ScheduleForm;