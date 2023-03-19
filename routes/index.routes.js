const router = require('express').Router();

const Book = require('../models/Book.model');

router.get('/books/search/:searchText', (req, res, next) => {
	const searchText = req.params.searchText;

	Book.find({
		$or: [
			{ title: { $regex: searchText, $options: 'i' } },
			{ isbn: { $regex: searchText, $options: 'i' } },
		],
	})
		.sort({ title: 'asc' })
		.select('title isbn')
		.then((books) => {
			res.status(200).json(books);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json({ message: 'Sorry internal error occurred' });
		});
});

router.get('/test', (req, res, next) => {

    Book.find()
    .then(books=>{
        let duplicates = [];
        books.map(book=>book.isbn)
        .forEach((item, index) => {
          if (books.map(book=>book.isbn).indexOf(item, index + 1) !== -1 && duplicates.indexOf(item) === -1) {
            duplicates.push(item);
          }
        })
        res.json(duplicates);
    })	
});

module.exports = router;
