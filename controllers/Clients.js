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

    static update(req, res) {
        //req -> params e o body
        //logica do firebase para atualizar os dados
        //return this.db
         //   .collection('clients')
         //   .doc(id)
         //   .get();
    }

    static delete(req, res) {
        //req -> params e o body
        //logica do firebase para apagar os dados
    }

}


module.exports = Clients;