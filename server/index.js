const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

const path = require('path');

app.use(express.json());

app.get("/simpleGet", (req,res) => {
    res.json({message: "Hello from our server!!!!"});
});

app.post("/simplePost", (req,res) => {
    const { message } = req.body;
    res.send({message: `We did it!! You have posted "${message}" to the server!`})
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});