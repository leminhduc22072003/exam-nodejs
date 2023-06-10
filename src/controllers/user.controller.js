const User = require("../models/user");
exports.get = function(req,res){
    User.find({}).then(rs=>{
        res.render("list",{
            items: rs
        });
    }).catch(err=>{
        res.send(err);
    });
}
exports.createForm = (req,res)=>{
    res.render("addNew");
};

exports.save = async (req,res)=>{
   
    const data = req.body;
    const user = new User(data);
    try {
        await user.save();
        res.redirect("/users/");
    } catch (error) {
        res.send(error);
    }
   
};