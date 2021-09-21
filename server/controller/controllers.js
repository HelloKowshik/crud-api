const UserDB = require('../model/model');

exports.createUser = (req, res) => {
  if (!req.body) {
    res.status(400).send({ msg: 'Empty field Not Allowed!' });
    return;
  }
  const user = new UserDB({
    name: req.body.name,
    email: req.body.email,
    gender: req.body.gender,
    status: req.body.status,
  });
  user
    .save(user)
    .then((data) => {
      res.redirect('/add_user');
    })
    .catch((err) =>
      res
        .status(500)
        .send({ msg: err.message || 'Error occured while Creating User' })
    );
};

exports.findUsers = (req, res) => {
  if (req.query.id) {
    let id = req.query.id;
    UserDB.findById(id)
      .then((user) => {
        if (!user) {
          res.status(400).send({ msg: 'User not available' });
        } else {
          res.json(user);
        }
      })
      .catch((err) =>
        res.status(400).send({ msg: err.message || 'Error Occured!' })
      );
  } else {
    UserDB.find()
      .then((users) => res.json(users))
      .catch((err) =>
        res.status(400).send({ msg: err.message || 'Nothing Found' })
      );
  }
};

exports.updateUser = (req, res) => {
  if (!req.body) {
    return res.status(400).send({ msg: 'can not update empty field' });
  }
  const id = req.params.id;
  UserDB.findByIdAndUpdate(id, req.body, { new: true })
    .then((data) => {
      if (!data) {
        res.status(400).send({ msg: 'User Not Found!' });
      } else {
        res.json(data);
      }
    })
    .catch((err) =>
      res
        .status(500)
        .send({ msg: err.message || 'Error Occured while updating' })
    );
};

exports.deleteUser = (req, res) => {
  let id = req.params.id;
  UserDB.findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res.status(500).send({ msg: 'User Not Deleted' });
      } else {
        res.send({ msg: 'User Deleted!' });
      }
    })
    .catch((err) =>
      res
        .status(500)
        .send({ msg: err.message || 'Error Occured while deleting' })
    );
};
