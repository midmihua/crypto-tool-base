require('dotenv-extended').load();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Init new application
const app = express();

// Connect to mongodb
mongoose.connect(
    'mongodb://' + process.env.MONGO_HOST + '/' + process.env.MONGO_DATABASE, {useNewUrlParser: true}
    );
mongoose.Promise = global.Promise;

// Initialize body parser
app.use(bodyParser.json());

// Initialize routes
app.use('/api', require('./routes/api'));

// Error handling middleware
app.use((err, req, res, next) => {
    res.status(422).send({error: err.message});
});

// Start the application
app.listen(process.env.HTTP_PORT, () => {
    console.log('Server is running on port ' + process.env.HTTP_PORT);
});
