import React, { useState } from 'react';

const doctors = ['Dr. Aman', 'Dr. Gupta', 'Dr. Aanchal'];

export default function AppointmentBooking() {
  const [doctor, setDoctor] = useState({name: '', date: '', time: ''});

  const handleChange = (e) => {
    setDoctor({ ...doctor, [e.target.name]: e.target.value });
  };
  let user = JSON.parse(localStorage.getItem('user'));

  const handleSubmit = e => {
    e.preventDefault();
    let appointmentList = JSON.parse(localStorage.getItem('appointments')) || [];
    let appointmentWithUser = {...doctor, email: user.email};
    appointmentList.push(appointmentWithUser)
    localStorage.setItem('appointments', JSON.stringify(appointmentList));
    alert(`Appointment Booked successfully with ${doctor.name}`);
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 300, margin: 'auto' }}>
      <label>
        Doctor:
        <select name="name" value={doctor.name} onChange={handleChange} required>
          <option value="">Select Doctor</option>
          {doctors.map(d => (
            <option key={d} value={d}>{d}</option>
          ))}
        </select>
      </label>
      <br /><br />
      <label>
        Date:
        <input type="date" name="date" value={doctor.date} onChange={handleChange} required />
      </label>
      <br /><br />
      <label>
        Time:
        <input type="time" name="time" value={doctor.time} onChange={handleChange} required />
      </label>
      <br /><br />
      <button type="submit">Book Appointment</button>
    </form>
  );
}