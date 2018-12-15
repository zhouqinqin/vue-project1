var express = require('express');
var app = express();

// 引入路由模块
var FilmRouter = require('./routes/film.js');
var UserRouter = require('./routes/user.js');

// 使用路由模块，中间件
app.use('/api/film/', FilmRouter);
app.use('/api/user/', UserRouter);


app.listen(3000);
console.log('服务启动成功');
