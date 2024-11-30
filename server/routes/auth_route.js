const express = require('express');
const router = express.Router();

const { signup, signin } = require('../controllers/auth_controller');


router.post('/signup', signup);
router.post('/signin', signin);

module.exports = router;