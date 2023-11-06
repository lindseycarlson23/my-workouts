// create new workout

// Post route with new workout data from user
router.post('/:id', async (req, res) => {
    const body = req.body
    try {
        const newWorkout = await Workout.create({ 
            ...body, 
            userId: req.params.id, 
        });

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


// delete workout - TO BE WRITTEN