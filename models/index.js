const User = require('./User');
const Workout = require('./Workout');
const Favorite = require('./Favorite');
///--------------------------------------------------
User.hasMany(Favorite, {
    foreignKey: 'userId',
    onDelete: 'CASCADE',
}
);

Favorite.belongstTo(User, {
    foreignKey: 'user_id'
});

///---------------------------------------------------

Workout.belongsToMany(User, {
    through: 'Favorite',
    foreignKey: 'workoutId',
  });


  Favorite.belongsTo(Workout, {
    foreignKey: 'workoutId',
  });

  sequelize.sync({ force: false }).then(() => {
    console.log('Database and tables synced!');
  });

  module.exports = {User ,Workout,Favorite};