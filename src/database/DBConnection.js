const { Sequelize } = require('sequelize');
const { join } = require('path');
const { getBaseDir } = require('../helpers');

const DBConnection = new Sequelize({
    storage: join(getBaseDir(), 'SQLiteDB.db'),
    database: 'tasks',
    dialect: 'sqlite'
});

const DBlisen = async () => {
    try {
        await DBConnection.authenticate();
        console.log('Database connected success');
    } catch (ex) { throw new Error(ex) }
}

const close = () => {
    DBConnection.close()
}

module.exports = {
    DBConnection: () => DBConnection,
    DBlisen: async () => await DBlisen(),
    close
};