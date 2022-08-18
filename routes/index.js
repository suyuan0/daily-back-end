var express = require("express");
var router = express.Router();
const cate = require("../module/user");
/* GET home page. */
router.get("/", cate.getCate);

module.exports = router;
