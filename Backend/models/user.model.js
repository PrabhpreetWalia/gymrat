const mongoose = require('mongoose');

const measurementSchema = new mongoose.Schema({
  measurement: { type: Number, required: true },
  date: { type: Date, required: true },
});

const exerciseRecordSchema = new mongoose.Schema({
  name: { type: String, required: true },
  sets: { type: Number, required: true },
  reps: { type: Number, required: true },
});

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  measurements: {
    height: [measurementSchema],
    weight: [measurementSchema],
  },
  record: { type: Map, of: [exerciseRecordSchema] },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
