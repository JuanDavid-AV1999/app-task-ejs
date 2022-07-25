const { Sequelize } = require('sequelize');
const { join } = require('path');
const { getBaseDir } = require('../util');

const DBConnection = new Sequelize({
    storage: join(getBaseDir(), 'SQLiteDB.db'),
    database: 'tasks',
    dialect: 'sqlite'
});

module.exports = {
    DBConnection: () => DBConnection,
    DBlisen: async () => {
        try {
            await DBConnection.authenticate();
            console.log('batabase connected success');
        } catch (ex) { throw new Error(ex) }
    },
    close: () => {
        DBConnection.close();
    }
};