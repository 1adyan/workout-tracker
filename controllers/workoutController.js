const Workout = require('../models/workout');

/**
 * Home Page Controller
 * Renders the splash/landing page
 */
exports.getHomePage = (req, res) => {
    res.render('index', { 
        title: 'FitTrack - Home' 
    });
};

/**
 * Get All Workouts
 * READ operation - displays all workouts from database
 */
exports.getAllWorkouts = async (req, res) => {
    try {
        // Fetch all workouts from database, sorted by date (newest first)
        const workouts = await Workout.find().sort({ date: -1 });
        
        res.render('workouts', { 
            title: 'My Workouts',
            workouts: workouts
        });
    } catch (error) {
        console.error('Error fetching workouts:', error);
        res.status(500).send('Error retrieving workouts');
    }
};

/**
 * Show Add Workout Form
 * Renders the form to create a new workout
 */
exports.getAddWorkoutPage = (req, res) => {
    res.render('add', { 
        title: 'Add New Workout' 
    });
};

/**
 * Create New Workout
 * CREATE operation - adds new workout to database
 */
exports.createWorkout = async (req, res) => {
    try {
        // Extract workout data from request body
        const { workoutType, exercise, weight, sets, reps, timeOfDay, date, notes } = req.body;
        
        // Create new workout document
        const newWorkout = new Workout({
            workoutType,
            exercise,
            weight,
            sets,
            reps,
            timeOfDay,
            date,
            notes
        });
        
        // Save to database
        await newWorkout.save();
        
        // Redirect to workouts list after successful creation
        res.redirect('/workouts');
    } catch (error) {
        console.error('Error creating workout:', error);
        res.status(500).send('Error creating workout');
    }
};

/**
 * Show Edit Workout Form
 * Retrieves workout by ID and displays edit form
 */
exports.getEditWorkoutPage = async (req, res) => {
    try {
        // Find workout by ID from URL parameter
        const workout = await Workout.findById(req.params.id);
        
        if (!workout) {
            return res.status(404).send('Workout not found');
        }
        
        // Format date for input field (YYYY-MM-DD format)
        const formattedDate = workout.date.toISOString().split('T')[0];
        
        res.render('edit', { 
            title: 'Edit Workout',
            workout: workout,
            formattedDate: formattedDate
        });
    } catch (error) {
        console.error('Error fetching workout for edit:', error);
        res.status(500).send('Error retrieving workout');
    }
};

/**
 * Update Workout
 * UPDATE operation - modifies existing workout in database
 */
exports.updateWorkout = async (req, res) => {
    try {
        
        const { workoutType, exercise, weight, sets, reps, timeOfDay, date, notes } = req.body;
        
        // Find workout by ID and update with new data
        const updatedWorkout = await Workout.findByIdAndUpdate(
            req.params.id,
            {
                workoutType,
                exercise,
                weight,
                sets,
                reps,
                timeOfDay,
                date,
                notes
            },
            { 
                new: true,           
                runValidators: true  
            }
        );
        
        if (!updatedWorkout) {
            return res.status(404).send('Workout not found');
        }
        
        // Redirect to workouts list after successful update
        res.redirect('/workouts');
    } catch (error) {
        console.error('Error updating workout:', error);
        res.status(500).send('Error updating workout');
    }
};

/** DELETE operation that removes workout from database*/
exports.deleteWorkout = async (req, res) => {
    try {
        // Find and delete workout by ID
        const deletedWorkout = await Workout.findByIdAndDelete(req.params.id);
        
        if (!deletedWorkout) {
            return res.status(404).send('Workout not found');
        }
        
        // Redirect to workouts list after successful deletion
        res.redirect('/workouts');
    } catch (error) {
        console.error('Error deleting workout:', error);
        res.status(500).send('Error deleting workout');
    }
};