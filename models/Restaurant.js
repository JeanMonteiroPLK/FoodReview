import Sequelize from 'sequelize';
import conn from '../config/db.js';

const Restaurant = conn.define('restaurant',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },

        name: {
            type: Sequelize.INTEGER,
            allowNull: false
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
