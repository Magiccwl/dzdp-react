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

// 详情页 - 商户信息
const detailInfo = require('./detail/info.js')
router.get('/api/detail/info/:id', function *(next) {
    console.log('详情页 - 商户信息')

    const params = this.params
    const id = params.id

    console.log('商户id: ' + id)

    this.body = detailInfo
})

// 详情页 - 用户评论
const detailComment = require('./detail/comment.js')
router.get('/api/detail/comment/:page/:id', function *(next) {
    console.log('详情页 - 用户点评')

    const params = this.params
    const page = params.page
    const id = params.id

    console.log('商户id: ' + id)
    console.log('当前页数: ' + page)

    this.body = detailComment
})


// 订单列表
const orderList = require('./orderlist/orderList.js')
router.get('/api/orderlist/:username', function *(next) {
    console.log('订单列表')

    const params = this.params
    const username = params.username
    console.log('用户名：' + username)

    this.body = orderList
})
// 提交评论
router.post('/api/submitComment', function *(next) {
    console.log('提交评论')

    // 获取参数

    this.body = {
        errno: 0,
        msg: 'ok'
    }
})

app.use(router.routes())
   .use(router.allowedMethods());

app.listen(3000);
