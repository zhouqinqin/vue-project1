// 专门处理影片相关的接口
var express = require('express');
var router = express.Router();
var async = require('async');
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://127.0.0.1:27017/';


// 获取影片列表  location:3000/api/film/list
router.get('/list', function(req, res) {
  var pageNum = parseInt(req.query.pageNum) || 1; // 当前第几页
  var pageSize = parseInt(req.query.pageSize) || 5; // 每页显示多少条
  var isPresale = req.query.isPresale//传递过来的true或者false是字符串，true代表正在热映，false代表即将上映
  // console.log(isPresale);
  // 通过这个字符串，var一个对象进行条件查找。字符串的值代表对象的布尔类型的值。

  if (isPresale === 'false'){
    isPresale:false;
    var param = {
      isPresale:false
    };
  }else if(isPresale === 'true'){
    isPresale:true;
    var param = {
      isPresale:true
    };
  }

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

      async.waterfall([
        function (cb) {
          db.collection('films').find(param).count(function(err, num) {
            if (err) {
              cb(err);
            } else {
              cb(null, num);
            }
          })
        },

        function (num, cb) {
          db.collection('films').find(param).skip(pageSize * pageNum - pageSize).limit(pageSize).toArray(function(err, data) {
            if (err) {
              cb(err);
            } else {
              cb(null, {num: num, data: data});
            }
          })
        }
      ], function(err, result) {
        if (err) {
          console.log(err);
          res.json({
            code: 1,
            msg: '错误'
          })
        } else {
          res.json({
            code: 0,
            msg: 'OK',
            data: {
              films: result.data,
              total: result.num
            }
          })
        }
        client.close();
      })
    }
  })
})

// 获取影片详情的接口
router.get('/listOne', function(req, res) {
//  接收传递过来的id
  var filmId = parseInt(req.query.filmId);

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

      db.collection('films').find({
        filmId: filmId
      }).toArray( function(err, data) {
        if (err) {
            results.code = -1;
            results.msg = '数据查询失败';
            res.json(results);
            return;
        } else {
          results.code = 0;
          results.msg = '查询成功';
          results.data={info:data[0]};
          res.json(results);
        }
        client.close();
      });
    }
  })
})


module.exports = router;

