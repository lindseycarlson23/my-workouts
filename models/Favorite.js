const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');


class Favorite extends Model {}

Favorite.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull:false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
        },
        workout_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Workout',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'favorite',
      }
)

module.exports = Favorite;