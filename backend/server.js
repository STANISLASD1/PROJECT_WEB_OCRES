const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user.routes');
const PORT = 3001; 


require('dotenv').config({ path: './config.env' });
require('./config/db');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//routes
app.use('/api/user', userRoutes);

//server
app.listen(PORT, () => {
    console.log(`Listening on port : ${PORT}`)
});
module.exports = app; 
