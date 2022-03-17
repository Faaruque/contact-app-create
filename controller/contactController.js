const Contact = require("../model/Contact");
exports.getAllContact = (req, res) => {
  Contact.find()
    .then((contacts) => {
      res.status(201).json(contacts);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({
        message: "Error Occurred",
      });
    });
};

exports.singleContact = (req, res) => {
  const { id } = req.params;
  Contact.findById(id)
    .then((contact) => {
      res.status(201).json(contact);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({
        message: "Error Occurred",
      });
    });
};

exports.postContact = (req, res) => {
  let { name, phone, email } = req.body;
  let contact = new Contact({
    name,
    phone,
    email,
  });
  contact
    .save()
    .then((contact) => {
      res.status(201).json(contact);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({
        message: "Error Occurred",
      });
    });
};

exports.updateContact = (req, res) => {
  let { name, phone, email } = req.body;
  let { id } = req.params;
  Contact.findOneAndUpdate(
    { _id: id },
    { $set: { name, email, phone } },
    { new: true }
  )
    .then((contact) => {
      res.status(201).json(contact);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({
        message: "Error Occurred",
      });
    });
};

exports.deletContact = (req, res) => {
  let { id } = req.params;
  Contact.findOneAndDelete({ _id: id })
    .then((contact) => {
      res.status(201).json(contact);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({
        message: "Error Occurred",
      });
    });
};
