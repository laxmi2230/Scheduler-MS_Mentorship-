const express = require('express');
const mongoose = require('mongoose');
const User = require('../DB/User');
//const User1 = require('../DB/User1');
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
});

route.post('/check', async(req,res,next) => {
    try{
        const checks = await User.findOne({
             email:req.body.email,
        });
        res.send(checks);
    } catch (err) {
            res.status(500);  
            res.send({
              err: "Server error",
            });
            next(err);
          } 
    
})

module.exports = route;