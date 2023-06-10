let mongoose = require("mongoose");

let user = new mongoose.Schema({
    FirstName: {
        type:String,
        required: true,
        minLength: [6,'Tên phải có độ dài tối thiểu là 6'],
        maxLength: 10
    },
    LastName: {
        type:String,
        required: true,
        minLength: [6,'Tên phải có độ dài tối thiểu là 6'],
        maxLength: 20
    },
    MobileNumber: {
        type:String,
        required: true,
        validate: {
            validator: (v)=> {
                const regExp = /^(\([0-9]{3}\)|[0-9]{3})[0-9]{3}[0-9]{4}/;
                return v.match(regExp) && v.startsWith('0');
            },
            message: t => `${t.value} không phải là số điện thoại`
        }
    },
    UserName: {
        type:String,
        required: true,
        minLength: [6,'Tên user phải có độ dài tối thiểu là 6'],
        maxLength: [20,'Tên user phải có độ dài tối đa là 20']
    },
    Password: {
        type:String,
        required: true,
        minLength:6,
        maxLength:255
    }
});
module.exports = mongoose.model("User",user);