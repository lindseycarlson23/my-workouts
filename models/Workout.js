const { Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Workout extends Model {}

Workout.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
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
        favorite: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        userid: {
            type: DataTypes.INTEGER,
            references: {
                model: 'User',
                key: 'id',
            },
        }
    },
    {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Workout',
    }
);
module.exports = Workout;
