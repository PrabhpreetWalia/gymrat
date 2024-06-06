const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const SECRET_KEY = process.env.SECRET_KEY;

const app = express();

const newsData = [
  {
    headline: "New Gym Equipment Arrives!",
    content:
      "Exciting news! We've just received a shipment of state-of-the-art gym equipment. Come check it out and take your workouts to the next level!",
    date: "12/03/2024",
  },
  {
    headline: "Yoga Class Schedule Update",
    content:
      "Attention yogis! We've updated our yoga class schedule with new sessions and instructors. Whether you're a beginner or advanced practitioner, we have a class for you!",
    date: "11/03/2024",
  },
  {
    headline: "Special Offer: Personal Training Sessions",
    content:
      "Take advantage of our limited-time offer on personal training sessions! Our certified trainers will create personalized workout plans to help you reach your fitness goals faster.",
    date: "10/03/2024",
  },
  {
    headline: "Nutrition Workshop Series",
    content:
      "Join us for our nutrition workshop series where you'll learn about the importance of nutrition for optimal health and fitness. Discover practical tips for fueling your body and enhancing your performance.",
    date: "09/03/2024",
  },
  {
    headline: "Group Fitness Challenge",
    content:
      "Get ready to challenge yourself and compete with fellow gym members in our group fitness challenge! Work together to achieve fitness milestones and win exciting prizes.",
    date: "08/03/2024",
  },
  {
    headline: "New Gym Membership Packages",
    content:
      "We've introduced new membership packages to suit your fitness needs and budget. Whether you prefer individual workouts or group classes, we have a membership option for you!",
    date: "07/03/2024",
  },
  {
    headline: "Fitness Bootcamp Registration Now Open",
    content:
      "Sign up now for our upcoming fitness bootcamp and kickstart your journey to a healthier you! Our intensive workout program is designed to challenge and inspire you.",
    date: "06/03/2024",
  },
  {
    headline: "Outdoor Yoga Session",
    content:
      "Enjoy the fresh air and sunshine in our outdoor yoga session! Connect with nature as you practice yoga poses and meditation techniques.",
    date: "05/03/2024",
  },
  {
    headline: "Healthy Cooking Class",
    content:
      "Learn how to prepare delicious and nutritious meals in our healthy cooking class. Our culinary experts will teach you valuable cooking skills and share healthy recipes.",
    date: "04/03/2024",
  },
  {
    headline: "Gym Renovation Announcement",
    content:
      "We're excited to announce that our gym will undergo renovation to create a more modern and comfortable workout environment. Stay tuned for updates on the renovation progress!",
    date: "03/03/2024",
  },
  {
    headline: "Wellness Seminar",
    content:
      "Attend our wellness seminar and gain insights into holistic health practices. Discover how to balance your physical, mental, and emotional well-being for a fulfilling life.",
    date: "02/03/2024",
  },
  {
    headline: "Gym Closed for Maintenance",
    content:
      "Please note that our gym will be closed for maintenance on [date]. We apologize for any inconvenience and appreciate your understanding.",
    date: "01/03/2024",
  },
  {
    headline: "Healthy Cooking Class",
    content:
      "Learn how to prepare delicious and nutritious meals in our healthy cooking class. Our culinary experts will teach you valuable cooking skills and share healthy recipes.",
    date: "04/03/2024",
  },
  {
    headline: "Gym Renovation Announcement",
    content:
      "We're excited to announce that our gym will undergo renovation to create a more modern and comfortable workout environment. Stay tuned for updates on the renovation progress!",
    date: "03/03/2024",
  },
  {
    headline: "Wellness Seminar",
    content:
      "Attend our wellness seminar and gain insights into holistic health practices. Discover how to balance your physical, mental, and emotional well-being for a fulfilling life.",
    date: "02/03/2024",
  },
];

app.use(cors());
app.use(express.json());

PORT = process.env.PORT;
let User;

const client = new MongoClient(process.env.MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();
    User = client.db("gymrat").collection("users");

    console.log("Connected to MongoDB");
  } catch (e) {
    console.log(e);
  }
}

run().catch(console.dir);

app.post("/api/sign-up", async (req, res) => {
  console.log(req.body);

  try {
    await User.insertOne({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      record: {},
    });
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

    var exeList = person.record[date];
    const exeDates = Object.keys(person.record);

    if (exeList === undefined) {
      exeList = [];
    }

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

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
