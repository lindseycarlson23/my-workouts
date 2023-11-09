const router = require('express').Router();
const { Workout } = require('../../models');
const withAuth = require('../../utils/auth');

// Post route with new workout data from user THIS WORKS
router.post('/', withAuth, async (req, res) => {
    //const body = req.body
    try {
        const newWorkout = await Workout.create({ 
            ...body, 
            user_id: req.session.user_id, 
        });

        res.status(200).json(newWorkout)
      
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})


// Put route to modify content for a specific workout - DO WE HAVE TO HAVE THIS?
router.put('/:id', async (req, res) => {
    const body = req.body
    console.log(body);
    try {
        const changedWorkout = await Workout.update(body, { 
            where: {
                id: req.params.id,
            },
        });
        console.log(changedWorkout);
        if (!changedWorkout[0]) {
            res.status(404).json({ message: 'No workout with this id!' });
            return;
        }
        res.status(200).json(changedWorkout);
        } catch (err) {
            console.error(err);
            res.status(500).send(err)
        }
});


// delete workout - 
router.delete('/:id', async (req, res) => {
    try {
        const workoutData = await Workout.destroy({
            where: {
                id: req.params.id,
                // user_id: req.session.user_id,
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