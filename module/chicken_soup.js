const db = require("../db/server");

// 获取鸡汤句子
getChickenSoup = (err, res) => {
  const sql = "select * from chicken_soup";
  const sqlArr = [];
  const callBack = (err, data) => {
    if (err) {
      console.log("连接失败");
    } else {
      res.send({
        list: data,
        status: 200,
        message: "获取成功",
      });
    }
  };
  db.sqlConnect(sql, sqlArr, callBack);
};

module.exports = {
  getChickenSoup,
};
