const Axios = require('axios');
exports.home = (req, res) => {
  Axios.get('https://crud-app-2021.herokuapp.com/api/users')
    .then((resp) => {
      res.render('index', { users: resp.data });
    })
    .catch((err) => res.send(err.message));
};

exports.addUser = (req, res) => res.render('add_user');

exports.updateUsers = (req, res) => {
  Axios.get('https://crud-app-2021.herokuapp.com/api/users', {
    params: { id: req.query.id },
  })
    .then((userData) => res.render('update_user', { user: userData.data }))
    .catch((err) => res.send(err.message));
};
