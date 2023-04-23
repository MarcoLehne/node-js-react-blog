import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsLoggedIn } from "../../reducers/slicers/isLoggedInSlice";
import { setUserName } from "../../reducers/slicers/userName";
import "./LoginForm.css";

function LoginForm(){

    const dispatch = useDispatch();

    const [loginFailed, setLoginFailed] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {
            name : event.target.name.value,
            password : event.target.password.value
        };
        
        try {
            const response = await fetch("/internal/login", {
                method:"POST",    
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                 throw new Error('Server responded with an error');
            }

            dispatch(setIsLoggedIn(true));
            dispatch(setUserName(data.name));
            setTimeout(() => {
                window.location.href = `/${data.name}`;  
            }, 0);
        } catch (error) {
            setLoginFailed(true);
        }
    }


    return (
        <form method="POST" onSubmit={handleSubmit}>
            <label htmlFor="name">Username:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />

            <input type="submit" value="Submit"></input>
            {loginFailed
                ? <h1 id="login-failed">Username or password is wrong</h1>
                : null
            }
            
        </form>
    )
}

export default LoginForm;
