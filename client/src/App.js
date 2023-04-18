import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Header from "./components/Header";
import Home from "./components/Home";
import BlogPosts from "./components/BlogPosts";
import SignUpForm from "./components/SignUpForm";
import './styles/global.css';

function App() {

  return (
    <div id="main-div">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/SignUp" element={<SignUpForm />}/>
          <Route path="/*" element={<BlogPosts />}/>
          {/* <Route path="/SignUp element={<SignUpForm />" */}
        </Routes>
      </BrowserRouter>
    </div>    
  );
}

export default App;
