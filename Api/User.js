const express = require("express");
const mongoose = require("mongoose");
const User = require("../DB/User");
const route = express.Router();

route.post("/", async (req, res) => {
  const { email, password, subjectcode, subjectname } = req.body;

  let existingTeacher = await User.findOne({ subjectcode: subjectcode });
  if (existingTeacher) {
    res.send({ message: "Teacher for given subject code already exists" });
    return;
  }
  let user = {};
  user.email = email;
  user.password = password;
  user.subjectcode = subjectcode;
  user.subjectname = subjectname;
  let usermodel = new User(user);
  await usermodel.save();
  res.json(usermodel);
});

module.exports = route;