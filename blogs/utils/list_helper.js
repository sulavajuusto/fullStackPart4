const dummy = (blogs) => {
	return 1;
};

const totalLikes = (blogs) => {
	return blogs.reduce((acc, blog) => acc + blog.likes, 0);
};

const favoriteBlog = (blogs) => {
	let favoriteCount = 0;
	let favoriteBlogObj = null;

	blogs.forEach((blog) => {
		if (blog.likes > favoriteCount) {
			favoriteCount = blog.likes;
			favoriteBlogObj = blog;
		}
	});

	return favoriteBlogObj
		? {
			title: favoriteBlogObj.title,
			author: favoriteBlogObj.author,
			likes: favoriteCount
		}
		: undefined;
};

const mostBlogs = (blogs) => {
	let mostBlogCount = 0;
	let mostBlogsAuthor = '';
	let blogsByAuthor = {};

	blogs.forEach((blog) => {
		if (blogsByAuthor[blog.author]) {
			blogsByAuthor[blog.author]++;
		} else {
			blogsByAuthor[blog.author] = 1;
		}
	});

	for (const author in blogsByAuthor) {
		if (blogsByAuthor[author] > mostBlogCount) {
			mostBlogsAuthor = author;
			mostBlogCount = blogsByAuthor[author];
		}
	}

	return mostBlogCount > 0
		? {
			author: mostBlogsAuthor,
			blogs: mostBlogCount
		}
		: undefined;
};

const mostLikes = (blogs) => {
	let mostLikesCount = 0;
	let mostLikesAuthor = '';
	let likesByAuthor = {};

	blogs.forEach((blog) => {
		if (likesByAuthor[blog.author]) {
			likesByAuthor[blog.author] += blog.likes;
		} else {
			likesByAuthor[blog.author] = blog.likes;
		}
	});

	for (const author in likesByAuthor) {
		if (likesByAuthor[author] > mostLikesCount) {
			mostLikesAuthor = author;
			mostLikesCount = likesByAuthor[author];
		}
	}

	return mostLikesCount > 0
		? {
			author: mostLikesAuthor,
			likes: mostLikesCount
		}
		: undefined;
};

module.exports = {
	dummy,
	totalLikes,
	favoriteBlog,
	mostBlogs,
	mostLikes
};
