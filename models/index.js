const User = require('./User');
const Workout = require('./Workout');
// const Favorite = require('./Favorite');

User.hasOne(Workout, {
    foreignKey: 'userid',
    onDelete: 'CASCADE'
});

Workout.belongsTo(User, {
    foreignKey: 'userid'
});

  // sequelize.sync({ force: false }).then(() => {
  //   console.log('Database and tables synced!');
  // });

  module.exports = {User ,Workout};