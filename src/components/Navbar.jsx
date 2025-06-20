import { Link, useNavigate } from "react-router-dom";

function Navbar({ isLoggedIn, setIsLoggedIn }) {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem('user'); // Ensure user is removed from storage
    setIsLoggedIn(false);
    navigate('/login'); // Or use navigate('/') if you want to go home
  }

  return (
    <nav style={{ padding: '10px', backgroundColor: "white" }}>
      <Link style={{ marginRight: "10px" }} to="/home">Home</Link>
      <Link style={{ marginRight: "10px" }} to="/about">About</Link>

      {isLoggedIn && (
        <>
          <Link style={{ marginRight: "10px" }} to="/book-appointment">Book Appointment</Link>
          <Link style={{ marginRight: "10px" }} to="/dashboard">Dashboard</Link>
          <Link style={{ marginRight: "10px" }} to="/prescription">Prescription</Link>
        </>
      )}

      {isLoggedIn ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <>
          <Link style={{ marginRight: "10px" }} to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      )}
    </nav>
  );
}

export default Navbar;
