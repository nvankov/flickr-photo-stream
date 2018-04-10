import React, { Component } from 'react';
import PhotoContainer from './componets/PhotoContainer';
import FlickrPhotosAPI from './api/FlickrPhotosAPI';
import './App.css';

class App extends Component {
	constructor() {
		super();

		this.state = {
			tagSearch: '',
			flickrPhotos: []
		};

		this.handleSearch = this.handleSearch.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	componentWillMount() {
		this.getPhotos();
	}

	handleSearch(event) {
		event.preventDefault();

		let tags = this.state.tagSearch;
		this.getPhotos({ tags });
	}

	handleChange(event) {
		this.setState({ tagSearch: event.target.value });
	}

	getPhotos(options) {
		FlickrPhotosAPI.getPhotos(options)
			.then((response) => {
				this.setState({
					flickrPhotos: response.items
				});
			})
			.catch((error) => {
				console.log(error);
			});
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">Flickr Photo Stream</h1>
					<aside>
						<form onSubmit={this.handleSearch}>
							<input type="search" placeholder="Search by tags" value={this.state.tagSearch}
								onChange={this.handleChange} />
							<input type="submit" value="Search" />
						</form>
					</aside>
				</header>
				<PhotoContainer flickrPhotos={this.state.flickrPhotos} />
			</div>
		);
	}
}

export default App;