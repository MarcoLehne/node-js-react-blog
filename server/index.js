const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

const fs = require('fs');
const {addPost} = require('./services/user')


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

// this will later serve the transpiled react app to
// browser
// app.get("*", (req, res) => {
    
// })

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});