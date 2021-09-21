const express = require('express');
const path = require('path');
const app = express();
const dotenv = require('dotenv');
const morgan = require('morgan');
const router = require('./server/routes/router');
const connectionString = require('./server/db/connection');
dotenv.config({ path: 'config.env' });
const PORT = process.env.PORT || 8000;

app.use(morgan('tiny'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
connectionString();
app.use('/css', express.static(path.resolve(__dirname, 'assets/css')));
app.use('/js', express.static(path.resolve(__dirname, 'assets/js')));

app.use('/', router);

app.listen(PORT, () => console.log('Server Running...', PORT));
