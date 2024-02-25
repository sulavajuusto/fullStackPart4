require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const Blog = require('./models/blog.js');
const errorHandler = require('./middleware/errorHandler.js');

app.use(cors());
app.use(express.json());

app.get('/api/blogs', (request, response) => {
	Blog.find({}).then((blogs) => {
		response.json(blogs);
	});
});

app.post('/api/blogs', (request, response) => {
	const blog = new Blog(request.body);

	blog.save().then((result) => {
		response.status(201).json(result);
	});
});

const PORT = 3003;
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
