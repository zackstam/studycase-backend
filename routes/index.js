
const express = require('express');
const tagRoutes = require('../routes/tag');
const router = express.Router();
const productRoutes = require('../routes/product');


router.use('/tag', tagRoutes);
router.use('/product', productRoutes);
module.exports = router;