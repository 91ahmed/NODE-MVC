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

## Model

To create a model class go to `app/models` and create a file like this `Model.js`, Your model class should extend one of those classes MysqlModel or PostgreModel, and also you have to define the database table name like the following example.

``` js
const MysqlModel   = require('../../modules/database/mysql')
const PostgreModel = require('../../modules/database/postgresql')

class Model extends MysqlModel 
{
    constructor ()
    {
    	// Super keyword to access the parent's properties and methods
        super();

        // Define database table
        this.table = 'tablename';
    }
}

module.exports = Model
```

## View

This framework use PugJs as a template engine, which consider a powerful tool for NodeJs to work with templates. 
To create view go to `app/views` and create your view file with extension .pug like this `view.pug`.

To read more about PugJs and how to use it go to pugjs.org 
[https://pugjs.org/api/getting-started.html]



## Controller

The controllers are stored in `app/controllers` and I have created a `HomeController.js` as an example for creating controllers.

the controller should be like the folloing example:

``` js
// Require Models and Libraries
const Model = require('../models/model')

// Create your methods
exports.index = (req, res) => 
{   
	// render view
    res.render('app/index')
}

exports.home = (req, res) => 
{
	// send content
	res.send('home page')	
}
```

### How to work with database

The framework provides a convenient `QueryBuilder` to build and execute database queries, Just import the database model in the controller and start to use it like the following example.

``` js
// Require Model
const User = require('../models/User')

exports.users = (req, res) => 
{   
    // Get all users from database
    new User().all().limit(2).get((data) => 
    {
        res.render('app/users', {users: data})
    });
}
```

### Select data from database

Here are all functions that will help you to retrieving data from database.

`.select()`

It takes one parameter `string` to specify a custom "select" clause for the query.

``` js
new Model().select('id, email, username').get((data) => {
    res.send(data)
});
```

`.all()`

Get all columns from table.

``` js
new Model().all().get((data) => {
    res.send(data)
});
```

`.orderBy()`

The ORDER BY keyword is used to sort the result-set in ascending (ASC) or descending (DESC) order, The function requires two arguments `column` and `sorting`

``` js
new Model().all().orderBy('id', 'DESC').get((data) => {
    res.send(data)
});
```

`.limit()`

It used to limit the number of results returned from the query, It takes one integer argument `number`

``` js
new Model().all().limit(5).get((data) => {
    res.send(data)
});
```

`.where()`

This function requires three arguments `column` `operator` `value`. <br/>
The following query retrieves data where the value of the id less than 25.

``` js
new Model().all().where('id', '<', 25).get((data) => {
    res.send(data)
});
```

`.whereIsNull()` `.whereIsNotNull()`

Verifies that the value of the given column is NULL or NOT NULL, The two functions requires one argument `column`

``` js
new Model().all().whereIsNull('column').get((data) => {
    res.send(data)
});
```

`.whereLike()`

This function allows you to use the LIKE statement to search for a specified pattern,
It requires two arguments `column` and `pattern`.

``` js
new Model().all().whereLike('column', '%pattern%').get((data) => {
    res.send(data)
});
```

`.whereIn()`

whereIn function check that a given column's value is contained the same given values.
It requires two arguments `column` and `values`.

``` js
new Model().all().whereIn('id', '1,5,8').get((data) => {
    res.send(data)
});
```

`.and()` `.or()`

The AND condition and OR condition can be combined to test for multiple conditions in a SELECT, INSERT, UPDATE, or DELETE statement. <br/>
The two functions signature is similar to that of the where method.

``` js
new Model()
.all()
.where('column1', '=', 'value')
.and('column1', '=', 'value')
.get((data) => {
    res.send(data)
});
```

`.join()` `.leftJoin()` `.rightJoin()`

These functions allow you to use joins in your query, You may even join multiple tables in a single query like the following example.

``` js
new Model()
.all()
.join('table1', 'table1.column', '=', 'table2.column')
.join('table2', 'table2.column', '=', 'table3.column')
.leftJoin('table3', 'table3.column', '=', 'table4.column')
.get((data) => {
    res.send(data)
});
```

`.groupBy()` `.having()`

The `groupBy` and `having` functions may be used to group the query results. The `having` function signature is similar to that of the where method.

``` js
new Model()
.all()
.groupBy('column')
.having('column', '=', 'value')
.get((data) => {
    res.send(data)
});
```

`.union()` `.unionAll()`

These two functions allows you to add union and unionAll statements to your query, the Two functions takes two arguments `columns` `table`.

``` js
new Model().all().union('column1, column2', 'table').get((data) => {
    res.send(data)
});
```

### Update data

`.update()`

It requires two parameters <br/>
`data` object contains the date that you want to update
`condition` object contians the condition of update statement.

``` js
new Model().update({
	'column1': 'value1',
	'column2': 'value2'
}, {'column': '1'});
```

### Insert data

`.insert()`

It require one argument `data` object contains data to insert in database.

``` js
new Model().insert({
	'column1': 'value1',
	'column2': 'value2'
});
```

### Delete data

`.delete()`

``` js
new Model().delete({'column':'2'})
```

### Custom Query

`.customQuery()`

This function allows you to write your custom SQL query.

``` js
var data = new Model().customQuery('SELECT * FROM users').get()
```


## Routes

The routes refer to the client URL request to a particular end point in order to execute a specific controller and action, all routes are stored in this path `routes\routes.js`.

the framework use ExpressJs to handle routes, you should read about ExpressJs routes to know how to use it.
[https://expressjs.com/en/starter/basic-routing.html]

To add new routes go to `routes\routes.js`
``` js
// Import your controllers
const HomeController = require('../app/controllers/HomeController')

module.exports = (app) => 
{
	// Add your routes here
	app.get('/', HomeController.index)
}
```