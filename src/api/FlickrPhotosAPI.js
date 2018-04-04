import $ from "jquery";

class FlickrPhotosAPI {
	static getPhotos(page) {
		page = page || 1;
		let flickerAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";

		let options = {
			tagmode: 'any',
			per_page: '10',
			format: "json",
			page: page
		}

		return $.getJSON(flickerAPI, options);
	}
}

export default FlickrPhotosAPI;