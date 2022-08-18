const db = require("../db/server");

// 获取分类
getCate = (err, res) => {
  const sql = "select * from cate";
  const sqlArr = [];
  const callBack = (err, data) => {
    if (err) {
      console.log("连接失败");
    } else {
      res.send({
        list: data,
      });
    }
  };
  db.sqlConnect(sql, sqlArr, callBack);
};

module.exports = {
  getCate,
};
