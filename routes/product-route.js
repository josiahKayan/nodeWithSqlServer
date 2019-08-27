const productController = require('../controllers/product-controller');
const auth = require('../middlewares/auth');
const express = require('express');
const router = express.Router();

router.get('/fazerlogin/token',productController.logar);

router.get('/', auth,productController.getAll );

router.get('/:id',auth, productController.get );

router.post('/create',auth, productController.post );

router.put('/update/:id',auth, productController.put );

router.delete('/delete/:id',auth, productController.delete );


module.exports = router;