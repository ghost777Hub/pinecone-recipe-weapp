var Mock = require('mockjs')
var Random = Mock.Random



const bannerListData = [
  {
    id: 'F7bc64Ab-C358-892E-D855-ef15fCBAc810',
    imageSrc: '/home/01078d591e9853b5b3086ed4294cc8.jpg'
  },
  {
    id: '9944Ff2c-cBa7-FeFD-5cd6-CdB0Ed2CAff0',
    imageSrc: '/home/01d84d5d831815a801211d539745ff.png'
  },
  {
    id: 'c6ce973A-8dFA-d58E-f5eF-E7490Ed20A46',
    imageSrc: '/home/01f1345c823a8ca801217ce6157702.jpg'
  },
  {
    id: '9d3921c5-dCf1-7ecd-3c50-bb214C8Aeb8d',
    imageSrc: '/home/0120245b86a11ca8012126ceca7e92.jpg'
  },
]

const recommendData = {
  newest:[
    {
      id: '5A115081-bEAE-fDF5-D5e7-37151CdDFDE5',
      imgSrc: '/home/01d7c65d831882a801211d5379ed0c.png',
      title: '芝士夹心牛排',
      xuanchuanContent: '吃得是健康，享受天然爱。',
      content: '主料: Big Tummy儿童牛排3#,黄油,香菇,淡奶油,芝士',
      productionTime: '<1小时',
      LikesNumber: Random.integer(100, 5000),
      collectorsNumber: Random.integer(20, 1000)
    },
    {
      id: 'CEbFB92A-Acf1-BECf-3e4D-d5F39eedaAd3',
      imgSrc: '/home/01f78c5d831817a801211d53c37800.png',
      title: '海鲜粥',
      xuanchuanContent: '原滋味，好滋味！',
      content: '主料:大米、虾仁、干贝、香菇、玉米粒、豌豆粒',
      productionTime: '1小时',
      LikesNumber: Random.integer(100, 5000),
      collectorsNumber: Random.integer(20, 1000)
    },
    {
      id: 'BFDDd6d7-8f6b-9D4a-be2F-2fFeefA5CCdC',
      imgSrc: '/home/0161fe5d831816a801211d53fb30eb.png',
      title: '传奇蒸蛋',
      xuanchuanContent: '吃了它，这个春天才算没白过',
      content: '主料: 鸡蛋、温开水、葱花、生抽',
      productionTime: '<30分钟',
      LikesNumber: Random.integer(100, 5000),
      collectorsNumber: Random.integer(20, 1000)
    },
  ],
  hotMoney: [
    {
      id: '4bD56eeB-C2C1-5ADF-EB89-Cc6BDAfeBe3f',
      imgSrc: '/home/0115fa5d83187fa8012060beeea58c.png',
      title: '姜汁豆腐',
      xuanchuanContent: '食尚和健康结合的完美结合',
      content: '主料: 北豆腐、香菜、盐、料酒、胡椒粉、鸡精、干淀粉、酱油、葱姜汁、高汤、食用油',
      productionTime: '<30分钟',
      LikesNumber: Random.integer(100, 5000),
      collectorsNumber: Random.integer(20, 1000)
    },
    {
      id: '784cc9aD-DDBf-de2F-FCce-EFc997c3De4b',
      imgSrc: '/home/0135965d831817a801211d533e1142.png',
      title: '酱汁蒸菇鸡',
      xuanchuanContent: '原生态食品，你hold住吗？',
      content: '主料: 蘑菇，鸡，盐、绍兴酒、酱油、湿淀粉、白糖、葱段、姜片',
      productionTime: '>1小时',
      LikesNumber: Random.integer(100, 5000),
      collectorsNumber: Random.integer(20, 1000)
    },
    {
      id: 'Ed3d5f1E-dBec-DCE9-ffAb-Eb0493604c11',
      imgSrc: '/home/017b2c5d831881a8012060be0d83e7.png',
      title: '蟹粉狮子头',
      xuanchuanContent: '风吹柳花满店香，吴姬压酒劝客尝',
      content: '主料: 五花肉、蟹肉、虾籽、蟹黄、生菜',
      productionTime: '>2小时',
      LikesNumber: Random.integer(100, 5000),
      collectorsNumber: Random.integer(20, 1000)
    },
  ],
  todayFood: [
    {
      id: '5F82a6E8-B354-F9d4-A66f-D9b6bB2f3EeE',
      imgSrc: '/home/download-1.jpg',
      title: '小葱拌豆腐',
      xuanchuanContent: '清爽平和地穿过你的喉咙',
      content: '主料: 小葱、豆腐、香菜、香油',
      productionTime: '<30分钟',
      LikesNumber: Random.integer(100, 5000),
      collectorsNumber: Random.integer(20, 1000)
    },
    {
      id: '2c2C9fe8-e91B-cA9E-BDB5-F5FBb7fd4Ec7',
      imgSrc: '/home/0161215d831880a801211d53f42050.png',
      title: '南瓜汤',
      xuanchuanContent: '它是液体的狂欢',
      content: '主料: 水、南瓜、牛奶、盐',
      productionTime: '>30分钟',
      LikesNumber: Random.integer(100, 5000),
      collectorsNumber: Random.integer(20, 1000)
    },
    {
      id: 'DB5c7C56-89f0-353a-dBDF-dbbc68dd94DC',
      imgSrc: '/home/015c5d5d831815a8012060be859c4b.png',
      title: '冰皮月饼',
      xuanchuanContent: '剥开皮，里面是美味和健康',
      content: '主料: 水磨糯米粉、粘米粉、玉米油、绵白糖、小麦淀粉、牛奶',
      productionTime: '<1小时',
      LikesNumber: Random.integer(100, 5000),
      collectorsNumber: Random.integer(20, 1000)
    },
  ],
}

