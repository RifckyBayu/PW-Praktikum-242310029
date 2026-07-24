const Contact = require("../models/Contact");

// GET
exports.getContact = async (req, res) => {
  try {
    const contact = await Contact.findOne();

    res.json(contact);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// POST
exports.createContact = async (req, res) => {
  try {
    const contact = await Contact.create(req.body);

    res.status(201).json(contact);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// PUT
exports.updateContact = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(contact);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// DELETE
exports.deleteContact = async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);

    res.json({ message: "Contact deleted" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};