import $ from "jquery";

class FlickrPhotosAPI {
	static getPhotos(searchParams) {
		let flickerAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";

		let options = {
			tagmode: 'any',
			per_page: '10',
			format: "json",
		}

		if (searchParams && searchParams.tags) {
			options.tags = searchParams.tags;
		}

		if (searchParams && searchParams.page) {
			options.page = searchParams.page;
		}

		return $.getJSON(flickerAPI, options);
	}
}

export default FlickrPhotosAPI;