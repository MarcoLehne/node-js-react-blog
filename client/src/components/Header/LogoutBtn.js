import React from "react";

function LogoutBtn({onLogout}){

    const handleLogoutClick = (event) => {
        event.preventDefault(); // Prevents the default anchor tag behavior of navigating to the href
        onLogout(() => {
            window.location.href = "./";
        }); 
        console.log("clicked")
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