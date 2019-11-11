const CacheManager = require('cache-manager');

//config
const { cache } = require('../config/default');

const UsersModel = require('../models/Users');

//instancia da biblioteca de cache
const memoryCache = CacheManager.caching(cache);

const userModel = new UsersModel();

class Users {
    static get(request, response) {
        const id = request.params.id;
        const key = `user_${id}`;
        
        memoryCache.get(key, (err, result) => {
            if (result) {
                return response.json(result);                
            }
                        
            userModel.get(id)
                .then(user => {
                    if (!user.exists) {
                        response.sendStatus(404);
                    }

                    const userData = user.data();
                    memoryCache.set(key, userData);

                    response.json(user.data());                
                })
                .catch(err => {
                    response.sendStatus(503);
                });
        });
    } 
    
    static list(request, response) {
        userModel.list()
            .then(Users => response.json(
                Users.docs.map(user => (
                    {
                        ...user.data(), 
                        id: user.id
                    }
                ))
            ))
            .catch(err => {
                response.
                    sendStatus(500);
                console.log('Error getting document', err);
            });
    }

    static update(req, res) {
        //req -> params e o body
        //logica do firebase para atualizar os dados
        //return this.db
         //   .collection('users')
         //   .doc(id)
         //   .get();
    }

    static delete(req, res) {
        //req -> params e o body
        //logica do firebase para apagar os dados
    }

}


module.exports = Users;