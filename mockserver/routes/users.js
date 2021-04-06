var express = require('express')
var router = express.Router()
var Mock = require('mockjs')
var Random = Mock.Random
var { bannerListData, recommendData, keyWordData, randomRecipes } = require('../database/index')



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
    "randomRecipes": randomRecipes[Random.natural(0, randomRecipes.length-1)]
  })

  res.send({
    meta: {
      message: 'success'
    },
    status: true,
    data: data.randomRecipes
  })
})

module.exports = router