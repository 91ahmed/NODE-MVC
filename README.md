## Welcome to the NODE-MVC framework

#### A light-weight MVC framework based on node Js, express Js and some custom modules, It's free and open-source.

## Prerequisites

You should have a good background on nodeJs and express framework.

## Used Packages

``` json
"node": "10.15.3"
"express": "^4.17.1",
"express-session": "^1.17.1",
"express-validator": "^6.8.0",
"axios": "^0.19.2",
"cookie-parser": "^1.4.5",
"mongodb": "^3.5.9",
"mysql": "^2.18.1",
"pg": "^8.3.0",
"pug": "^3.0.0",
"session-file-store": "^1.4.0"
```

## How to install

Just download the ZIP file or use "git clone" to get the repository from GitHub, then open the project folder and run the following command from terminal.

``` json
npm install
```

## Run the application

After you already had installed the project dependencies, Open the terminal and run this command to start the application.

``` json
npm start
```

Then open your web browser and go to "localhost:3000"

If you get an issue because of the port, or you want to change the port number, Just open 'app.js' file and change the following code with your port.

``` js
const port = process.env.PORT || 3000;
```

## Database configuration

Connecting with databases and running queries extremely simple, The framework use MySQL and Postgres modules to connect with database and provides a simple custom query builder to create queries and filters.

To connect with database go to 'config.js' in the root directory, in this file you may define all of your database connections.

``` js
const config = {

	// Mysql
	'mysql_host': '127.0.0.1',
	'mysql_user': 'root',
	'mysql_password': '',
	'mysql_database': 'node',
	'mysql_port': 3306,

	// PostgreSQL
	'pg_host': 'localhost',
	'pg_user': 'postgres',
	'pg_password': '24882533',
	'pg_database': 'nodeapp',
	'pg_port': 5432,
};

module.exports = config
```

Postgresql (Doc) [https://node-postgres.com]
Mysql (Doc) [https://github.com/mysqljs/mysql/tree/v0.9]