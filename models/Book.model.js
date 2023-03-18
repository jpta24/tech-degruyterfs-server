const { Schema, model } = require('mongoose');

const bookSchema = new Schema(
	{
		isbn: String,
		title: String,
		appendixPage: String,
		cover: String,
	},
	{
		versionKey: false,
		timestamps: true,
	}
);

const Book = model('Book', bookSchema);

module.exports = Book;