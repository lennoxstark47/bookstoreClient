import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route,
} from 'react-router-dom';
import './App.css';
import CreateBook from './component/Createbook';
import ShowBookList from './component/Showbooklist';
import showBookDetails from './component/Showbookdetails';
// import Showbookdetails2 from './component/Showbookdetails2';
import UpdateBookInfo from './component/UpdateBookInfo';
import login from './component/login';

export class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<Route
						path='/books'
						component={ShowBookList}
					/>
					<Route
						path='/createbook'
						component={CreateBook}
					/>
					{/* <Route
						path='/:id'
						component={showBookDetails}
					/> */}
					<Route
						path='/update/:id'
						component={UpdateBookInfo}
					/>
					<Route path='/' component={login} />
				</div>
			</Router>
		);
	}
}

export default App;
