const express = require("express");
const mongoose = require("mongoose");
const User1 = require("../DB/User1");
const User2 = require("../DB/User2");
const route = express.Router();

route.post("/", async (req, res) => {
  const { fullname, dob, roll_no } = req.body;
  let user1 = {};
  user1.fullname = fullname;
  user1.dob = dob;
  user1.roll_no = roll_no;
  let user = await User1.findOne({ roll_no: roll_no });
  //console.log(user + "Mukul");

  if (user == null) {
    user = await User1.create(user1);
  }
  res.send(user);
});

route.post("/info", async (req, res, next) => {
  // var subjectcode=req.body.subjectcode;
  //console.log(subjectcode)
  try {
    const respo = await User1.find({
      subjectcode: req.body.subjectcode,
    });
    res.send(respo);
  } catch (err) {
    res.status(500);
    res.send({
      err: "Server error",
    });
    next(err);
  }
});

route.post("/collections", async (req, res, next) => {
  const { subjectcode, offline_online, id } = req.body;

  try {
    let doc = await User2.findOne({
      subjectcode: subjectcode,
    });

    console.log(id + "ID")
    let ind = doc.students.findIndex(function (student, index) {
      console.log(student.toString())
      if (student.toString() === id) return true;
    });

    console.log(ind + "Ind")

    if (ind != -1) {
      res.send({ message: "User already exists" });
    } else {
      doc.availableseats -= 1;
      doc.students.push(id);
      if (offline_online === "online") {
        doc.onlineseats -= 1;
      } else {
        doc.offlineseats -= 1;
      }

      await doc.save();

      res.send(doc);
    }
  } catch (err) {
    // res.status(500);
    res.send({
      err: "Server error",
    });
  }
});
module.exports = route;