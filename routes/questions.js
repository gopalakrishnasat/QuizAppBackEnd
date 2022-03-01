const express = require('express');

const { createQuestion,getQuestions } = require('../controllers/questions');

const router = express.Router();

router.route('/api/createQuestion').post(createQuestion);
router.route('/api/getAllQuestions').get(getQuestions);



module.exports = router;