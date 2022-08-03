# **GUIDE**

<img src="./app/assets/logo.png" align="right"
     alt="Refactor-logo" width="85"  height="85">


Official guide to enable developers understand the structure of this project.

*This project was bootstrapped with [Expo](https://expo.dev/).*

<br/>

## Project Architecture

    .
    ├── .expo                 # Not really necessary. Generated dynamically.
    ├── app                   # Source code
        ├── api               # Files for API endpoints
        ├── assets            # Contains images, animations, etc.
        ├── auth              # Authentication and Authorization files
        ├── components        # UI files. Screens, Buttons, etc.
        ├── config            # Configuration files
        ├── hooks             # React hooks
        ├── utils             # Files containing useful functions.
    ├── App.js
    ├── app.json
    ├── babel.config.js
    ├── package.json
    ├── yarn.lock


## Scripts

### `yarn start`

Runs the app in the development mode. The page will reload when you make changes.
You may also see any lint errors in the console.

### `yarn eject`

Eject Expo SDK.