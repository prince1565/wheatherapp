# Weather App
Description
This is a simple weather application built using React. It fetches and displays weather data for a user's current location or any specified city. The app leverages the OpenWeatherMap API to retrieve weather information and displays it in a user-friendly format. The app also includes a dark mode feature.

#how to run the application locally.

Prerequisites
Node.js and npm installed on your machine.

step 1: select and code editor open terminal and Clone the Repository
commmand:- git clone https://github.com/prince1565/wheatherapp.git

step 2: Install Dependencies
command: npm install

step 3: Set Up API Key
Open Index.js and replace the API_KEY variable with your own OpenWeatherMap API key.
   eg:- const API_KEY = 'paste your key here';

step 4: Run the Application
command:- npm start


# Technologies Used
HTML:- for building the structure of web page
CSS:- for style the page 
JS:- make functional the web page 
React: For building the user interface using HTML,CSS,JS,API Integration.

package:-
Axios: For making HTTP requests to the OpenWeatherMap API.

API TOOL:-
OpenWeatherMap API: For fetching weather data.
Geolocation API: For getting the user's current location


# known issues or limitations.
1. The API key is hardcoded and should ideally be managed securely, such as through environment variables.
2. Error handling is basic; more detailed error messages could be provided for better user experience.
3. The app relies on the Geolocation API, which may not work properly on all browsers or if the user denies location access.


# Future Improvements
1.Add more detailed weather information, such as forecasts.
2.Improve error handling and user feedback.
3.Securely manage API keys using environment variables.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
