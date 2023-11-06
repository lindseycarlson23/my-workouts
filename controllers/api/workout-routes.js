const router = require('express').Router();
const { Workout } = require('../../models');
const withAuth = require('../..utils/auth');

// Post route with new workout data from user
router.post('/:id', withAuth, async (req, res) => {
    const body = req.body
    try {
        const newWorkout = await Workout.create({ 
            ...body, 
            userId: req.params.id, 
        });

        // either send the data
        res.status(200).json(newWorkout)
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


// Put route to modify content for a specific workout - DO WE HAVE TO HAVE THIS?
router.put('/workout/:id', async (req, res) => {
    const body = req.body
    try {
        const [affectedRows] = await Workout.update({ body, 
            where: {
                id: req.params.id
            }
        })

        //send the data
        res.status(200).json(body);
        // or render template
        } catch (err) {
            console.error(err);
            res.status(500).send(err)
        }
})


// delete workout - 
router.delete('/:id', withAuth, async (req, res) => {
    try {
        const workoutData = await Workout.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });
        
        if (!workoutData) {
            res.status(404).json({ message: 'No workout found with this id!' });
            return;
        }

        res.status(200).json(workoutData);
    }   catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;