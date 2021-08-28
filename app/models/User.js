const MysqlModel   = require('../../modules/database/mysql')
const PostgreModel = require('../../modules/database/postgresql')
const Mongo        = require('../../modules/database/mongodb')

class User extends MysqlModel 
{
    constructor ()
    {
    	// Super keyword to access the parent's properties and methods
        super();

        // Define database table
        this.table = 'users';
    }
}

module.exports = User