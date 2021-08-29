import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const BookCard = (props) => {
	const book = props.book;

	return (
		<div className='card-container'>
			<img
				src={book.image}
				alt=''
				style={{ width: '100%', height: '65%' }}
			/>
			<div className='desc'>
				<h2>
					<Link to={`/${book._id}`}>
						{book.title}
					</Link>
				</h2>
				<h3>{book.author}</h3>
				<p>{book.description}</p>
			</div>
		</div>
	);
};

export default BookCard;
