const About = require("../models/About");

exports.getAbout = async (req, res) => {
  try {
    const about = await About.findOne();
    res.json(about);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createAbout = async (req, res) => {
  try {
    const about = await About.create(req.body);
    res.status(201).json(about);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};