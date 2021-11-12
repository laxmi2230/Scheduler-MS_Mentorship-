const express = require('express');
const mongoose = require('mongoose');
const User2 = require('../DB/User2');
const route = express.Router();

route.post('/', async (req, res)=> {
    const{availableseats,totalseats,onlineseats,offlineseats,subjectcode} = req.body;
    let user2 = {};
    user2.availableseats = availableseats;
    user2.totalseats = totalseats;
    user2.onlineseats = onlineseats;
    user2.offlineseats = offlineseats;
    user2.subjectcode = subjectcode;
    let usermodel2 = new User2(user2);
    await usermodel2.save();
    res.json (usermodel2);
})

module.exports = route;