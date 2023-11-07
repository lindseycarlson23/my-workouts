const router = require('express').Router();
const { Workout, User } = require('../models');
const withAuth = require('../utils/auth');




// Get route to show existing favorites workout data for logged in user
// Tutor note: maybe use req.session.user_id instead
router.get('/:id', async (req, res) => { //this is the same as /home/:id
    try {
      console.log(req.params);
       // NEED TO UPDATE MODEL INFO ONCE IT EXISTS
      // const woData = await Workout.findByPk({ userId: req.params.id})

      const workoutData = await Workout.findByPk(req.params.id, {
        include: [
          {
            model: User,
            attributes: ['name'],
          },
        ],
      });
      console.log(workoutData);
      // Serialize data so the template can read it
      // const workouts = woData.map(workout => workout.get({ plain: true}))

      res.render('homepage', {   // THIS TELLS HANDLEBARS TO RENDER THE MAIN PLUS HOMEPAGE
        Workout,
        logged_in: req.session.logged_in
      })

      // this shows all the workouts
      // const workoutData = await Workout.findAll({
      //   include: [
      //     {
      //       model: User,
      //       attributes: ['name'],
      //     },
      //   ],
      // });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

// Route to show the user profile
router.get('/profile', withAuth, async (req, res) => {
  try {
    const userData = await User.findbyPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Workout }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // if user is already logged in, redirect to their profile page
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
})
// Get Route to show suggestion workouts - randomly chosen


module.exports = router;