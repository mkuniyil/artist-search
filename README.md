## Introduction

I have created a UI which will take user input and search for respective artist's information. Artist information section consist of image and the facebook icon which links to artist's facebook profile. List of events is displayed only if it's available

The caching is implemented using the localstorage. Once api call is made for getting the artist and event information, it's stored in localstorage with 'name' as key

## Additional feature

When ever user search for artists, a list of previously searched artists will appear ( Provided the name is already fetched and stored in localstorage)

## Tech Stack

I used 'create-react-app' for development

> Development : React & Redux

> Unit testing : Jest

## Run the Application

use `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Unit tests

run `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
# artist-search
