const User = require("../models/user");
exports.get = function(req,res){
    User.find({}).then(rs=>{
        res.render("home",{
            items: rs
        });
    }).catch(err=>{
        res.send(err);
    });
}
exports.createForm = (req,res)=>{
    res.render("addNew");
};
exports.save = (req,res)=>{
    let s = req.body;
    let newUser = new User(s);
    newUser.save().then(rs=>{
        res.redirect("/");
    }).catch(err=>{
        res.send(err);
    })
};