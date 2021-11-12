const mongoose = require('mongoose');

const user2= mongoose.Schema({
    availableseats:{
        type: Number,
    },
    totalseats:{
        type: Number,
    },
    onlineseats:{
        type: Number,
    },
    offlineseats:{
        type: Number,
    },
    subjectcode:{
        type: String,
        required: true,
        //required: true,
         //unique: false,
    },
  
});

module.exports = User2 = mongoose.model('user2', user2);