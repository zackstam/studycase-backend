
const express = require('express');
const tagRoutes = require('../routes/tag');
const router = express.Router();
const authRouter = require('../routes/auth');


router.use('/tag', tagRoutes);
router.use('/auth', authRouter);
module.exports = router;