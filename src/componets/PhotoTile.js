import React, { Component } from 'react';
import './PhotoTile.css';

class PhotoTile extends Component {
	render() {
		return (
			<article className="PhotoTile">
				<img className="Photo" src={this.props.photo.src} alt={this.props.photo.alt} title={this.props.photo.alt} /><br />
				<a className="PhotoTitle" href={this.props.photo.link}>{this.props.photo.title}</a> by&nbsp;
				<a href={this.props.photo.authorLink}>{this.props.photo.authorName}</a>
				<section className="PhotoDescription">
					<span>Description: </span> {this.props.photo.description}
				</section>
				<section>
					<span>Details: </span> {this.props.photo.details}
				</section>
				<div className="TagsHeader">Tags:</div>
				<section className="PhotoTagsContainer">
					{this.props.photo.tags}
				</section>
			</article>
		);
	};
}

export default PhotoTile;