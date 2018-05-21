/**
 * Created by zhangyiqing on 17/2/10.
 *
 * 商户模块
 */

var express = require('express');
var router = express.Router();
var utils = require('../../libs/utils');

// var _ = require('underscore');

//设置请求头
router.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  next();
});

router.get('/login', function (req, res, next) {
  return utils.send(res, 'hello world');
},
  utils.processAPIErrorMiddleware //处理
);

router.get('/search', function (req, res, next) {
  let keyword = req.query.keyword;

})

module.exports = router;
