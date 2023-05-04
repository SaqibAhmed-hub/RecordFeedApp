var recordsModel = require('../../model/records')



//This is to save the records in the collection
exports.insertRecords = (req, res) => {
    let rec = new recordsModel({
        fullname: req.body.fullname,
        position: req.body.position,
        level : req.body.level,
        createdAt : Date.now()
    })
    console.log(rec)
    rec.save((err,data)=>{
        if(err){
            res.status(500).json(err);
        }else{
            res.status(201).send({
                statusCode: 201,
                message: 'records saved successfully'
            })
        }
    })
}

//This is to retrive the records in the collection
exports.listRecords = (req, res) => {
    recordsModel.find({}).exec((err,data)=>{
        if(err){
            res.status(500).json(err);
        }else{
            res.status(201).send({
                statusCode: 200,
                message: 'records found successfully',
                data : data
            })
        }
    })
}

exports.updateRecords = (req, res) => {
    let query = {_id: new ObjectId(req.params.id)};
    const updates =  {
        $set: {
          fullname: req.body.fullname,
          position: req.body.position,
          level: req.body.level,
          createdAt: Date.now()
        }
      };
    recordsModel.updateOne(query,updates).exec((err,data)=>{
        if(err){
            res.status(500).json(err);
        }else{
            res.status(201).send({
                statusCode: 200,
                message: 'records update successfully',
            })
        }
    })
}

exports.deleteRecords = (req, res) => {
    let query = {_id: new ObjectId(req.params.id)};
    recordsModel.deleteOne(query).exec((err,data)=>{
        if(err){
            res.status(500).json(err);
        }else{
            res.status(201).send({
                statusCode:200,
                message: 'Delete Successfully'
            })
        }
    })
}

//This is to retrive the records in the collection
exports.findRecords = (req, res) => {
    let query = {_id: new ObjectId(req.params.id)};
    recordsModel.findOne(query).exec((err,data)=>{
        if(err){
            res.status(500).json(err);
        }else{
            res.status(201).send({
                statusCode: 200,
                message: 'records found successfully',
                data : data
            })
        }
    })
}