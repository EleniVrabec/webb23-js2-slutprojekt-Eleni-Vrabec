import { SignUp } from "./SignUp"
import { LogIn } from "./LogIn";
import { faTrash, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from "react";

export function  UserLogIn({onClose, onLogin}) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userName, setUserName] = useState('');
    const [loginError, setLoginError] = useState("");
    const userStyle = {
        position: 'fixed',
        top: '2%', 
        right: '30%', 
        left:"20%",
        background: 'lightgrey',
        width: "50%",
        padding:"20px",
        paddingLeft:"50px",
        borderRadius: "20px",
        zIndex: 999, 
        height:"100vh",
        overflowY: 'scroll',
        display:"flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        
      }; 

      async function handleLogin(email) {
        try {
            const response = await fetch(`http://localhost:4000/users/${email}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (response.status === 200) {
                const data = await response.json();
                setIsLoggedIn(true);
                setUserName(data.name);
                //onClose();
              } else if (response.status === 404) {
                setLoginError("User not found. Please sign up.");
              } else {
                setLoginError("An error occurred while logging in. Please try again later.");
              }
            } catch (error) {
              console.error("Error logging in:", error);
              setLoginError("An error occurred while logging in. Please try again later.");
            }
        }

    return(
        <div style={userStyle}>
             <button className='btn-X' onClick={onClose}><FontAwesomeIcon  icon={faXmark}/></button>
             <div className="user-login">
            {isLoggedIn ? (
                <div>
                    <p>Welcome, {userName}!</p>
            
                </div>
            ) : (
                <div>
                    <LogIn onLogin={handleLogin} />
                    <SignUp />
                    {loginError && <p>{loginError}</p>}
                </div>
            )}
        </div>
        </div>
    )
    
}