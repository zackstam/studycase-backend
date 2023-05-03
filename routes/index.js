
const express = require('express');
const tagRoutes = require('../routes/tag');
const router = express.Router();
const authRoutes = require('../routes/auth');

router.use('/tag', tagRoutes);

module.exports = router;