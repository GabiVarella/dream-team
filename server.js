const express = require('express');
const path = require('path');
const app = express();
const favicon = require('serve-favicon');
const logger = require('morgan');
const port = process.env.PORT || 3001;

require('dotenv').config();
require('./config/database');

const cors = require('cors')
const userRouter = require('./routes/users');
const apiRouter = require('./routes/api-requests')


app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));


app.use('/api', apiRouter)
app.use('/api/users', userRouter);


app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.listen(port, ()=> {
    console.log(`Express is listening on port ${port}.`)
});
