const Contact = require("../models/contactModel");
exports.contactus = async (req, res) => {
  try {
    let contacts = await Contact.find({ email: req.body.email });
    if (!contacts) {
      console.log("work");
      contacts = await Contact.create(req.body);
      return res.status(200).json({
        status: "success",
        data: { contacts },
      });
    }
    await Contact.updateOne(
      { email: req.body.email },
      { $push: { contactsArray: req.body.contactsArray } }
    );

    res.status(200).json({
      status: "success",
      data: { contacts },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
exports.getAllContact = async (req, res) => {
  const contacts = await Contact.find().select("-__v");
  res.status(200).json({
    status: "success",
    result: contacts.length,
    data: { contacts },
  });
};
