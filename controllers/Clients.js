const CacheManager = require('cache-manager');

//config
const { cache } = require('../config/default');

const ClientsModel = require('../models/Clients');

//instancia da biblioteca de cache
const memoryCache = CacheManager.caching(cache);

const clientModel = new ClientsModel();

class Clients {
    static get(request, response) {
        const id = request.params.id;
        const key = `client_${id}`;
        
        memoryCache.get(key, (err, result) => {
            if (result) {
                return response.json(result);                
            }
                        
            clientModel.get(id)
            .then(client => {
                if (!client.exists) {
                    response.sendStatus(404);
                }

                const clientData = client.data();
                memoryCache.set(key, clientData);

                response.json(client.data());                
            })
            .catch(err => {
                response.sendStatus(503);
            });
        });
    } 
    
    static list(request, response) {
        clientModel.list()
            .then(clients => response.json(
                clients.docs.map(client => (
                    {
                        ...client.data(), 
                        id: client.id
                    }
                ))
            ))
            .catch(err => {
                response.
                    sendStatus(500);
                console.log('Error getting document', err);
            });
    }


    static create(req, res) {
        const client = req.body;
        clientModel.create(client)
        .then(result => {
            if(!result) {
                res.json({success : true});
                res.sendStatus(200);
            } 
        }).catch(err => {
            console.log('Error creating document', err);
        });
    }


    static update(req, res) {
        const client = req.body;
        const id = req.params.id;
        clientModel.update(client, id)
        .then(result => {
            if(!result) {
                res.json({success : true});
                res.sendStatus(200);
            }

        }).catch(err => {
                console.log('Error updating document', err);
        });
    }

    static delete(req, res) {
        clientModel.delete(req, res)
        .then((result) => {
            if(!result) {
                res.json({success : true});
                res.sendStatus(200);
            } 
        })
        .catch((err) => {
            console.log('Error deleting document', err);
        })
    }

}


module.exports = Clients;