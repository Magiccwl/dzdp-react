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
// 搜索结果页 - 搜索结果 - 三个参数
var searchListData = require('./search/list.js')
router.get('/api/search/:page/:city/:category/:keyword', function *(next) {
    // 参数
    const params = this.params
    const paramsPage = params.page
    const paramsCity = params.city
    const paramsCategory = params.category
    const paramsKeyword = params.keyword

    console.log('当前页数：' + paramsPage)
    console.log('当前城市：' + paramsCity)
    console.log('当前类别：' + paramsCategory)
    console.log('关键字：' + paramsKeyword)

    this.body = searchListData
})
// 搜索结果页 - 搜索结果 - 两个参数
router.get('/api/search/:page/:city/:category', function *(next) {
    // 参数
    const params = this.params
    const paramsPage = params.page
    const paramsCity = params.city
    const paramsCategory = params.category

    console.log('当前页数：' + paramsPage)
    console.log('当前城市：' + paramsCity)
    console.log('当前类别：' + paramsCategory)

    this.body = searchListData
})

app.use(router.routes())
   .use(router.allowedMethods());

app.listen(3000);
