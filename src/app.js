require('dotenv-extended').load();
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const basicAuth = require('express-basic-auth');

// Init new application
const app = express();

// Setup template engine
app.set('view engine', 'ejs');
app.set('views', 'src/views');

// Setup mongodb connection
require('./utils/mongo');

// Setup basic auth check
// const { checkUserPassword } = require('./utils/auth');
// app.use(basicAuth({
//     authorizer: checkUserPassword,
//     unauthorizedResponse: 'It looks like you have provided wrong auth credentials'
// }));

// Initialize body parser
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

// Setup static data folder
console.log(__dirname);
app.use(express.static(path.join(__dirname, 'public')));

// Initialize routes
app.use('/api', require('./routes/api'));

// Page Not Found logic
app.use((req, res, next) => {
    res.status(404).render('404', { title: 'Page Not Found' });
});

// Start the application
app.listen(process.env.HTTP_PORT);