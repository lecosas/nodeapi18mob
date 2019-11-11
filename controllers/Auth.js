const UsersModel = require('../models/Users');

const userModel = new UsersModel();
const createToken = require('../utils/createToken');

class Auth {
   
    static auth(req, res) {
        
        const conditions = [
            {
                field:          'email',
                value:          req.body.email,
                condition:      '=='
            },
            {
                field:          'password',
                value:          req.body.password,
                condition:      '=='
            },
        ];

        userModel.list(conditions)
            .then(users => {
                if(users.docs.length === 0){
                    return res
                        .status(401)
                        .send({
                            code:       'not_found',
                            message:    'User not found'
                        });
                }
                
                const [{id}] = users.docs;
                res.json({ token: createToken( {id} ) });
            })
            .catch(err => {
                res.
                    sendStatus(500);
            });
    }
}

module.exports = Auth;