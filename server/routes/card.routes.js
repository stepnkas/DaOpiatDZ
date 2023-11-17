const Router = require("express");
const Card = require("../models/Card");
const cardController = require('../controllers/cardController');

const router = new Router();

router.post('/create', cardController.createCard);
router.post('/getCard', cardController.getCard);

module.exports = router;