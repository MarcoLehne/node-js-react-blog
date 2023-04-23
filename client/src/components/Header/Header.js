import React from "react";
import LoginBtn from "./LoginBtn";
import SignUpBtn from "./SignUpBtn";
import LogoutBtn from "./LogoutBtn";
import HomeBtn from "./HomeBtn";
import { useSelector } from "react-redux";
import "./Header.css";

function Header() {


    // this should cookie verify instead of using a global state.
    // otherwise after a refresh everything is gone
    const isLoggedIn = useSelector(state => state.isLoggedIn).value;

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