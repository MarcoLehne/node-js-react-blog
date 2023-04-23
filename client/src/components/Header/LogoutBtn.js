import React from "react";
import { store } from "../../store/configureStore";
import { setIsLoggedIn } from "../../reducers/slicers/isLoggedInSlice";
import { useSelector } from "react-redux";
import { setUserName } from "../../reducers/slicers/userName";
import "./LogoutBtn.css";

function LogoutBtn(){

    const userName = useSelector(state => state.userName);

    const handleLogoutClick = async (event) => {
        event.preventDefault();
        const data = {
            name : userName
        };
        
        const response = await fetch("/internal/logout", {
            method:"POST",    
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const result = await response.json();

        if(result.status === "success") { 
            store.dispatch(setIsLoggedIn(false));   
            store.dispatch(setUserName(null));

            console.log(userName)

            setTimeout(() => {
                window.location.href = `/`;  
            }, 0);
        }
    };

    return (
        <a href="./" onClick={handleLogoutClick}>
            <h1 id="logout-btn">
                Logout
            </h1>
        </a>
    )
}

export default LogoutBtn;