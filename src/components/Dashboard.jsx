import { useEffect, useState } from "react";

export default function Dashboard() {
    const [appointments, setAppointments] = useState([]);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            const parsedUser = JSON.parse(storedUser);
            setUser(parsedUser);

            const allAppointments = JSON.parse(localStorage.getItem('appointments')) || [];
            const userAppointments = allAppointments.filter(
                appointment => appointment.email === parsedUser.email
            );
            setAppointments(userAppointments);
        }
    }, []);

    if (!user) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h1>{user.name}</h1>
            <ul>
                {appointments.map((appointment, index) => (
                    <li key={index}>{appointment.doctorName}</li>
                ))}
            </ul>
        </div>
    );
}
