const { sep } = require('path');

const getBaseDir = (dir = '') => {
    const dirName = dir ??= __dirname;
    const baseDir = dir.split(sep);
    baseDir.pop();
    return baseDir.join(sep);
}

module.exports = {
    getBaseDir
};