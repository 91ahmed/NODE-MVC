// Require Models
const User = require('../models/User')

exports.index = (req, res) => 
{
    /*
    var welcome = 'Welcome to node js mvc framework';
    var users   = [
        {'name': 'ahmed'},
        {'name': 'muhammed'},
        {'name': 'osama'}
    ];

    
    res.render('app/index', {data: users, title: welcome})
    */

    /** Working with database model
     * 
        new User().all().limit(2).get((users) => {
            res.render('app/index', {data: users, title: welcome})
        });
     **/

     var welcome = 'Welcome to node js mvc framework';

    new User().select('id, name').get((users) => {
        res.render('app/index', {data: users, title: welcome})
    });
}