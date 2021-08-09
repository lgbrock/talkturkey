const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');
const userRoute = require('./routes/users');
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');

// Dotenv config
dotenv.config();

// Connect to database
mongoose.connect(
	process.env.MONGO_URL,
	{ useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
	() => {
		console.log('Connected to MonogoDB...');
	}
);

// Middleware
app.use(express.json());
app.use(helmet());
app.use(morgan('dev'));

// Application - REST API - routes
app.use('/api/user', userRoute);
app.use('/api/auth', authRoute);
app.use('/api/posts', postRoute);

// Port Backend Server is running on
app.listen(5000, () => {
	console.log('Backend running on port 5000');
});
