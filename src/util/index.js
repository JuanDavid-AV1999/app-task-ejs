const { sep } = require('path');

const getBaseDir = () => {
    const baseDir = __dirname.split(sep);
    baseDir.pop();
    return baseDir.join(sep);
}

module.exports = {
    getBaseDir
}