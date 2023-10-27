import React, { useState } from 'react';
export function SignUp() {

    const [user, setUser] = useState({
        name: '',
        surname: '',
        email: '',
        password: '',
    });
    const [message, setMessage] = useState(null); 
    const url = 'http://localhost:4000/users';
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const existingUserRes = await fetch(url, {
                method: "GET"
            });
            if(!existingUserRes.ok){
                console.error("Request failed with status:", existingUserRes.status);
            }

            const existingUsers = await existingUserRes.json();
            console.log("Existing Users:", existingUsers);
            if(existingUsers.some((existingUser) => existingUser.email === user.email)){
                setMessage('User with the same email already exists.');
               
            }else{
                const res = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(user),
                });

                const data = await res.json();
            console.log("POST" + data);
            if (res.status === 200) {
                setMessage('User registration successful!'); 
            } else {
                setMessage('User registration failed. Please try again.'); 
            }
            
            } 
            
        }catch (error) {
            console.error('Error adding a new user:', error);
            setMessage('An error occurred while registering. Please try again.');

            }
      
    };

    return(
        <>
        <form className="sign-up-form" onSubmit={handleSubmit}>
        <h2>or Sign up here</h2>
        <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={user.name}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    placeholder="Surname"
                    name="surname"
                    value={user.surname}
                    onChange={handleChange}
                />
                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={user.password}
                    onChange={handleChange}
                />
            <button>Submit</button>
        </form>
        {message && <div>{message}</div>} 
        
        </>
    )
}