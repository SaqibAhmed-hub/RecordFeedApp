var records = require('./recordDA');


exports.save = (req,res) =>{
    try {
        records.insertRecords(req,res);   
    } catch (error) {
        console.log(error);
    }

}


exports.list = (req,res) =>{
    try {
        records.listRecords(req,res);   
    } catch (error) {
        console.log(error);
    }

}


exports.delete = (req,res) =>{
    try {
        records.deleteRecords(req,res);   
    } catch (error) {
        console.log(error);
    }
}


exports.update = (req,res) =>{
    try {
        records.updateRecords(req,res);   
    } catch (error) {
        console.log(error);
    }

}

exports.finds = (req,res) =>{
    try {
        records.findRecords(req,res);   
    } catch (error) {
        console.log(error);
    }

}