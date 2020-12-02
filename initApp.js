
let App={};
var Douyin = require('./app/douyin.js')
App.douyin = new Douyin()
var Kuaishou = require('./app/kuaishou.js')
App.kuaishou = new Kuaishou();
var Shuabao = require('./app/shuabao.js')
App.shuabao = new Shuabao();

module.exports = App;