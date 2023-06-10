const express = require("express");
require("dotenv").config();
const database = require("./src/database");

const {Model} = require("mongoose");


const app = express();

const PORT = process.env.PORT;

app.listen(PORT,()=>{
    console.log("Sever is running...");
})
app.set("view engine","ejs");
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const session =require("express-session");
app.use(session({

    resave:true,
    saveUninitialized:true,
    secret:"t2204m",
    cookie:{
        maxAge:3600000,

    }
}))

app.get("/",function(req,res){
    const User = require("./src/models/user");
    User.find({})
        .then(rs=>{
            res.render("home",{
                users: rs
            })
        })
        .catch(err=>{
            res.send(err);
        })

})

const userRoute = require("../node-js/src/routes/user.routes");
app.use("/users",userRoute)