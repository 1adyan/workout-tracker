const mongoose = require('mongoose');

/**
 * Workout Schema Definition
 */
const workoutSchema = new mongoose.Schema({
    // Type of workout
    workoutType: {
        type: String,
        required: [true, 'Workout type is required'],
        enum: ['Push', 'Pull', 'Legs', 'Full Body', 'Cardio', 'Other'],
        trim: true
    },
    
    // Name of the specific exercise
    exercise: {
        type: String,
        required: [true, 'Exercise name is required'],
        trim: true
    },
    
    // Weight lifted in lbs or kg
    weight: {
        type: Number,
        required: [true, 'Weight is required'],
        min: [0, 'Weight cannot be negative']
    },
    
    // Number of sets that are done
    sets: {
        type: Number,
        required: [true, 'Number of sets is required'],
        min: [1, 'Must have at least 1 set']
    },
    
    // Number of reps 
    reps: {
        type: Number,
        required: [true, 'Number of reps is required'],
        min: [1, 'Must have at least 1 rep']
    },
    
    // Time of day workout was performed
    timeOfDay: {
        type: String,
        required: [true, 'Time of day is required'],
        enum: ['Morning', 'Afternoon', 'Evening'],
        trim: true
    },
    
    // Date of the workout
    date: {
        type: Date,
        required: [true, 'Workout date is required'],
        default: Date.now
    },
    
    // Optional notes about the workout
    notes: {
        type: String,
        trim: true,
        maxlength: [500, 'Notes cannot exceed 500 characters']
    }
}, {
    // Automatically add createdAt and updatedAt timestamps
    timestamps: true
});

/**
 * Instance method to format date for display
 * @returns {String} 
 */
workoutSchema.methods.getFormattedDate = function() {
    return this.date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
};

// Create and export for the model
const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;