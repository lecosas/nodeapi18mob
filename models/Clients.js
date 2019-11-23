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

    create(client) {
        return this.db
        .collection('clients')
        .doc()
        .set(client);
    }

    delete(req, res) {
        return this.db.collection('clients')
        .doc(req.params.id)
        .delete();
    }


}

module.exports = Clients;