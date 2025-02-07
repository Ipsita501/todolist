import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Loginsignup.css';

import user_icon from '../assets/user.png';
import email_icon from '../assets/email.png';
import password_icon from '../assets/password.png';

const Loginsignup = () => {
    const inputRef = useRef();
    const [action, setAction] = useState("Sign Up");
    const navigate = useNavigate(); // Initialize useNavigate

    const handleInput = () => {
        console.dir(inputRef.current.value);
    };

    // Function to handle login/signup and navigate to To-Do page
    const handleAuth = () => {
        // Here, you can add actual authentication logic
        alert(`${action} Successful!`); // Show success message (replace this with real authentication)
        navigate("/Todopage"); // Navigate to the To-Do page
    };

    return (
        <div className="loginsignup">
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                {action === "Login" ? <div></div> : (
                    <div className="input">
                        <img src={user_icon} alt="" />
                        <input type="text" placeholder="Name" onChange={handleInput} ref={inputRef} />
                    </div>
                )}
                <div className="input">
                    <img src={email_icon} alt="" />
                    <input type="email" placeholder="john@gmail.com" onChange={handleInput} ref={inputRef} />
                </div>
                <div className="input">
                    <img src={password_icon} alt="" />
                    <input type="password" placeholder="Password" onChange={handleInput} ref={inputRef} />
                </div>
            </div>
            <div className="submitcontainer">
                <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => setAction("Sign Up")}>
                    Sign Up
                </div>
                <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => setAction("Login")}>
                    Login
                </div>
            </div>
            <button className="auth-btn" onClick={handleAuth}> {/* Call handleAuth */}
                {action}
            </button>
        </div>
    );
};

export default Loginsignup;
