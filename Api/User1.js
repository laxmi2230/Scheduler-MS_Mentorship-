const express = require('express');
const mongoose = require('mongoose');
const User1 = require('../DB/User1');
const route = express.Router();

route.post('/', async (req, res)=> {
    const{fullname,dob,subjectcode,subjectname} = req.body;
    let user1 = {};
    user1.fuulname = fullname;
    user1.dob = dob;
    user1.subjectcode = subjectcode;
    user1.subjectname = subjectname;
    let usermodel1 = new User1(user1);
    await usermodel1.save();
    res.json (usermodel1);
})

module.exports = route;