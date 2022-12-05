const express = require('express');
const morgan = require('morgan');
const path = require('path');
const routes = require('../routes/app.routes');
const { getBaseDir } = require('../helpers/index');
const { notFoundMiddleware, errorHandlerMiddleware } = require('../middlewares/app.middlewares');

const app = express();

const baseDir = getBaseDir(__dirname);

app.set('port', 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(getBaseDir(baseDir), 'views'));

app.use(morgan('tiny'));
app.use(express.json());
app.use('/static', express.static(path.join(getBaseDir(baseDir), 'assets'), { etag: false }));

app.use('/app', routes);
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

module.exports = app;