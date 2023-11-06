const router = require('express').Router();
const userRoutes = require('./user-routes');
const workoutRoutes = require('./workout-routes');

router.use('/users', userRoutes);
router.use('/workouts', workoutRoutes);

module.exports = router;