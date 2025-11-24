# FitTrack - Workout Tracker Application

## INFR3120 Assignment 3

A full-stack CRUD web application for tracking workout sessions, built with Node.js, Express, MongoDB, and EJS templating.

---

## Project Description

FitTrack is a workout tracking application that allows users to log, monitor, and manage their fitness journey. Users can track different types of workouts (Push, Pull, Legs, Full Body, Cardio), record weights lifted, sets, reps, and monitor their progress over time.

---

##  Features

-  **Full CRUD Functionality**
  - Create new workout entries
  - Read/View all workouts
  - Update existing workouts
  - Delete workouts with confirmation

-  **Professional UI Design**
  - Bootstrap 5 framework
  - Custom CSS styling
  - Responsive design (mobile-friendly)
  - Gradient color schemes
  - Smooth animations and transitions

-  **Secure Database Management**
  - MongoDB Atlas cloud database
  - Environment variables for credentials (.env)
  - .gitignore to protect sensitive data

-  **User-Friendly Interface**
  - Intuitive navigation
  - Color-coded workout type badges
  - Delete confirmation modal
  - Empty state messaging
  - Form validation

---

##  Technologies Used

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **Mongoose** - MongoDB object modeling

### Frontend
- **EJS** - Embedded JavaScript templating
- **Bootstrap 5** - CSS framework (CDN)
- **Bootstrap Icons** - Icon library
- **Custom CSS** - Additional styling

### Database
- **MongoDB Atlas** - Cloud-hosted database

### Deployment
- Cloud platform Render

---

##  Project Structure

```
workout-tracker/
├── config/
│   └── db.js                 # Database configuration
├── controllers/
│   └── workoutController.js  # Application logic
├── models/
│   └── workout.js            # Mongoose schema
├── routes/
│   └── workoutRoutes.js      # Route definitions
├── views/
│   ├── partials/
│   │   ├── header.ejs        # Shared header
│   │   └── footer.ejs        # Shared footer
│   ├── index.ejs             # Home/splash page
│   ├── workouts.ejs          # All workouts list
│   ├── add.ejs               # Add workout form
│   └── edit.ejs              # Edit workout form
├── public/
│   └── css/
│       └── style.css         # Custom CSS
├── .env                      # Environment variables (not in repo)
├── .env.example              # Environment template
├── .gitignore                # Git ignore file
├── app.js                    # Main application file
├── package.json              # Dependencies
└── README.md                 # This file
```

## Styling Information

### CSS Framework
- **Bootstrap 5.3.0** (loaded via CDN)
- Source: https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css

### Custom CSS
- **Custom stylesheet** created by developer
- Location: `public/css/style.css`
- Features:
  - Gradient backgrounds
  - Custom animations
  - Enhanced card styling
  - Responsive design improvements
  - Custom color schemes

### Icons
- **Bootstrap Icons 1.10.0** (loaded via CDN)
- Source: https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css

---

##  Features for security

- Environment variables stored in `.env` file
- `.env` file excluded from Git via `.gitignore`
- Database credentials never exposed in code
- `.gitignore` includes `node_modules/` and sensitive files


##  Deployment

The application is deployed on: https://workout-tracker-1-5h0j.onrender.com/

### Deployment Steps Used:
1. Created account on cloud platform
2. Connected GitHub repository
3. Set environment variables in platform dashboard
4. Deployed application
5. Verified database connection


- Student ID: 100963100
- Course: INFR3120
- Semester: Fall 2025
