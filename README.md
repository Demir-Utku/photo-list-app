# Hipo Frontend Part-Time Exercise

## Description

A React application uses Unsplash API to list photos that are related to user's entered query (keyword) and optional page, per_page, collections informations.

Users enter the keyword in the text input and select the collection from the dropdown input. After a successful search, users will be displayed a masonry grid of search results.

When users click on any photo in the results page, it opens the detail of that page on Unsplash in a popup screen at the top of main page.

Before the request has been completed, there will be a loading indicator. If this request has been completed, users can see the photos.

At the bottom of the result page, users can see the next and previous buttons to pass to the next or previous page.

If the request does not give a result, there will appear an image to indicate no result.

There is a design for error case. If the request is failed, the application shows an error message.

This application is mostly responsive to variant resolutions except the logo and the label of collection dropdown.

## Requirements

-  [NodeJS](http://nodejs.org/) and [NPM](https://npmjs.org/) or [yarn]([https://yarnpkg.com/](https://yarnpkg.com/))
-  Packages: [axios]([https://github.com/axios/axios](https://github.com/axios/axios)), [react-gmaps]([https://github.com/MicheleBertoli/react-gmaps](https://github.com/MicheleBertoli/react-gmaps)) and [react-onclickoutside]([https://github.com/Pomax/react-onclickoutside](https://github.com/Pomax/react-onclickoutside))

## Installation

Clone the repository:
```sh
git clone https://github.com/Demir-Utku/Hipo-Frontend-Exercise.git
```

Change directory: $ cd Hipo-Frontend-Exercise
Install the packages: $ yarn

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
