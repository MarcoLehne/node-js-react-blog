import React, {useState} from "react";
import { useAsync } from "react-use";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Header from "./components/Header/Header";
import Home from "./components/Home";
import BlogPosts from "./components/Posts/BlogPosts";
import SignUpForm from "./components/Forms/SignUpForm";
import LoginForm from "./components/Forms/LoginForm";
import { verifyToken } from "./helpers/authHelpers";
import './styles/global.css';

function App() {

  // useAsync(async () => {
  //   const isLoggedIn = await verifyToken();
  //   setIsLoggedIn(isLoggedIn);
  // }, []);


  return (
    <div id="main-div">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/SignUp" element={<SignUpForm />}/>
          <Route path="/Login" element={<LoginForm />}/> 
          <Route path="/*" element={<BlogPosts />}/>
          {/* <Route path="/SignUp element={<SignUpForm />" /> */}
        </Routes>
      </BrowserRouter>
    </div>    
  );
}

export default App;
