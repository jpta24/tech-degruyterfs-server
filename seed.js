const mongoose = require('mongoose');
// Write the MONGO_URI and the remove it
const MONGO_URI = process.env.MONGODB_URI;

mongoose
	.connect(MONGO_URI)
	.then((x) => {
		console.log(`Connected to add the Seed Data!"`);
	})
	.catch((err) => {
		console.error('Error connecting to mongo: ', err);
	});

const Book = require('./models/Book.model');
const books = require('./data.json');
// insert the array of books into the db
Book.insertMany(books)
	.then((result) => {
		console.log(`Success - added ${result.length} books to the db`);
		mongoose.connection.close();
	})
	.catch((err) => console.error(err));
