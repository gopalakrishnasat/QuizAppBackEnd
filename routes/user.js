const express = require('express')

const {getUsers,
        getUser,
        createUser,
        updateUser,
        deleteUser,
        userLogin} = require('../controllers/user');
const router = express.Router();

router.route('/api/users').get(getUsers);
router.route('/api/user/:id').get(getUser);
router.route('/api/createUser').post(createUser);
router.route('/api/updateUser/:id').put(updateUser);
router.route('/api/deleteUser/:id').delete(deleteUser);
router.route('/api/userLogin').post(userLogin)







//  router.get('/',(req, res) =>{
//     res.send('Hello World')
//   })

  

module.exports = router;