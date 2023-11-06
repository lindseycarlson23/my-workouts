const router = require('express').Router();


// Import the custom middleware
const withAuth = require('../utils/auth');


// Get route to show existing favorites workout data for logged in user
// Tutor note: maybe use req.session.user_id instead
router.get('/:id', async (req, res) => {
    try {
       // NEED TO UPDATE MODEL INFO ONCE IT EXISTS
      const woData = await Workout.find({ userId: req.params.id})

      // Serialize data so the template can read it
      const workouts = woData.map(workout => workout.get({ plain: true}))

      res.render('homepage', {
        workouts,
        logged_in: req.session.logged_in
      })

      // this shows all the workouts
      const workoutData = await Workout.findAll({
        include: [
          {
            model: User,
            attributes: ['name'],
          },
        ],
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

 
// Get Route to show suggestion workouts - randomly chosen