const express = require('express');
const app = express();
const cors =require('cors')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
require('dotenv').config({ path: 'config/.env' })


//MiddleWare
app.use(cors());
app.use(express.json());
app.use(bodyParser.json({
    limit: '50mb'
}));

app.use(bodyParser.urlencoded({
    extended: true
}));
routes.loadRoutes(app);

//Database Connection
connectDB();

//start the server
const port = process.env.PORT || 8080
app.listen(port, () => {
    console.log(`server running on the port ${port}`)
})


function connectDB() {
    mongoose.set("strictQuery", false);
    const dbconfigurl = process.env.DB_CONNECTION || ""
    mongoose.connect(
        dbconfigurl
        , {
            useUnifiedTopology: true,
            useNewUrlParser: true
        }
    );

    const db = mongoose.connection; //getting a connection in mongoDB
    let recorddb = db.db('recordList') // getting a particular database in a mongoDB.
    db.on("error", function () {
        console.error.bind(console, "connection error: ")
        process.exit();
    });
    db.once("open", function () {
        console.log("Connected to DB successfully");
    });
}

module.exports = app;