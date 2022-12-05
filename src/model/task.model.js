const { DataTypes } = require('sequelize');
const { DBConnection } = require('../database/DBConnection');

const connection = DBConnection();

const taskModel = connection.define('tasks', {
    rowid: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false },
    state: { type: DataTypes.STRING, allowNull: false },
    create_at: { type: DataTypes.STRING, allowNull: false },
    update_at: { type: DataTypes.STRING, allowNull: false, defaultValue: '' }
}, { timestamps: false, modelName: 'tasks' });

module.exports = taskModel;