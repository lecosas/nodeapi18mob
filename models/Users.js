const BaseModel = require('./BaseModel');

class Users extends BaseModel {
    constructor() {
        super();
    }

    get(id) {
        return this.db
            .collection('users')
            .doc(id)
            .get();
    }    

    list(conditions = []) {
        let collection = this.db.collection('users');
        conditions.forEach(({ field, condition, value }) => collection = collection.where(field, condition, value));
        return collection.get();
    }

    update(user, id) {
        return this.db
            .collection('users')
            .doc(id)
            .update(user);
    }

    delete(req, res) {
        //req -> params e o body
        //logica do firebase para apagar os dados
    }


}

module.exports = Users;