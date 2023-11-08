const router = require('express').Router();
const { Workout, User } = require('../models');
const withAuth = require('../utils/auth');




// Get route for homepage
router.get('/', async (req, res) => { 
    try {
      console.log(req.params);
     
      // const woData = await Workout.findByPk({ userId: req.params.id})

      // const workoutData = await Workout.findByPk(req.session.id, {
      //   include: [
      //     {
      //       model: User,
      //       attributes: ['name'],
      //     },
      //   ],
      // });
      // console.log(workoutData);
      
      res.render('homepage', {   // THIS TELLS HANDLEBARS TO RENDER THE MAIN PLUS HOMEPAGE
        Workout,
        logged_in: req.session.logged_in
      })
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });




//WORK ON THIS - CAN RENDER THE PROFILE FROM THE USER ROUTES
// Get route to show the user profile
router.get('/profile', withAuth, async (req, res) => {
  try {
    console.log(req.session);
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Workout }],
    });

    const user = userData.get({ plain: true });
    console.log(user);

    res.render('userpage', {
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

  res.render('loginpage');
})


// Get Route to show favorite workouts - randomly chosen


module.exports = router;