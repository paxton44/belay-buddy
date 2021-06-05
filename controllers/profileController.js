const db = require("../models");


// Defining methods for the userProfilesController
module.exports = {
  
  findById: function (req, res) {
    db.userProfile.findById(req.params.id)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  //Save profile into database
  create: function (req, res) {
    console.log(req.body)
    db.UserProfile.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  // update: function (req, res) {
  //   db.UserProfile.findOneAndUpdate({ _id: req.params.id }, req.body)
  //     .then((dbModel) => res.json(dbModel))
  //     .catch((err) => res.status(422).json(err));
  // },
  // remove: function (req, res) {
  //   db.UserProfile.findById({ _id: req.params.id })
  //     .then((dbModel) => dbModel.remove())
  //     .then((dbModel) => res.json(dbModel))
  //     .catch((err) => res.status(422).json(err));
  // },
};
