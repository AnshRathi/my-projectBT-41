import React, { useEffect, useState } from 'react';

function Prescription() {
  const [prescriptions, setPrescriptions] = useState([]);
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    // Get all prescriptions
    const allPrescriptions = JSON.parse(localStorage.getItem('prescriptions')) || [];

    // Filter prescriptions for the logged-in user
    const userPrescriptions = allPrescriptions.filter(
      prescription => prescription.email === user?.email
    );

    setPrescriptions(userPrescriptions);
  }, []);

  return (
    <div>
      <h2>{user?.name}'s Prescriptions</h2>
      {prescriptions.length === 0 ? (
        <p>No prescriptions found.</p>
      ) : (
        <ul>
          {prescriptions.map((prescription, index) => (
            <li key={index}>
              <strong>Date:</strong> {prescription.date}<br />
              <strong>Doctor:</strong> {prescription.doctorName}<br />
              <strong>Medicines:</strong> {prescription.medicines.join(', ')}<br />
              <strong>Notes:</strong> {prescription.notes}
              <hr />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Prescription;
