const router = require('express').Router();
// import models here
const { User, Workout } = require('../../models');



// CREATE new user
router.post('/', async (req, res) => {
  try {
    const userData = await User.create({
      name:req.body.name,
      email:req.body.email,
      password:req.body.password,
    });

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.loggedIn = true;
      res.status(200).json({user: userData});
   
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Login route
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    const name = userData.name

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }
   
    req.session.save(() => {
      req.session.user_id = userData.id 
      req.session.loggedIn = true;
      res.status(200).json({user: userData});
    });
      // since the user is valid, make a second db call
      // that gets all posts by username
      // const workouts = await Workout.findByPk(req.session.id);
      // console.log(workouts);
      // // const workouts = await Workout.findByPk(req.session.id, {
      // //   // this include adds the user_id to the workout table!
      // //     include: [
      // //       {
      // //         model: User,
      // //         attributes: ['id'],
      // //       },
      // //     ],
      // //   });
      // // combine username and workouts as one object and send that variable to handlebars
      // //then update the hb template ex: data.username and #each data.workouts
      // res.render('userpage', {
      //   name,
      //   workouts,
      //   logged_in: true
      // });
   
  } catch (err) {
    console.error(err)
    res.status(400).json(err);
  }
});

// Logout
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;