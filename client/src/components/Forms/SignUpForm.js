import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import store from "../../store/configureStore";

import "./SignUpForm.css";
import { setIsLoggedIn } from "../../reducers/slicers/isLoggedInSlice";
import { setUserName } from "../../reducers/slicers/userName";
import "./LoginForm.css";


function SignUpForm(){

    const dispatch = useDispatch();

    const isLoggedIn = useSelector((state) => state.isLoggedIn);
    const userName = useSelector((state) => state.userName);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {
            name : event.target.name.value,
            password : event.target.password.value
        };
            
        const response = await fetch("/internal/user/addUser", {
            method:"POST",    
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const result = await response.json();
            

        // here needs to be user already exists error 

        if(result.status === "success") {      
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
                // here needs to be some sort of error catching mechanism
            }
        }
           
    }

    return (
        <form method="POST" onSubmit={handleSubmit} action="/internal/user/addUser">
            <label htmlFor="name">Username:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />

            <label htmlFor="confirm-password">Confirm Password:</label>
            <input type="password" id="confirm-password" name="confirm-password" required />

            <input type="submit" value="Submit"></input>
        </form>
    )
}

export default SignUpForm;