import React, {useState} from "react";
import { useDispatch } from "react-redux";
import "./SignUpForm.css";
import { setIsLoggedIn } from "../../reducers/slicers/isLoggedInSlice";
import { setUserName } from "../../reducers/slicers/userName";
import "./SignUpForm.css";


function SignUpForm(){

    const dispatch = useDispatch();

    const [userExists, setUserExists] = useState(false);
    const [illegalChars, setIllegalChars] = useState(false);

    const handleSubmit = async (event) => {

        event.preventDefault();
        setUserExists(false);

        const name = event.target.name.value;
        if(/^[A-Za-z]+$/.test(name)) {
            try {
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
    
                if (!response.ok) {
                    throw new Error('User already exists');
                }
    
                const result = await response.json();
                
                if(result.status === "success") {      
                    try {
                        const response = await fetch("/internal/login", {
                            method:"POST",    
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(data)
                        });
            
                        if (! response.ok) {
                             throw new Error('Server responded with an error');
                        }
            
                        dispatch(setIsLoggedIn(true));
                        dispatch(setUserName(data.name));
                        setTimeout(() => {
                            window.location.href = `/${data.name}`;  
                        }, 0);
                    } catch (error) {
                        console.log("")
                    }
                }
            } catch(error){
                setUserExists(true);
            }
        } else {
            setIllegalChars(true);
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
            {userExists 
                ? <h1 id="user-exists">User already exists. Please choose a different name</h1>
                : illegalChars
                    ? <h1 id="illegal-chars">Please only use alphabet characters for the username</h1>
                    : null
            }
        </form>
    )
}

export default SignUpForm;