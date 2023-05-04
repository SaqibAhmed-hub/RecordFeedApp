var recordMgr = require('../api/records/recordMgr');


exports.loadRoutes = function (app) {
    //Call every Route here

    // By using app.route we will call both get and post request.
    app.route('/api/v1/records')
        .post(recordMgr.save) // save records

    app.route('/api/v1/records')
        .get(recordMgr.list) // list of records

    app.route('/api/v1/records/:id')
        .get(recordMgr.finds) // find of records

    app.route('/api/v1/records/:id')
        .patch(recordMgr.update) // update of records

    app.route('/api/v1/records/:id')
        .delete(recordMgr.delete) // delete of records

}