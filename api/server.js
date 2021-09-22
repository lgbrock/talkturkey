// Server Side
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');
const multer = require('multer');
const userRoute = require('./routes/users');
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');
const conversationRoute = require('./routes/conversations');
const messageRoute = require('./routes/messages');
const cors = require('cors');
const path = require('path');

// Dotenv config
dotenv.config();

// Connect to database
mongoose
	.connect(process.env.MONGO_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
	})
	.then(() => console.log('MongoDB connected!'))
	.catch((err) => console.log(err));

app.use('/images', express.static(path.join(__dirname, 'public/images')));

// Middleware
app.use(express.json());
app.use(helmet());
app.use(morgan('common'));
app.use(cors());

// For Postman use - file.originalname
const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, 'public/images');
	},
	filename: (req, file, cb) => {
		cb(null, req.body.name);
	},
});

const upload = multer({ storage: storage });
app.post('/api/upload', upload.single('file'), (req, res) => {
	try {
		return res.status(200).json('File uploaded successfully');
	} catch (error) {
		console.error(error);
	}
});

// Application - REST API - routes
app.use('/api/users', userRoute);
app.use('/api/auth', authRoute);
app.use('/api/posts', postRoute);
app.use('/api/conversations', conversationRoute);
app.use('/api/messages', messageRoute);

app.use(express.static(path.join(__dirname, '/client/build')));

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
});

// Port Backend Server is running on
app.listen(process.env.PORT || 5000, () => {
	console.log('Backend running on port 5000');
});
