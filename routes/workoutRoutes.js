const express = require('express');
const router = express.Router();
const workoutController = require('../controllers/workoutController');

/*
 * Route Definitions
 * Maps urls to controller functions
 */

// Home/Splash Page
// GET Displays landing page
router.get('/', workoutController.getHomePage);

// READ - Display all workouts
// GET workouts - Show list of all workouts
router.get('/workouts', workoutController.getAllWorkouts);

// CREATE - Add new workout
// GET workouts/add - Show form to add new workout
router.get('/workouts/add', workoutController.getAddWorkoutPage);

// POST workouts/add - Process new workout submission
router.post('/workouts/add', workoutController.createWorkout);

// UPDATE - Edit existing workout
// GET workouts/edit/:id - Show form to edit workout
router.get('/workouts/edit/:id', workoutController.getEditWorkoutPage);

// POST workouts/edit/:id - Process workout update
router.post('/workouts/edit/:id', workoutController.updateWorkout);

// DELETE - Remove workout
// POST workouts/delete/:id - Delete workout from database
router.post('/workouts/delete/:id', workoutController.deleteWorkout);

// Export router for use in app.js
module.exports = router;