var express = require('express');
var app = express();

// 引入路由模块
var FilmRouter = require('./routes/film.js');
var UserRouter = require('./routes/user.js');
var CinemaRouter = require('./routes/cinema.js');
var AddressRouter = require('./routes/address.js');

// 使用路由模块，中间件
app.use('/api/film/', FilmRouter);
app.use('/api/user/', UserRouter);
app.use('/api/cinema/', CinemaRouter);
app.use('/api/address/',AddressRouter);

app.listen(3000);
console.log('服务启动成功');
