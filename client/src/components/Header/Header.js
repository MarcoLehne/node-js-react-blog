import React from "react";
import LoginBtn from "./LoginBtn";
import SignUpBtn from "./SignUpBtn";
import LogoutBtn from "./LogoutBtn";
import HomeBtn from "./HomeBtn";
import { useSelector } from "react-redux";

function Header() {

    const isLoggedIn = useSelector(state => state.isLoggedIn);
    
    return (
        <div id="header-div">
            {isLoggedIn
                ? <LogoutBtn />
                : <LoginBtn />}
            {isLoggedIn
                ? null 
                : <SignUpBtn />}
            <HomeBtn />
        </div>
    )
}

export default Header;