const db = require('../models/');

module.exports = (app) => {
    app.get('/api/workouts', (req, res) => {
        db.Workout.find({}), (err, workouts) => {
            if(err){
                throw err
            } else {
                res.json(workouts)
            }
        }
    });

    app.post('/api/workouts', (req, res) => {
        db.Workout.create({})
        .then(newWorkout => {
            res.json(newWorkout);
        });
    });

    app.put('/api/workouts/:id', ({params, bod}, res) => {
        db.Workout.findOneAndUpdate({_id: params.id},
            {$push: {exercises: body}},
            {upsert: true, useFindAndModify: false},
            updatedWorkout => {
                res.json(updatedWorkout);
            });
    });
};