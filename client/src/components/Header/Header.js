import React from "react";
import SignUpBtn from "./SignUpBtn";
import SignInBtn from "./SignInBtn";
import HomeBtn from "./HomeBtn";

function Header() {

    // this needs to have a sign in/sign up to sign out and home button
    // some routing needs to happen here

    return (
        <div id="header-div">


            {/* the buttons here can have condition for if current page is link xyz then hide */}

            <SignUpBtn />
            <SignInBtn />
            <HomeBtn />
            {/* 
            SignedIn
            ?   SignOut
            :   SignInButton
                SignOutButton
            HomeButton        
            */}

        </div>
    )
}

export default Header;