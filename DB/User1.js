const mongoose = require('mongoose');

const user1= mongoose.Schema({
    fullname:{
        type: String
    },
    dob:{
        type: Number
    },
    subjectcode:{
        type: String,
        required: true,
        //required: true,
         //unique: false,
    },
    subjectname:{
        type: String
    }
});

module.exports = User1 = mongoose.model('user1', user1);