const { httResponse } = require("../helpers");

const notFoundMiddleware = (req, res, next) => {
    const { method, url } = req;
    if(req.header('Content-Type') === 'application/json') {
        res.status(404).json(httResponse(404, `Not found resorce ${method} - '${url}'`, true));
    } else {
        res.status(404).render('pages/pageErrors', { errorCode: 404, errorMessage: `Not found resorce ${method} - '${url}' ` });
    }
    next();
}

const errorHandlerMiddleware = (error, req, res, next) => {
    console.error(error.message);
    if(req.header('Content-Type') === 'application/json') {
        res.status(500).send({ isError: true, error: 500, errorMessage: 'The server has die.' });
    } else {
        res.status(500).render('pages/pageErrors', { errorCode: 500, errorMessage: 'The server has die.' });
    }

    next();
}

module.exports = {
    notFoundMiddleware,
    errorHandlerMiddleware
};