const keyWordData = [
  {
    id: 'F7bc64Ab-C358-892E-D855-ef15fCBAc810',
    title: '米太极煲仔饭',
  },
  {
    id: '9944Ff2c-cBa7-FeFD-5cd6-CdB0Ed2CAff0',
    title: '豉油鸡',
  },
  {
    id: 'c6ce973A-8dFA-d58E-f5eF-E7490Ed20A46',
    title: '手打鲜肉包',
  },
  {
    id: '9d3921c5-dCf1-7ecd-3c50-bb214C8Aeb8d',
    title: '抹茶千层',
  },
  {
    id: '5A115081-bEAE-fDF5-D5e7-37151CdDFDE5',
    title: '芝士夹心牛排',
  },
  {
    id: 'CEbFB92A-Acf1-BECf-3e4D-d5F39eedaAd3',
    title: '海鲜粥',
  },
  {
    id: 'BFDDd6d7-8f6b-9D4a-be2F-2fFeefA5CCdC',
    title: '传奇蒸蛋',
  },
  {
    id: '4bD56eeB-C2C1-5ADF-EB89-Cc6BDAfeBe3f',
    title: '姜汁豆腐',
  },
  {
    id: '784cc9aD-DDBf-de2F-FCce-EFc997c3De4b',
    title: '酱汁蒸菇鸡',
  },
  {
    id: 'Ed3d5f1E-dBec-DCE9-ffAb-Eb0493604c11',
    title: '蟹粉狮子头',
  },
  {
    id: '5F82a6E8-B354-F9d4-A66f-D9b6bB2f3EeE',
    title: '小葱拌豆腐',
  },
  {
    id: '2c2C9fe8-e91B-cA9E-BDB5-F5FBb7fd4Ec7',
    title: '南瓜汤',
  },
  {
    id: 'DB5c7C56-89f0-353a-dBDF-dbbc68dd94DC',
    title: '冰皮月饼',
  },
]

