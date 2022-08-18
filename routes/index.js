var express = require("express");
var router = express.Router();
const chickenSoup = require("../module/chicken_soup");
// 鸡汤短句
router.get("/chicken_soup", chickenSoup.getChickenSoup);
module.exports = router;
