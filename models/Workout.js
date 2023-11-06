const { Model, DataTypes, INTEGER} = require('sequelize');
const sequelize = require('../config/connection');

class Workout extends Model {}

Workout.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        title: {
            type: DataTypes.STRING,
            allowNull:false,
        },
        description: {
            type: DataTypes.STRING,
        },
        type: {
            type: DataTypes.STRING,
            allowNull:false,
        },
        rating: {
            type: DataTypes.INTEGER,
        },
        videoLink: {
            type: DataTypes.STRING,
        },
    },
    {
        equelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Workout',
    }
);
module.exports = Workout;