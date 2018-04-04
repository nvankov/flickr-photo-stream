import React, { Component } from 'react';
import PhotoTile from './PhotoTile';
import FlickrPhotosAPI from '../api/FlickrPhotosAPI';
import './PhotoContainer.css';

class PhotoContainer extends Component {
	constructor() {
		super();
		this.state = { flickrPhotos: [] };
	}

	componentWillMount() {
		FlickrPhotosAPI.getPhotos()
			.then((response) => {
				this.setState({
					flickrPhotos: response.items
				});
			})
			.catch((error) => {
				console.log(error);
			});
	}

	extractPhotoData(item) {
		let src = item.media.m;
		let title = item.title.replace(/\s/g, '');
		title = title || 'No title';

		let authorName = item.author.substring('nobody@flickr.com ("'.length);
		authorName = authorName.substring(0, authorName.length - 2);

		let alt = `${title || 'Photo'} by ${authorName}`;
		let link = item.link;
		let authorLink = `https://www.flickr.com/people/${item.author_id}`;
		let description = this.getDescription(item);
		let details = this.getDetails(item);
		let tags = this.formatTags(item.tags);

		return {
			src,
			alt,
			link,
			title,
			authorLink,
			authorName,
			description,
			details,
			tags
		};

	}

	formatTags(tags) {
		let tagsArray = tags.split(' ');

		if (!tagsArray[0]) {
			tagsArray[0] = 'No tags to show';
			return tagsArray;
		}

		return tagsArray.map((tag) => {
			return (<span key={tag} className="PhotoTag">{tag}</span>);
		});
	}

	getDescription(photo) {
		let description = '';

		let result = photo.description.match(/<p>(.*?)<\/p>/g).map((val) => {
			return val.replace(/<\/?p>/g,'');
		});

		if (result[2]) {
			let html = result[2];
			let div = document.createElement('div');
			div.innerHTML = html;
			let text = div.innerText;

			description += text;
		}

		return description;
	}

	getDetails(photo) {
		let details = '';

		if (photo.date_taken) {
			let dateTaken = new Date(photo.date_taken).toDateString();
			details += `Date taken on ${dateTaken} `;
		}

		if (photo.published) {
			let datePublished = new Date(photo.published).toDateString();
			details += `published on ${datePublished} `;
		}

		return details;
	}

	render() {
		let photoTiles = this.state.flickrPhotos.map((photo) => {
			return (<PhotoTile key={photo.link} photo={this.extractPhotoData(photo)} />);
		});

		return (
			<section className="PhotoContainer">{photoTiles}</section>
		);
	}
}

export default PhotoContainer;