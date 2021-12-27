const express = require('express');
const bodyParse = require('body-parser');
const morgan = require('morgan');
const path = require('path');

const routes = require('../routes/app.routes');

const { getBaseDir } = require('../util/index');

const app = express();

const baseDir = getBaseDir();

app.set('port', 3000);

app.set('views', path.join(baseDir, 'views'));

app.set('view engine', 'ejs');

app.use(morgan('tiny'));

app.use(bodyParse.json());

app.use(bodyParse.urlencoded({ extended: false }));

app.use('/app', routes);

app.use('/app', express.static(path.join(baseDir, 'assets')));

app.disable('etag');

module.exports = app;