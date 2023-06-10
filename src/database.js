const server = "mongodb://localhost:27017";
const database = process.env.DB_NAME;
let mongoose = require("mongoose");

class Database{

    constructor() {
        this.__connect();
    }
    __connect (){
        // connect mongodb
        mongoose.connect(`${server}/${database}`)
            .then(()=>{
                console.log("Connected database!");
            })
            .catch((err)=>{
                console.log(err);
            })

    }
}
module.exports = new Database();