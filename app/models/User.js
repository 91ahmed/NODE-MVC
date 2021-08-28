const MysqlModel   = require('../../modules/database/mysql')
const PostgreModel = require('../../modules/database/postgresql')
const Mongo        = require('../../modules/database/mongodb')

class User extends MysqlModel 
{
    constructor ()
    {
        super();

        this.table = 'users';
    }
}

module.exports = User