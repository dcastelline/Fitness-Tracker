// Require dependencies
const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');

// Define port
const PORT = process.env.PORT || 3000;

// Define express app, set it up to handle parsing 
const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));

// Connect Mongoose
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout', {useNewUrlParser: true});

// Require models
const db = require('./models');

// Require the api and html routes
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

// Port listener
app.listen(PORT, () => {
    console.log(`Connected to PORT ${PORT}.`);
});