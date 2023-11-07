const sequelize = require('../config/connection');
const {User, Workout,} = require('../models');

const userData = require('./userData.json');
// const favoriteData = require('./favoriteData.json');
const workoutData = require('./workoutData.json');

const seedDatabase = async () => {
    await sequelize.sync({force:true});

    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning:true,
    });

    
  for (const user of users) {
    // Create workouts for each user
    const workouts = await Workout.bulkCreate(workoutData, {
      returning: true,
    }); 
    await user.addWorkouts(workouts);
}


process.exit(0);
};

seedDatabase();



