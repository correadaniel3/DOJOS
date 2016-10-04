var express = require('express');
var router = express.Router();
var db = require('./queries');

router.get('/api/restaurants', db.getAllRestaurants);
router.get('/api/restaurants/:name',db.getRestaurantByName);
router.post('/api/restaurants',db.createRestaurant);
router.delete('/api/restaurants/:id',db.removeRestaurant);
router.put('/api/restaurants/:id',db.updateRestaurant);

router.get('/api/menus', db.getAllMenus);
router.get('/api/menus/:name', db.getMenusByRestaurant);
router.get('/api/menus/id/:id', db.getMenusByRestaurantId);
router.post('/api/menus',db.createMenu);
router.delete('/api/menus/:id',db.removeMenu);
router.put('/api/menus/:id',db.updateMenu);


module.exports = router;