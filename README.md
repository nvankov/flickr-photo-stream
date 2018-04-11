# Flickr Photo Stream

A simple app to display the most recent public Flickr photos

## Run it locally

To run the app locally:
1. Clone the project: ```git clone git@github.com:nvankov/flickr-photo-stream.git```
2. Install dependencies with the following commands: ```npm install```
3. Start the application: ```npm start```
4. Run tests: ```npm test```
5. Builds the app for production to the `build` folder: ```npm build```

## Project structure
```
|--- public
    |--- favicon.ico	
    |--- index.html
    |--- manifest.json
|--- src
    |--- api
        |--- FlickrPhotosAPI.js
    |--- componets
        |--- PhotoContainer.css
        |--- PhotoContainer.js
        |--- PhotoContainer.test.js
        |--- PhotoTile.css
        |--- PhotoTile.js
    |--- utils
        |--- NotificationMessage.css
        |--- NotificationMessage.js
    |--- App.css
    |--- App.js
    |--- App.test.js
    |--- index.css
    |--- index.js
    |--- registerServiceWorker.js
|--- .editorconfig
|--- .eslintrc
|--- .gitignore
|--- LICENSE
|--- package-lock.json
|--- package.json
|--- README.md
```

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)