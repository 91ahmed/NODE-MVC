## NODE-MVC

#### A light-weight MVC framework based on node Js, express Js and some custom modules.

### Prerequisites

You should have a good background on nodeJs and express framework.

### Used Packages

``` json
"axios": "^0.19.2",
"cookie-parser": "^1.4.5",
"express": "^4.17.1",
"express-session": "^1.17.1",
"express-validator": "^6.8.0",
"mongodb": "^3.5.9",
"mysql": "^2.18.1",
"pg": "^8.3.0",
"pug": "^3.0.0",
"session-file-store": "^1.4.0"
```

### How to install

Just download the ZIP file or use "git clone" to get the repository from GitHub, then open the project folder and run the command below from terminal.

``` json
npm install
```

### How to run the application

After you already had installed the project dependencies, Open the terminal and run this command to start the application.

``` json
npm start
```

Then open your web browser and go to "localhost:3000"

If you get an issue because of the port or you want to change the port number, Just open 'app.js' file and change the code below with your port.

``` js
const port = process.env.PORT || 3000;
```