const randomRecipes = [
  {
    id: '8e5bf6E2-D591-57ef-Dd1c-269321f6Ed5f',
    imgSrc: '/random/src=http___cbu01.alicdn.com_img_ibank_.jpg',
    title: '酸笋牛肉',
    xuanchuanContent: '酸爽又开胃！最适合夏天吃的一道肉',
    content: '主料: 酸笋、牛里脊肉（前腿肉也可以）、小葱、姜',
    productionTime: '<30分钟',
    LikesNumber: Random.integer(100, 5000),
    collectorsNumber: Random.integer(20, 1000)
  },
  {
    id: '9c38CfFb-BF8d-dB35-2DEb-e1Ac4fBAfDBa',
    imgSrc: '/random/0128955c262f40a80121df90357af1.jpg',
    title: '莲子红豆粥',
    xuanchuanContent: '最幸福的时刻便是享受自己做的美食',
    content: '主料: 薏米、红豆、莲子、水、糖',
    productionTime: '<1小时',
    LikesNumber: Random.integer(100, 5000),
    collectorsNumber: Random.integer(20, 1000)
  },
  {
    id: '5FE6cBee-D0ab-DabF-FFd2-bafcc7ac5aa0',
    imgSrc: '/random/01521d5ec0cd24a8012148140a2144.jpg',
    title: '香肠腊肉',
    xuanchuanContent: '无竹令人俗，无肉使人瘦。不俗又不瘦，香肠焖猪肉',
    content: '主料: 香肠、辣椒、肥猪肉、葡萄糖、姜粉、味精、五香粉',
    productionTime: '>30分钟',
    LikesNumber: Random.integer(100, 5000),
    collectorsNumber: Random.integer(20, 1000)
  },
  {
    id: '8A1ECBB4-51FB-EcEB-FcDc-ab4e4FfAE90c',
    imgSrc: '/random/01858d5e6f29bda801216518bf230d.jpg',
    title: '胡萝卜焖猪肚',
    xuanchuanContent: '净洗铛，少着水，柴头罨烟焰不起。待他自熟莫催他，火候足时他自美。',
    content: '主料: 胡萝卜、芹菜、猪肚、蒜片、水、香菜',
    productionTime: '>1小时',
    LikesNumber: Random.integer(100, 5000),
    collectorsNumber: Random.integer(20, 1000)
  },
  {
    id: '37D8e6d5-76d5-eCfd-d55C-63c4eCA48F0F',
    imgSrc: '/random/01e9255e6f29c3a80120a895f81085.jpg',
    title: '青团子',
    xuanchuanContent: '软软香香的，是最好的安慰自己或犒劳自己的小礼物！',
    content: '主料: 糯米粉、粘米粉、澄粉，艾草、浆麦草',
    productionTime: '<30分钟',
    LikesNumber: Random.integer(100, 5000),
    collectorsNumber: Random.integer(20, 1000)
  },
  {
    id: '4FAfefeC-D0db-FafA-7b1D-dD4729EB9Ef8',
    imgSrc: '/random/014b8e5ebaad56a801214814842879.jpg',
    title: '爆炒藕片',
    xuanchuanContent: '食为天性，静静地咀嚼，轻轻地回味，非比寻常的韵致',
    content: '主料: 辣椒、莲藕、盐、味精、香味粉',
    productionTime: '<15分钟',
    LikesNumber: Random.integer(100, 5000),
    collectorsNumber: Random.integer(20, 1000)
  },
  {
    id: '2205EAdd-aD60-99D1-dB74-2659d822B0Fe',
    imgSrc: '/random/01ca3c5ca1abd1a801214168511d6a.jpg',
    title: '扬州炒饭',
    xuanchuanContent: '初游唐安饭薏米，炊成不减雕胡美。大如苋实白如玉，滑欲流匙香满屋',
    content: '主料: 米饭、青菜、玉米、胡萝卜、洋葱、肉丝、鸡蛋',
    productionTime: '<30分钟',
    LikesNumber: Random.integer(100, 5000),
    collectorsNumber: Random.integer(20, 1000)
  },
  {
    id: '4ddaDfF3-D8BF-1A8F-d69C-45eBB0BBf39e',
    imgSrc: '/random/019a635f0d6a26a801215aa0f11de3.jpg',
    title: '冰糖炖雪梨',
    xuanchuanContent: '人世间，酸甜苦辣，若长良川',
    content: '主料: 雪梨、水、冰糖、银耳',
    productionTime: '<30分钟',
    LikesNumber: Random.integer(100, 5000),
    collectorsNumber: Random.integer(20, 1000)
  },
  {
    id: '6411ceB6-D9c8-df67-d8aD-db4De4C5dfE8',
    imgSrc: '/random/0127f15bf560faa80121ab5d2a4bc0.jpg',
    title: '糖醋里脊',
    xuanchuanContent: '特别好吃的猪肉！肉质很紧、韧、润，鲜美！',
    content: '主料: 猪里脊肉、鸡肉块、青红椒、糖、酱油',
    productionTime: '<90分钟',
    LikesNumber: Random.integer(100, 5000),
    collectorsNumber: Random.integer(20, 1000)
  }
]

module.exports = {
  bannerListData,
  recommendData,
  keyWordData,
  randomRecipes
}