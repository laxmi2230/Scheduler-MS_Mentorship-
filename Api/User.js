const express = require('express');
const mongoose = require('mongoose');
const User = require('../DB/User');
const route = express.Router();

route.post('/', async (req, res)=> {
    const{email,password,subjectcode,subjectname} = req.body;
    let user = {};
    user.email = email;
    user.password = password;
    user.subjectcode = subjectcode;
    user.subjectname = subjectname;
    let usermodel = new User(user);
    await usermodel.save();
    res.json (usermodel);
})

module.exports = route;