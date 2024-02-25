const config = require('./utils/config');
const express = require('express');
const app = express();
const cors = require('cors');
const logger = require('./utils/logger');
const blogsRouter = require('./controllers/blogs.js');

app.use(cors());
app.use(express.json());
app.use('/api/blogs', blogsRouter);

const PORT = config.PORT;
app.listen(PORT, () => {
	logger.info(`Server running on port ${PORT}`);
});
