const BaseModel = require('./BaseModel');

class Clients extends BaseModel {
    constructor() {
        super();
    }

    get(id) {
        return this.db
            .collection('clients')
            .doc(id)
            .get();
    }    

    list(conditions = []) {
        let collection = this.db.collection('clients');
        conditions.forEach(({ field, condition, value }) => collection = collection.where(field, condition, value));
        return collection.get();
    }

    update(client, id) {
        return this.db
            .collection('clients')
            .doc(id)
            .update(client);
    }

    delete(req, res) {
        //req -> params e o body
        //logica do firebase para apagar os dados
    }


}

module.exports = Clients;