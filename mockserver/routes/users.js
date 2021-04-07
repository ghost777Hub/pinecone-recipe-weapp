var express = require('express')
var router = express.Router()
var Mock = require('mockjs')
var Random = Mock.Random
var { bannerListData, recommendData, keyWordData, randomRecipesData, allRecipesData } = require('../database/index')



/* GET users listing. */
router.get('/home/banner', function (req, res, next) {
  // var data = Mock.mock({
  //   'list|20': [{
  //     'guid': Random.guid(),
  //     'name': '@cname()',
  //     'description': '@cparagraph',
  //     'img': Random.image()
  //   }]
  // })
  var data = Mock.mock({
    "bannerListData": bannerListData
  })

  res.send({
    meta: {
      message: 'success'
    },
    status: true,
    data: data.bannerListData
  })
})

router.get('/home/recommend', function (req, res, next) {
  var data = Mock.mock({
    "recommendData": recommendData
  })

  res.send({
    meta: {
      message: 'success'
    },
    status: true,
    data: data.recommendData
  })
})

router.get('/random/keyword', function (req, res, next) {
  var data = Mock.mock({
    "keyWordData": keyWordData
  })

  res.send({
    meta: {
      message: 'success'
    },
    status: true,
    data: data.keyWordData
  })
})

router.get('/random/recipes', function (req, res, next) {
  var data = Mock.mock({
    "randomRecipes": randomRecipesData[Random.natural(0, randomRecipesData.length-1)]
  })

  res.send({
    meta: {
      message: 'success'
    },
    status: true,
    data: data.randomRecipes
  })
})


router.post('/recipes/list', function (req, res, next) {
  const {type, value, currentPage} = req.body
  let searchValue  //搜索结果
  let _data = []  //数据数据
  let afterPageCOde  //搜索后的当前页码
  let str = ['',...value,''].join('.*') //转化成正则格式的字符串 -->你好
  let reg = new RegExp(str) //正则  --> /.*你.*好.*/

  //数据搜索
  if(type === 'search'){
    searchValue = allRecipesData.filter((item)=>{
      if(reg.test(item.title)) return item  //模糊匹配  这里没有考虑非法字符等问题
    })

    //数据组装
    if(searchValue.length > 0){
      searchValue.forEach(item=>{
        const _arrObj = {
          id: item.id,
          imageSrc: item.imageSrc,
          title: item.title,
          content: item.content,
          score: item.score,
          LikesNumber: item.LikesNumber,
          collectorsNumber: item.collectorsNumber,
        }
        _data.push(_arrObj)
      })
    }
  }
  //数据搜索
  if(type === 'class'){
    searchValue = allRecipesData.filter((item)=>{
      return item.subClassCode.find(subItem=>{ //第二层级应该用find
        if(subItem === value) return item
        //console.log('subItem', subItem, value)
      })
    })

    //数据组装(每次返回10条，不包括上次返回的最后一条，so+1。 例：上次9，这次--> 10~20)
    if(searchValue.length > 0){
      for (let index = currentPage+1; index < currentPage+11; index++) {
        if(!searchValue[index]) {
          afterPageCOde =  index -1
          break //超出数组下标，结束
        }

        const item = searchValue[index]
          const _arrObj = {
          id: item.id,
          imageSrc: item.imageSrc,
          title: item.title,
          content: item.content,
          score: item.score,
          LikesNumber: item.LikesNumber,
          collectorsNumber: item.collectorsNumber,
        }
        _data.push(_arrObj)
        afterPageCOde =  index
      }
    }
  }


  console.log(searchValue, _data, req.body);
  //数据填充
  res.send({
    meta: {
      message: 'success'
    },
    status: true,
    data: {
      pageData: _data,
      currentPageCode: afterPageCOde || 0,
      type
    }
  })
})

router.post('/recipes/detail', function (req, res, next) {
  const {rId} = req.body
  let searchValue  //搜索结果
  let _data = {}  //数据数据

  if(rId) {
    searchValue = allRecipesData.find((item)=>{  //id是唯一的
      if(item.id === rId) return item
    })

    if(searchValue){
      _data = searchValue
    }
    console.log(searchValue)
  }

  console.log(req.body)
  res.send({
    meta: {
      message: 'success'
    },
    status: true,
    data: _data
  })
})

module.exports = router