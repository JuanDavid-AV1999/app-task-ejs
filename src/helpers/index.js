const { sep } = require('path');

const getBaseDir = (dir = '') => {
    const baseDir = dir.split(sep);
    baseDir.pop();
    return baseDir.join(sep);
}

const addZero = (value) => {
    return value.toString().padStart(2, '0');
}

const getDateFormat = (data = '') => {
    const dateFormat = data ? new Date(data) : new Date();
    const year = dateFormat.getFullYear();
    const month = addZero(dateFormat.getMonth() + 1); 
    const day = addZero(dateFormat.getDate());
    const hour = addZero(dateFormat.getHours());
    const minutes = addZero(dateFormat.getMinutes());
    const seconds = addZero(dateFormat.getSeconds());
    return `${year}-${month}-${day} ${hour}:${minutes}:${seconds}`;
}

module.exports = {
    getBaseDir,
    getDateFormat
};