import React from "react";
import store from "../../store/configureStore";
import { setIsLoggedIn } from "../../reducers/slicers/isLoggedInSlice";
import "./LoginForm.css";

function LoginForm(){

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {
            name : event.target.name.value,
            password : event.target.password.value
        };
        
        const response = await fetch("/internal/login", {
            method:"POST",    
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const result = await response.json();


        if(result.status === "success") { 
            store.dispatch(setIsLoggedIn(true));   
            setTimeout(() => {
                window.location.href = `/${data.name}`;  
            }, 0);
        }
    }


    return (
        <form method="POST" onSubmit={handleSubmit}>
            <label htmlFor="name">Username:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />

            <input type="submit" value="Submit"></input>
        </form>
    )
}

export default LoginForm;