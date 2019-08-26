const productController = require('../controllers/product-controller');
const express = require('express');
const router = express.Router();


router.get('/', productController.getAll );

router.get('/:id', productController.get );

router.post('/create', productController.post );

router.put('/update/:id', productController.put );

router.delete('/delete/:id', productController.delete );



module.exports = router;