import React from 'react';
import ReactDOM from 'react-dom';
import PhotoContainer from './PhotoContainer';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PhotoContainer />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Formats the photo data accordingly', () => {
	const apiItem = {
		title: 'Some Photo',
		link: 'https://www.flickr.com/photos/somebody/123456789/',
		media: { m: 'https://farm1.staticflickr.com/123/1234567890_m.jpg' },
		date_taken: '2018-01-01T13:13:13-08:00',
		description: ' <p><a href="https://www.flickr.com/people/somebody/">' +
		'Somebody</a> posted a photo:</p> <p><a href="https://farm1.staticflickr.com/123/1234567890_m.jpg" ' +
		'title="Some Photo"><img src="https://farm1.staticflickr.com/123/1234567890_m.jpg" ' +
		'width="240" height="180" alt="Some Photo" /></a></p> <p>Test description</p>',
		published: '2018-01-01T12:49:48Z',
		author: 'nobody@flickr.com ("Somebody")',
		author_id: '123456789@N00',
		tags: 'first second third'
	};

	const expectedDataObject = {
		alt:"SomePhoto by Somebody",
		authorLink:"https://www.flickr.com/people/123456789@N00",
		authorName:"Somebody",
		description:"undefined",
		details:"Date taken on Mon Jan 01 2018 published on Mon Jan 01 2018 ",
		link:"https://www.flickr.com/photos/somebody/123456789/",
		src:"https://farm1.staticflickr.com/123/1234567890_m.jpg",
		title:"SomePhoto"
	};

	const wrapper = shallow(<PhotoContainer />);
	let extractedData = wrapper.instance().extractPhotoData(apiItem);;

	expect(extractedData.alt).toEqual(expectedDataObject.alt);
	expect(extractedData.authorLink).toEqual(expectedDataObject.authorLink);
	expect(extractedData.authorName).toEqual(expectedDataObject.authorName);
	expect(extractedData.description).toEqual(expectedDataObject.description);
	expect(extractedData.details).toEqual(expectedDataObject.details);
	expect(extractedData.link).toEqual(expectedDataObject.link);
	expect(extractedData.src).toEqual(expectedDataObject.src);
	expect(extractedData.title).toEqual(expectedDataObject.title);
});
