import { Sequelize, DataTypes } from 'sequelize';
import conn from '../config/db.js';

const Restaurant = conn.define('restaurant', {
    name: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    type: {
        type: Sequelize.STRING,
        allowNull: false
    },

    description: {
        type: Sequelize.STRING,
        allowNull: false
    },

    address: {
        type: Sequelize.STRING,
        allowNull: false
    }
}
);

export default Restaurant;
