const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose')
const User = require('./models/user.model.js')
const jwt = require("jsonwebtoken");
const newsData = require('./news.js')
require("dotenv").config();

const SECRET_KEY = process.env.SECRET_KEY;

const app = express();

app.use(cors());
app.use(express.json());

PORT = process.env.PORT;

mongoose.connect(process.env.MONGODB_URI)
  .then(()=> {
    console.log("Connected to DB")
    app.listen(PORT, () => {
      console.log("Server running on port " + PORT);
    })   
  })
  .catch(e => console.log(e))

app.post("/api/sign-up", async (req, res) => {
  console.log(req.body);

  try {
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      measurements: {
        height: [],
        weight: []
      },
      record: new Map(),
    });

    await newUser.save();
    console.log(User);
    res.json({ status: "ok", created: true });
  } catch (e) {
    res.json({ status: "error", error: "Duplicate email" });
    console.log(e.message);
  }
});

app.post("/api/login", async (req, res) => {
  console.log(req.body);

  try {
    const user = await User.findOne({
      email: req.body.email,
      password: req.body.password,
    });

    if (user) {
      const token = jwt.sign(
        {
          name: user.name,
          email: user.email,
        },
        SECRET_KEY
      );

      res.json({ status: "ok", user: token });
    } else {
      res.json({ status: "ok", user: false });
    }
  } catch (e) {
    res.json({ status: "error", error: "Duplicate email" });
    console.log(e.message);
  }
});

app.get("/login", (req, res) => {
  const token = req.headers["x-access-token"];
  try {
    const user = jwt.verify(token, SECRET_KEY);
    res.json({ status: "ok", verified: true, user: user.name });
  } catch (e) {
    res.json({ status: "error", error: "Invalid Token", verified: false });
  }
});

app.post("/user/add", async (req, res) => {
  const token = req.headers["x-access-token"];
  let decodedToken;

  try {
    decodedToken = jwt.verify(token, SECRET_KEY);
  } catch (e) {
    res.json({ status: "error", error: "Invalid Token", verified: false });
  }

  console.log(req.body);
  const measurement = req.body.measurement;
  const value = req.body.value;

  try {
    let update = {};
    update[`measurements.${measurement}`] = {
      measurement: value,
      date: new Date(),
    };

    const person = await User.findOneAndUpdate(
      { email: decodedToken.email },
      { $push: update },
      { new: true, upsert: true }
    );
  } catch (e) {
    console.log(e);
  }

  res.json({ status: "ok" });
});

app.get("/user/measurements", async (req, res) => {
  try {
    const decodedToken = jwt.verify(req.headers["x-access-token"], SECRET_KEY);

    const person = await User.findOne({ email: decodedToken.email });
    console.log("Measurements sent!!!");
    res.json({ ...person["measurements"] });
  } catch (e) {
    console.log(e);
    res.json({ status: "error", error: "Invalid Token", verified: false });
  }
});

app.post("/user/exercises", async (req, res) => {
  try {
    const decodedToken = jwt.verify(req.headers["x-access-token"], SECRET_KEY);

    const person = await User.findOne({ email: decodedToken.email });

    if (!person) {
      return res.status(404).json({ error: "User not found." });
    }

    const { date, exercises } = req.body;
    console.log(date, exercises);

    const result = await User.updateOne(
      { email: decodedToken.email },
      { $set: { [`record.${date}`]: exercises } }
    );

    res.json({ message: "Update Successfully" });
  } catch (e) {
    console.log(e);
    res.json({ status: "error", error: "Invalid Token", verified: false });
  }
});

app.get("/user/exercises", async (req, res) => {
  try {
    const decodedToken = jwt.verify(req.headers["x-access-token"], SECRET_KEY);

    const person = await User.findOne({ email: decodedToken.email });

    if (!person) {
      return res.status(404).json({ error: "User not found." });
    }

    const date = req.query.date;

    var exeList = person.record.get(date);
    const exeDates = Object.keys(person.record.keys());

    if (exeList === undefined) {
      exeList = [];
    }
    console.log(exeList)
    res.json({ exeList: exeList, exeDates: exeDates });
  } catch (e) {
    console.error(e);
    res.json({ status: "error", error: "Invalid Token", verified: false });
  }
});

app.get("/news", (req, res) => {
  const countNews = parseInt(req.query.num);
  const pageNumber = parseInt(req.query.page || 1);
  if (countNews === -1) {
    const startingIndex = 6 * (pageNumber - 1);
    res.json(newsData.slice(startingIndex, startingIndex + 6));
  } else {
    res.json(newsData.slice(0, countNews));
  }
});

app.get("/count-news", (req, res) => {
  const pageCount = Math.ceil(newsData.length / 6);
  res.json({ pageCount: pageCount.toString() });
});

app.get("/", (req, res)=> {
  res.json({message: "API is working..."})

})

