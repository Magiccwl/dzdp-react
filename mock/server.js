var app = require('koa')();
var router = require('koa-router')();

//test
// router.get('/',function *(next){
//   this.body = 'hello koa!'
// })

var homeAdDate = require('./home/ad.js')
router.get('/api/homead',function *(next){
  this.body = homeAdDate
});

var homeListData = require('./home/list.js')
router.get('/api/homelist/:city/:page', function *(next){
  const params = this.params
  const paramCity = params.city
  const paramPage = params.page

  console.log("current city" + paramCity)
  console.log("current page" + paramPage)

  this.body = homeListData
});

app.use(router.routes())
   .use(router.allowedMethods());

app.listen(3000);
