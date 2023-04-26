const express = require('express');
const router = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;

// The middleware to parse request body as JSON
app.use(express.json());

// The imported router middleware
app.use('/', router);

// Starts the server
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});