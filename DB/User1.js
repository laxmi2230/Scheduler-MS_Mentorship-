const mongoose = require('mongoose');

const user1= mongoose.Schema({
    fullname:{
        type: String,
    },
    dob:{
        type: Date
    },
    subjectcode:{
        type: String,
        required: true,
        //required: true,
         //unique: false,
    }, 
    offline_online:{
        type: String,
    },
    subjectname:{
        type: String
    }
});

module.exports = User1 = mongoose.model('user1', user1);