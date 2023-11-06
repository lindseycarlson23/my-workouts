const router = require('express').Router();


// Import the custom middleware
const withAuth = require('../utils/auth');


// Get route to show existing workout data for logged in user
// Tutor note: maybe use req.sessession.user_id instead
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




// Post route with new workout data from user
router.post('/:id', async (req, res) => {
    const body = req.body
    try {
        const newWorkout = await Workout.create({ ...body, userId: req.params.id })

        // either send the data
        // res.status(200).json(newWorkout)
        // or render a template
        // res.render('newWorkout', {
        //     newWorkout,
        //     logged_in: req.session.logged_in
        // });
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})





// Put route to modify content for a specific workout
router.put('/workout/:id', async (req, res) => {
    const body = req.body
    try {
        const [affectedRows] = await Workout.update({ body, 
            where: {
                id: req.params.id
            }
        })

        //send the data
        // or render template
        } catch (err) {
            console.error(err);
            res.status(500).send(err)
        }
})

    
// Get Route to show suggestion workouts