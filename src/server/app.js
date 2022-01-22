const express = require('express');
const bodyParse = require('body-parser');
const morgan = require('morgan');
const path = require('path');

const { notFoundMiddleware, errorHandlerMiddleware } = require('../middlewares/app.middlewares');

const routes = require('../routes/app.routes');

const { getBaseDir } = require('../util/index');

const app = express();

const baseDir = getBaseDir(__dirname);

app.set('port', 3000);

app.set('view engine', 'ejs');

app.set('views', path.join(baseDir, 'views'));

app.use(bodyParse.json());

app.use(bodyParse.urlencoded({ extended: false }));

app.use(morgan('tiny'));

app.use('/static', express.static(path.join(getBaseDir(baseDir), 'assets'), { etag: false }));

app.use('/app', routes);

app.use(notFoundMiddleware);

app.use(errorHandlerMiddleware);

module.exports = app;