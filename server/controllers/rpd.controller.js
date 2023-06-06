var rpdModel = require("../models/rpd.model");

//create new rpd//
exports.create = (req, res) => {
  console.log(req.body)
  // new rpd  //
  const rpd = new rpdModel({
    event: req.body.event,
    behavior: req.body.behavior,
    emotion: req.body.emotion,
    automatic_thought: req.body.automatic_thought,
    createdBy: req.body.createdBy,
    date: req.body.date,
    restructuring: req.body.restructuring,
  });

  //save rpd in database //
  rpd
    .save(rpd)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message + "error ocurred while creating rpd",
      });
    });
};

// get all or single user //
exports.find  = (req, res) => {
  if (req.query.createdBy) {
    rpdModel.find({ createdBy: req.query.createdBy }).then((data) => {
      if (!data) {
        res
          .status(404)
          .send({ message: `failed to locate rpds by ${req.body.createdBy}` });
      } if (data.length > 1) {
        res.send(data);
      } else if (data.length <= 1) {
        res.send([data])
      }
    });
  } else {
    rpdModel
      .find()
      .then((user) => {
        res.send(user);
      })
      .catch((e) => {
        res.send(500).send({
          message: err.message + "error ocurred while retreaving for rpd",
        });
      });
  }
};

// update an user by id //
exports.update = (req, res) => {
  try {
    if (req.body) {
      return res.status(400).send({ message: "data to update can't be empty" });
    }
    const id = req.params.id;
    rpdModel
      .findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then((data) => {
        if (!data) {
          res.status(404).send({ message: `can't update user with ${id}` });
        } else {
          res.send(data);
        }
      });
  } catch (e) {
    res.status(500).send({ message: "Error while updating rpd" });
  }
};

// delete an user by id //
exports.delete = (req, res) => {
  const id = req.params.id;
  rpdModel
    .findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: `Can't delete wiht id ${id}` });
      } else {
        res.send({ message: "rpd deleted with success" });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "could not delete rpd with id " + id,
      });
    });
};

