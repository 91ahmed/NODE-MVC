const HomeController = require('../app/controllers/HomeController')

module.exports = (app) => 
{
	app.get('/', HomeController.index)
}