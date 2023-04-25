const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const bodyParser = require('body-parser');

const fs = require('fs');
const {addPost} = require('./services/addPost');
const {addUser} = require('./services/addUser');
const {addCookie} = require('./services/addCookie');
const {isValidUser} = require('./services/isValidUser');
const {generateCookieValue} = require('./services/generateCookieValue');
const cookieParser = require('cookie-parser');

app.use(express.json());

// I want this to throw an error if not requested from within the react app
// this will be done with post
// Will implement this later
app.get("/internal/users", (req, res) => {
    const users = JSON.parse(fs.readFileSync('users.json', 'utf8')).table;
    res.json({users: users});
})

app.post("/internal/user", (req, res) => {
    const userName = req.body.userName;
    const users = JSON.parse(fs.readFileSync('users.json', 'utf8')).table;

    // this logic will migrate into a proper database handling system
    
    for (let user of users) {
        if(user.name === userName) {
            res.json({posts: user.posts, error: null});
        }
    }
    //res.json({posts: [], error: true});
});

app.post("/internal/user/addPost", async (req,res) => {
    await addPost(req.body);
    res.json({status: "success"});
})

app.post("/internal/user/addUser",bodyParser.urlencoded({ extended: true }),  async (req,res) => {
  
  try {
    await addUser(req.body);
    res.json({status: "success"});
  } catch(error) {
    res.status(401).json({ status: 'error', message: 'Invalid username or password.' });
  }
  
})

// this will later serve the transpiled react app to any remaining url
// browser
// app.get("*", (req, res) => {
    
// })

app.post('/internal/login', async (req, res) => {

    const { name, password } = req.body;
    
    // Check if the username and password are valid
    try { 
      
      await isValidUser(name, password)

      // If the user is valid, create a token or session ID and set a cookie
      const token = generateCookieValue();

      res.cookie('token', token, { 
        //maxAge: 60 * 60 * 1000, // session expires in 1 hour
        httpOnly: true, // cookie cannot be accessed by client-side scripts
        secure: true, // cookie is only sent over HTTPS
        sameSite: 'lax' // cookie can be sent cross-origin for GET requests }); // set a cookie with the token
      })

      // Adds cookie to database
      await addCookie(token, name);

      // Send a response indicating successful login
      res.status(200).json({ status: 'success', message: 'User logged in successfully.' });
    } catch(error) {
      // If the user is not valid, send a response indicating unsuccessful login
      res.status(401).json({ status: 'error', message: 'Invalid username or password.' });
    }
});

app.post('/internal/logout', cookieParser(), (req, res) => {

  // delete the cookie from the database if necessary
  // delete the cookie from the database if necessary
  // delete the cookie from the database if necessary
  // delete the cookie from the database if necessary
  // delete the cookie from the database if necessary
  // delete the cookie from the database if necessary
  // delete the cookie from the database if necessary
  // delete the cookie from the database if necessary

  // Clear the session cookie
  res.clearCookie('token', { path: '/'});
  res.status(200).json({ status: "success" });
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});