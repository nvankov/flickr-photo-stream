import React, { Component } from 'react';
import PhotoContainer from './componets/PhotoContainer';
import './App.css';


class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">Flickr Photo Stream</h1>
				</header>
				<PhotoContainer/>
			</div>
		);
	}
}

export default App;