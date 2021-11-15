const express = require('express');
const mongoose = require('mongoose');
const User1 = require('../DB/User1');
const route = express.Router();

route.post('/', async (req, res)=> {
    const{fullname,dob,subjectcode,offline_online,subjectname} = req.body;
    let user1 = {};
    user1.fullname = fullname;
    user1.dob = dob;
    user1.subjectcode = subjectcode;
    user1.offline_online = offline_online;
    user1.subjectname = subjectname;
    let usermodel1 = new User1(user1);
    await usermodel1.save();
    res.json (usermodel1);
})

route.post("/info", async (req,res,next)=>{ 
   // var subjectcode=req.body.subjectcode;  
  //console.log(subjectcode)
try{
    const respo = await User1.find({
        subjectcode:req.body.subjectcode
    });
    res.send(respo);
} catch (err) {     
    res.status(500);
    res.send({
        err: "Server error",
    });
    next(err);
}
}) 
module.exports = route;