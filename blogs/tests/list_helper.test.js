/* eslint-disable no-undef */
const listHelper = require('../utils/list_helper');

const largerListOfBlogs = [
	{
		_id: '5a422a851b54a676234d17f7',
		title: 'React patterns',
		author: 'Michael Chan',
		url: 'https://reactpatterns.com/',
		likes: 7,
		__v: 0
	},
	{
		_id: '5a422aa71b54a676234d17f8',
		title: 'Go To Statement Considered Harmful',
		author: 'Edsger W. Dijkstra',
		url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
		likes: 5,
		__v: 0
	},
	{
		_id: '5a422b3a1b54a676234d17f9',
		title: 'Canonical string reduction',
		author: 'Edsger W. Dijkstra',
		url: 'http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html',
		likes: 12,
		__v: 0
	},
	{
		_id: '5a422b891b54a676234d17fa',
		title: 'First class tests',
		author: 'Robert C. Martin',
		url: 'http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll',
		likes: 10,
		__v: 0
	},
	{
		_id: '5a422ba71b54a676234d17fb',
		title: 'TDD harms architecture',
		author: 'Robert C. Martin',
		url: 'http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html',
		likes: 0,
		__v: 0
	},
	{
		_id: '5a422bc61b54a676234d17fc',
		title: 'Type wars',
		author: 'Robert C. Martin',
		url: 'http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html',
		likes: 2,
		__v: 0
	}
];

const similarAmountOfBlogsList = [
	{
		_id: '5a422b3a1b54a676234d17f9',
		title: 'Canonical string reduction',
		author: 'Edsger W. Dijkstra',
		url: 'http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html',
		likes: 12,
		__v: 0
	},
	{
		_id: '5a422b891b54a676234d17fa',
		title: 'First class tests',
		author: 'Robert C. Martin',
		url: 'http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll',
		likes: 12,
		__v: 0
	}
];

test('dummy returns one', () => {
	const blogs = [];
	const result = listHelper.dummy(blogs);
	expect(result).toBe(1);
});

describe('total likes', () => {
	test('when list is empty value is zero', () => {
		const result = listHelper.totalLikes([]);
		expect(result).toBe(0);
	});

	const listWithOneBlog = [
		{
			_id: '5a422aa71b54a676234d17f8',
			title: 'Go To Statement Considered Harmful',
			author: 'Edsger W. Dijkstra',
			url: 'https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf',
			likes: 5,
			__v: 0
		}
	];

	test('when list has only one blog, equals the likes of that', () => {
		const result = listHelper.totalLikes(listWithOneBlog);
		expect(result).toBe(5);
	});

	test('longer list gives correct likes count', () => {
		const result = listHelper.totalLikes(largerListOfBlogs);
		expect(result).toBe(36);
	});
});

describe('favoriteBlog', () => {
	test('when list is empty undefined is returned', () => {
		const result = listHelper.favoriteBlog([]);
		expect(result).toEqual(undefined);
	});

	test('The blog with highest amount of likes is returned', () => {
		const result = listHelper.favoriteBlog(largerListOfBlogs);
		const expectedResult = {
			title: 'Canonical string reduction',
			author: 'Edsger W. Dijkstra',
			likes: 12
		};

		expect(result).toEqual(expectedResult);
	});

	test('If two blogs have similar amount of likes, first is returned', () => {
		const result = listHelper.favoriteBlog(similarAmountOfBlogsList);
		const expectedResult = {
			title: 'Canonical string reduction',
			author: 'Edsger W. Dijkstra',
			likes: 12
		};
		expect(result).toEqual(expectedResult);
	});
});

describe('mostBlogs', () => {
	test('When list is empty undefined is returned', () => {
		const result = listHelper.mostBlogs([]);
		expect(result).toEqual(undefined);
	});

	test('The author with most blogs authored is returned', () => {
		const result = listHelper.mostBlogs(largerListOfBlogs);
		const expectedResult = {
			author: 'Robert C. Martin',
			blogs: 3
		};

		expect(result).toEqual(expectedResult);
	});
});

describe('mostLikes', () => {
	test('When list is empty undefined is returned', () => {
		const result = listHelper.mostLikes([]);
		expect(result).toEqual(undefined);
	});

	test('The author with most likes total is returned', () => {
		const result = listHelper.mostLikes(largerListOfBlogs);
		const expectedResult = {
			author: 'Edsger W. Dijkstra',
			likes: 17
		};

		expect(result).toEqual(expectedResult);
	});
});
