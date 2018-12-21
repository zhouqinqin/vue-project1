// 专门处理影片相关的接口
var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://127.0.0.1:27017/';

router.get('/list', function(req, res) {
  // 通过id查找当前id的数据
    var results ={};
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, client) {
      if (err) {
        // 直接返回错误
        console.log('链接数据库失败', err);
        res.json({
          code: 1,
          msg: '网络异常, 请稍候重试'
        })
      } else {
        var db = client.db('maizuo');

        db.collection('address').find({
        }).toArray( function(err, data) {
          // console.log(data)
          if (err) {
              results.code = -1;
              results.msg = '数据查询失败';
              res.json(results);
              return;
          } else {
            results.code = 0;
            results.msg = '查询成功';
            results.data = data;
            res.json(results);
          }
          client.close();
        });
      }
    })
  })


  module.exports = router;
