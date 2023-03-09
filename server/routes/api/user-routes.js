const router = require('express').Router();
const {
  createUser,
  addUser,
  getSingleUser,
  login,
} = require('../../controllers/user-controller');

const { authMiddleware } = require('../../utils/auth'); 

router.route('/').post(createUser).put(authMiddleware, addUser);

router.route('/login').post(login);

router.route('/users').get(authMiddleware, getSingleUser);


module.exports = router;