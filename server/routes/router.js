const {
  createUser,
  findUsers,
  updateUser,
  deleteUser,
} = require('../controller/controllers');
const { home, addUser, updateUsers } = require('../services/render');

const router = require('express').Router();

router.get('/', home);
router.get('/add_user', addUser);
router.get('/update_user', updateUsers);

//API

router.post('/api/users', createUser);
router.get('/api/users', findUsers);
router.put('/api/users/:id', updateUser);
router.delete('/api/users/:id', deleteUser);

module.exports = router;
