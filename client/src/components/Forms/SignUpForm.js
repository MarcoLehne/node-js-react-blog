import React from "react";
import "./SignUpForm.css";

function SignUpForm(){

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

        if(result.status === "success") {
            window.location.href = `/${data.name}`;      
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