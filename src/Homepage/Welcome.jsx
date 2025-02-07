
import { useNavigate } from 'react-router-dom';
import './Welcome.css';

const Welcome = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/Loginsignup'); // Navigates to the registration page
  };

  return (
    <div className="welcome-page">
      <div className="welcome-page ">Welcome to Your To-Do Work</div>
      <br />
      <button className="start-button" onClick={handleStart}>
        Start
      </button>
    </div>
  );
};

export default Welcome;