const express = require('express');
const router = express.Router();

//helpers
const checkAuth = require('../helpers/auth').checkAuth;

const roupasController = require('../controller/roupasController');
//add
router.get('/add', checkAuth, roupasController.createroupas);
router.post('/postLook', checkAuth, roupasController.createroupasSave);
router.get('/all-looks', checkAuth, roupasController.showroupas);

// router.('/look', checkAuth, roupasController.showroupas);
//delete
// router.post('/delete', roupasController.deleteroupas);
// router.get('/', checkAuth, roupasController.showroupas);

//update
router.get('/look/:id', checkAuth, roupasController.updateroupas);
router.post('/update/:id', checkAuth, roupasController.updateroupasave);
// router.post('/update', roupasController.updateroupasSave);

//done
// router.post('/done', roupasController.doneroupas);

// router.get('/looks', roupasController.showLooks)

module.exports = router;
