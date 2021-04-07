var Mock = require('mockjs')
var Random = Mock.Random
var data100 = require('./data100')



//数据
const zuofa = ['炒', '蒸', '煮', '炸']
const kouwei = ['甜味', '果味', '酸味', '怪味', '辣味']
const timeArr = ['<5分钟', '<10分钟', '<15分钟', '<30分钟', '<60分钟', '<90分钟', '<2小时', '2小时以上']
const timeCodeArr = ['xiaoyu5', 'xiaoyu10', 'xiaoyu15', 'xiaoyu30', 'xiaoyu60', 'xiaoyu90', 'xiaoyu120', '120yishang']
const reliang = ['低热量','较低热量', '中热量', '较高热量', '高热量']
const rumen = ['初级入门','中级掌勺', '高级掌勺', '特级掌勺']
//用做随机生成的数据模板
// let jia100 = []
// for (let index = 0; index < 100; index++) {
//   jia100.push(Mock.mock({
//     "array|1": [
//       {
//         id: Random.guid(),
//         subClassCode: ["lanjiazai"],
//         imageSrc: '/home/01ba145c320ec1a80121df90c3cd0d.jpg',
//         title: Random.ctitle(),
//         xuanchuanContent: '美食中国，崇尚健康',
//         content: [
//           {
//             title: Random.ctitle(),
//             describe: Random.integer(5, 200)+'克'
//           },
//           {
//             title: Random.ctitle(),
//             describe: Random.integer(5, 200)+'克'
//           },
//           {
//             title: Random.ctitle(),
//             describe: Random.integer(5, 200)+'克'
//           },
//           {
//             title: Random.ctitle(),
//             describe: Random.integer(5, 200)+'克'
//           },
//           {
//             title: Random.ctitle(),
//             describe: Random.integer(5, 200)+'克'
//           },
//         ],
//         score: Random.float(0, 4, 1, 1),
//         productionTime: Random.pick(timeArr),
//         LikesNumber: Random.integer(100, 5000),
//         collectorsNumber: Random.integer(20, 1000),
//         composition: [
//           {
//             title: '卡路里',
//             percentage: Random.float(0, 99, 0, 1)
//           },
//           {
//             title: '碳水化合物',
//             percentage: Random.float(0, 99, 0, 1)
//           },
//           {
//             title: '脂肪',
//             percentage: Random.float(0, 99, 0, 1)
//           },
//           {
//             title: '蛋白质',
//             percentage: Random.float(0, 99, 0, 1)
//           },
//           {
//             title: '钙',
//             percentage: Random.float(0, 99, 0, 1)
//           },
//           {
//             title: '铁',
//             percentage: Random.float(0, 99, 0, 1)
//           },
//         ],
//         shuming:[Random.pick(zuofa), Random.pick(kouwei), Random.pick(timeArr), Random.pick(reliang), Random.pick(rumen)],
//         stepData: [
//           {
//             stepTitle: '步骤一',
//             stepContent: Random.cparagraph()
//           },
//           {
//             stepTitle: '步骤二',
//             stepContent: Random.cparagraph()
//           },
//           {
//             stepTitle: '步骤三',
//             stepContent: Random.cparagraph()
//           },
//           {
//             stepTitle: '步骤四',
//             stepContent: Random.cparagraph()
//           },
//           {
//             stepTitle: '步骤五',
//             stepContent: Random.cparagraph()
//           }
//         ]
//       },
//     ]
//   }).array)
// }
// console.log('100条数据：', jia100);







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
      imageSrc: '/home/01d7c65d831882a801211d5379ed0c.png',
      title: '芝士夹心牛排',
      xuanchuanContent: '吃得是健康，享受天然爱。',
      content: '主料: Big Tummy儿童牛排3#,黄油,香菇,淡奶油,芝士',
      productionTime: '<1小时',
      LikesNumber: Random.integer(100, 5000),
      collectorsNumber: Random.integer(20, 1000)
    },
    {
      id: 'CEbFB92A-Acf1-BECf-3e4D-d5F39eedaAd3',
      imageSrc: '/home/01f78c5d831817a801211d53c37800.png',
      title: '海鲜粥',
      xuanchuanContent: '原滋味，好滋味！',
      content: '主料:大米、虾仁、干贝、香菇、玉米粒、豌豆粒',
      productionTime: '1小时',
      LikesNumber: Random.integer(100, 5000),
      collectorsNumber: Random.integer(20, 1000)
    },
    {
      id: 'BFDDd6d7-8f6b-9D4a-be2F-2fFeefA5CCdC',
      imageSrc: '/home/0161fe5d831816a801211d53fb30eb.png',
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
      imageSrc: '/home/0115fa5d83187fa8012060beeea58c.png',
      title: '姜汁豆腐',
      xuanchuanContent: '食尚和健康结合的完美结合',
      content: '主料: 北豆腐、香菜、盐、料酒、胡椒粉、鸡精、干淀粉、酱油、葱姜汁、高汤、食用油',
      productionTime: '<30分钟',
      LikesNumber: Random.integer(100, 5000),
      collectorsNumber: Random.integer(20, 1000)
    },
    {
      id: '784cc9aD-DDBf-de2F-FCce-EFc997c3De4b',
      imageSrc: '/home/0135965d831817a801211d533e1142.png',
      title: '酱汁蒸菇鸡',
      xuanchuanContent: '原生态食品，你hold住吗？',
      content: '主料: 蘑菇，鸡，盐、绍兴酒、酱油、湿淀粉、白糖、葱段、姜片',
      productionTime: '>1小时',
      LikesNumber: Random.integer(100, 5000),
      collectorsNumber: Random.integer(20, 1000)
    },
    {
      id: 'Ed3d5f1E-dBec-DCE9-ffAb-Eb0493604c11',
      imageSrc: '/home/017b2c5d831881a8012060be0d83e7.png',
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
      imageSrc: '/home/download-1.jpg',
      title: '小葱拌豆腐',
      xuanchuanContent: '清爽平和地穿过你的喉咙',
      content: '主料: 小葱、豆腐、香菜、香油',
      productionTime: '<30分钟',
      LikesNumber: Random.integer(100, 5000),
      collectorsNumber: Random.integer(20, 1000)
    },
    {
      id: '2c2C9fe8-e91B-cA9E-BDB5-F5FBb7fd4Ec7',
      imageSrc: '/home/0161215d831880a801211d53f42050.png',
      title: '南瓜汤',
      xuanchuanContent: '它是液体的狂欢',
      content: '主料: 水、南瓜、牛奶、盐',
      productionTime: '>30分钟',
      LikesNumber: Random.integer(100, 5000),
      collectorsNumber: Random.integer(20, 1000)
    },
    {
      id: 'DB5c7C56-89f0-353a-dBDF-dbbc68dd94DC',
      imageSrc: '/home/015c5d5d831815a8012060be859c4b.png',
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

const randomRecipesData = [
  {
    id: '8e5bf6E2-D591-57ef-Dd1c-269321f6Ed5f',
    imageSrc: '/random/src=http___cbu01.alicdn.com_img_ibank_.jpg',
    title: '酸笋牛肉',
    xuanchuanContent: '酸爽又开胃！最适合夏天吃的一道肉',
    content: '主料: 酸笋、牛里脊肉（前腿肉也可以）、小葱、姜',
    productionTime: '<30分钟',
    LikesNumber: Random.integer(100, 5000),
    collectorsNumber: Random.integer(20, 1000)
  },
  {
    id: '9c38CfFb-BF8d-dB35-2DEb-e1Ac4fBAfDBa',
    imageSrc: '/random/0128955c262f40a80121df90357af1.jpg',
    title: '莲子红豆粥',
    xuanchuanContent: '最幸福的时刻便是享受自己做的美食',
    content: '主料: 薏米、红豆、莲子、水、糖',
    productionTime: '<1小时',
    LikesNumber: Random.integer(100, 5000),
    collectorsNumber: Random.integer(20, 1000)
  },
  {
    id: '5FE6cBee-D0ab-DabF-FFd2-bafcc7ac5aa0',
    imageSrc: '/random/01521d5ec0cd24a8012148140a2144.jpg',
    title: '香肠腊肉',
    xuanchuanContent: '无竹令人俗，无肉使人瘦。不俗又不瘦，香肠焖猪肉',
    content: '主料: 香肠、辣椒、肥猪肉、葡萄糖、姜粉、味精、五香粉',
    productionTime: '>30分钟',
    LikesNumber: Random.integer(100, 5000),
    collectorsNumber: Random.integer(20, 1000)
  },
  {
    id: '8A1ECBB4-51FB-EcEB-FcDc-ab4e4FfAE90c',
    imageSrc: '/random/01858d5e6f29bda801216518bf230d.jpg',
    title: '胡萝卜焖猪肚',
    xuanchuanContent: '待他自熟莫催他，火候足时他自美。',
    content: '主料: 胡萝卜、芹菜、猪肚、蒜片、水、香菜',
    productionTime: '>1小时',
    LikesNumber: Random.integer(100, 5000),
    collectorsNumber: Random.integer(20, 1000)
  },
  {
    id: '37D8e6d5-76d5-eCfd-d55C-63c4eCA48F0F',
    imageSrc: '/random/01e9255e6f29c3a80120a895f81085.jpg',
    title: '青团子',
    xuanchuanContent: '软软香香的，是最好的安慰自己或犒劳自己的小礼物！',
    content: '主料: 糯米粉、粘米粉、澄粉，艾草、浆麦草',
    productionTime: '<30分钟',
    LikesNumber: Random.integer(100, 5000),
    collectorsNumber: Random.integer(20, 1000)
  },
  {
    id: '4FAfefeC-D0db-FafA-7b1D-dD4729EB9Ef8',
    imageSrc: '/random/014b8e5ebaad56a801214814842879.jpg',
    title: '爆炒藕片',
    xuanchuanContent: '食为天性，静静地咀嚼，轻轻地回味，非比寻常的韵致',
    content: '主料: 辣椒、莲藕、盐、味精、香味粉',
    productionTime: '<15分钟',
    LikesNumber: Random.integer(100, 5000),
    collectorsNumber: Random.integer(20, 1000)
  },
  {
    id: '2205EAdd-aD60-99D1-dB74-2659d822B0Fe',
    imageSrc: '/random/01ca3c5ca1abd1a801214168511d6a.jpg',
    title: '扬州炒饭',
    xuanchuanContent: '初游唐安饭薏米，炊成不减雕胡美。大如苋实白如玉，滑欲流匙香满屋',
    content: '主料: 米饭、青菜、玉米、胡萝卜、洋葱、肉丝、鸡蛋',
    productionTime: '<30分钟',
    LikesNumber: Random.integer(100, 5000),
    collectorsNumber: Random.integer(20, 1000)
  },
  {
    id: '4ddaDfF3-D8BF-1A8F-d69C-45eBB0BBf39e',
    imageSrc: '/random/019a635f0d6a26a801215aa0f11de3.jpg',
    title: '冰糖炖雪梨',
    xuanchuanContent: '人世间，酸甜苦辣，若长良川',
    content: '主料: 雪梨、水、冰糖、银耳',
    productionTime: '<30分钟',
    LikesNumber: Random.integer(100, 5000),
    collectorsNumber: Random.integer(20, 1000)
  },
  {
    id: '6411ceB6-D9c8-df67-d8aD-db4De4C5dfE8',
    imageSrc: '/random/0127f15bf560faa80121ab5d2a4bc0.jpg',
    title: '糖醋里脊',
    xuanchuanContent: '特别好吃的猪肉！肉质很紧、韧、润，鲜美！',
    content: '主料: 猪里脊肉、鸡肉块、青红椒、糖、酱油',
    productionTime: '<90分钟',
    LikesNumber: Random.integer(100, 5000),
    collectorsNumber: Random.integer(20, 1000)
  }
]

const allRecipesData = [
  {
    id: 'F7bc64Ab-C358-892E-D855-ef15fCBAc810',
    subClassCode: [Random.pick(timeCodeArr), 'roushi', 'wucan', 'wancan', 'fan', 'recai', 'zhu','yiren'],
    imageSrc: '/home/01078d591e9853b5b3086ed4294cc8.jpg',
    title: '米太极煲仔饭',
    xuanchuanContent: '美食中国，崇尚健康',
    content: [
      {
        title: '排骨',
        describe: '500克'
      },
      {
        title: '大米',
        describe: '300克'
      },
      {
        title: '香菇',
        describe: '3个'
      },
      {
        title: '油菜',
        describe: '3棵'
      },
      {
        title: '精盐',
        describe: '少许'
      },
      {
        title: '色拉油',
        describe: '少许'
      },
      {
        title: '葱丝',
        describe: '少许'
      },
      {
        title: '白糖',
        describe: '少许'
      },
      {
        title: '姜',
        describe: '少许'
      },
      {
        title: '鸡精',
        describe: '少许'
      },
      {
        title: '老抽',
        describe: '少许'
      }
    ],
    score: Random.float(0, 4, 1, 1),
    productionTime: Random.pick(timeArr),
    LikesNumber: Random.integer(100, 5000),
    collectorsNumber: Random.integer(20, 1000),
    composition: [
      {
        title: '卡路里',
        percentage: Random.float(0, 99, 0, 1)
      },
      {
        title: '碳水化合物',
        percentage: Random.float(0, 99, 0, 1)
      },
      {
        title: '脂肪',
        percentage: Random.float(0, 99, 0, 1)
      },
      {
        title: '蛋白质',
        percentage: Random.float(0, 99, 0, 1)
      },
      {
        title: '钙',
        percentage: Random.float(0, 99, 0, 1)
      },
      {
        title: '铁',
        percentage: Random.float(0, 99, 0, 1)
      },
    ],
    shuming:[Random.pick(zuofa), Random.pick(kouwei), Random.pick(timeArr), Random.pick(reliang), Random.pick(rumen)],
    stepData: [
      {
        stepTitle: '步骤一',
        stepContent: '排骨事先用蚝油，生抽，水淀粉，糖，蒜香油，少许老抽，少许盐，少许味 精腌制1小时当然也是久点更好了'
      },
      {
        stepTitle: '步骤二',
        stepContent: '放入洗好的大米，加入适量的水，选择米饭类，大约10分钟左右，排气开盖；'
      },
      {
        stepTitle: '步骤三',
        stepContent: '将腌制好的排骨、香菇，放入电压力锅中，用勺子装一点油，沿着煲边轻轻地淋一圈，选择排骨键，大约15分钟，排气开盖；'
      },
      {
        stepTitle: '步骤四',
        stepContent: '将油菜放入开水中，焯熟，放入煲好的排骨饭中即可食用。'
      }
    ]
  },
  {
    id: '9944Ff2c-cBa7-FeFD-5cd6-CdB0Ed2CAff0',
    subClassCode: [Random.pick(timeCodeArr), 'roushi', 'wucan', 'wancan', 'jiachangcai', 'recai', 'luwei','yue', 'zhu', 'tian', 'quhui'],
    imageSrc: '/home/01d84d5d831815a801211d539745ff.png',
    title: '豉油鸡',
    xuanchuanContent: '美食中国，崇尚健康',
    content: [
      {
        title: '鸡',
        describe: '700克'
      },
      {
        title: '生抽',
        describe: '45克'
      },
      {
        title: '老抽',
        describe: '15克'
      },
      {
        title: '料酒',
        describe: '1小勺'
      },
      {
        title: '冰糖',
        describe: '20克'
      },
      {
        title: '小葱',
        describe: '1小把'
      },
      {
        title: '生姜',
        describe: '几片'
      },
      {
        title: '食用油',
        describe: '少许'
      },
    ],
    score: Random.float(0, 4, 1, 1),
    productionTime: Random.pick(timeArr),
    LikesNumber: Random.integer(100, 5000),
    collectorsNumber: Random.integer(20, 1000),
    composition: [
      {
        title: '卡路里',
        percentage: Random.float(0, 99, 0, 1)
      },
      {
        title: '碳水化合物',
        percentage: Random.float(0, 99, 0, 1)
      },
      {
        title: '脂肪',
        percentage: Random.float(0, 99, 0, 1)
      },
      {
        title: '蛋白质',
        percentage: Random.float(0, 99, 0, 1)
      },
      {
        title: '钙',
        percentage: Random.float(0, 99, 0, 1)
      },
      {
        title: '铁',
        percentage: Random.float(0, 99, 0, 1)
      },
    ],
    shuming:[Random.pick(zuofa), Random.pick(kouwei), Random.pick(timeArr), Random.pick(reliang), Random.pick(rumen)],
    stepData: [
      {
        stepTitle: '步骤一',
        stepContent: '将鸡洗干净竖着从中间分开成两部分'
      },
      {
        stepTitle: '步骤二',
        stepContent: '将鸡放入盆中用15克生抽和1小勺料酒表面都抹匀，盖上腌制2个小时，也可以省略这一步，经过腌制的更入味'
      },
      {
        stepTitle: '步骤三',
        stepContent: '将葱切长段，姜切片，生抽老抽和大半碗水放入一个碗中拌匀成调料汁'
      },
      {
        stepTitle: '步骤四',
        stepContent: '将炒锅烧热放入少许油，将腌好的鸡皮冲下放入锅中'
      },
      {
        stepTitle: '步骤五',
        stepContent: '将鸡皮煎上色后翻过来将另一面也稍微煎一下，然后盛出来'
      },
      {
        stepTitle: '步骤六',
        stepContent: '将葱段和生姜铺在锅底'
      },
      {
        stepTitle: '步骤七',
        stepContent: '放入煎好的鸡，在上边撒上几粒冰糖'
      },
      {
        stepTitle: '步骤八',
        stepContent: '倒入调料汁到鸡身的一半位置即可，盖上锅盖，小火焖煮，期间翻面一两次'
      },
      {
        stepTitle: '步骤九',
        stepContent: '大约20分钟（根据鸡的老嫩程度决定），用筷子在肉厚处扎一下，能够轻松扎偷就熟了，开大火将汤汁收浓；将鸡捞出切成条块，摆放盘中，浇上汤汁即可，热吃冷吃都可'
      }
    ]
  },
  {
    id: 'c6ce973A-8dFA-d58E-f5eF-E7490Ed20A46',
    subClassCode: [Random.pick(timeCodeArr), 'roushi', 'zaocan', 'baozi', 'zheng', 'yiren', 'sushe'],
    imageSrc: '/home/01f1345c823a8ca801217ce6157702.jpg',
    title: '手打鲜肉包',
    xuanchuanContent: '美食中国，崇尚健康',
    content: [
      {
        title: '酵母',
        describe: '6克'
      },
      {
        title: '色拉油',
        describe: '20克'
      },
      {
        title: '盐',
        describe: '2克'
      },
      {
        title: '中筋面粉',
        describe: '600克'
      },
      {
        title: '温水',
        describe: '300克'
      },
      {
        title: '肉馅',
        describe: '适量'
      },
      {
        title: '细糖',
        describe: '30克'
      },
    ],
    score: Random.float(0, 4, 1, 1),
    productionTime: Random.pick(timeArr),
    LikesNumber: Random.integer(100, 5000),
    collectorsNumber: Random.integer(20, 1000),
    composition: [
      {
        title: '卡路里',
        percentage: Random.float(0, 99, 0, 1)
      },
      {
        title: '碳水化合物',
        percentage: Random.float(0, 99, 0, 1)
      },
      {
        title: '脂肪',
        percentage: Random.float(0, 99, 0, 1)
      },
      {
        title: '蛋白质',
        percentage: Random.float(0, 99, 0, 1)
      },
      {
        title: '钙',
        percentage: Random.float(0, 99, 0, 1)
      },
      {
        title: '铁',
        percentage: Random.float(0, 99, 0, 1)
      },
    ],
    shuming:[Random.pick(zuofa), Random.pick(kouwei), Random.pick(timeArr), Random.pick(reliang), Random.pick(rumen)],
    stepData: [
      {
        stepTitle: '步骤一',
        stepContent: '酵母加温开水浸泡5min，完全化开；'
      },
      {
        stepTitle: '步骤二',
        stepContent: '面粉中加入细糖、盐、色拉油混合好；'
      },
      {
        stepTitle: '步骤三',
        stepContent: '加入酵母水混合成棉絮状，放入厨师机搅拌表面光滑；'
      },
      {
        stepTitle: '步骤四',
        stepContent: '面团放入盆中，保鲜膜覆盖发酵30min至面团2倍大；'
      },
      {
        stepTitle: '步骤五',
        stepContent: '面团排气后，分成每个40g左右的面剂子；'
      },
      {
        stepTitle: '步骤六',
        stepContent: '将面剂子擀开，包入20g左右的肉馅；'
      },
      {
        stepTitle: '步骤七',
        stepContent: '依次包好后，有间隙的码入蒸盘，进行40min发酵；'
      },
      {
        stepTitle: '步骤八',
        stepContent: '将发酵好的包子送入机器，蒸23min'
      },
    ]
  },
  {
    id: '9d3921c5-dCf1-7ecd-3c50-bb214C8Aeb8d',
    subClassCode: [Random.pick(timeCodeArr), 'zaocan', 'dianxin', 'dangao', 'tiandian', 'guo', 'yiren', 'qinzi' ],
    imageSrc: '/home/0120245b86a11ca8012126ceca7e92.jpg',
    title: '抹茶千层',
    xuanchuanContent: '美食中国，崇尚健康',
    content: [
      {
        title: '鸡蛋',
        describe: '3只'
      },
      {
        title: '牛奶',
        describe: '500毫升'
      },
      {
        title: '低筋面粉',
        describe: '200克'
      },
      {
        title: '糖粉',
        describe: '50克'
      },
      {
        title: '黄油',
        describe: '40克'
      },
      {
        title: '淡奶油',
        describe: '400毫升'
      },
      {
        title: ' 糖粉',
        describe: '50克'
      },
      {
        title: ' 抹茶粉',
        describe: '15克'
      },
    ],
    score: Random.float(0, 4, 1, 1),
    productionTime: Random.pick(timeArr),
    LikesNumber: Random.integer(100, 5000),
    collectorsNumber: Random.integer(20, 1000),
    composition: [
      {
        title: '卡路里',
        percentage: Random.float(0, 99, 0, 1)
      },
      {
        title: '碳水化合物',
        percentage: Random.float(0, 99, 0, 1)
      },
      {
        title: '脂肪',
        percentage: Random.float(0, 99, 0, 1)
      },
      {
        title: '蛋白质',
        percentage: Random.float(0, 99, 0, 1)
      },
      {
        title: '钙',
        percentage: Random.float(0, 99, 0, 1)
      },
      {
        title: '铁',
        percentage: Random.float(0, 99, 0, 1)
      },
    ],
    shuming:[Random.pick(zuofa), Random.pick(kouwei), Random.pick(timeArr), Random.pick(reliang), Random.pick(rumen)],
    stepData: [
      {
        stepTitle: '步骤一',
        stepContent: '将低筋面粉和抹茶粉放入干净无水的碗中，搅拌均匀'
      },
      {
        stepTitle: '步骤二',
        stepContent: '将牛奶，鸡蛋，糖粉加入，然后将黄油融化加入已经搅拌好的面粉，搅拌过筛'
      },
      {
        stepTitle: '步骤三',
        stepContent: '将已经做好的面糊放进六寸的平底锅，加入两勺面糊，煎熟'
      },
      {
        stepTitle: '步骤四',
        stepContent: '将奶油打发，或者可以去蛋糕店买奶油，将做好的饼皮一层一层的抹上奶油'
      },
      {
        stepTitle: '步骤五',
        stepContent: '大概做到自己适合的高度就可以了'
      },
    ]
  },
  {
    id: '5A115081-bEAE-fDF5-D5e7-37151CdDFDE5',
    subClassCode: [Random.pick(timeCodeArr), 'roushi','wancan','meiguocai','yiren', 'erren' ],
    imageSrc: '/home/01d7c65d831882a801211d5379ed0c.png',
    title: '芝士夹心牛排',
    xuanchuanContent: '吃得是健康，享受天然爱。',
    content: [
      {
        title: '牛排',
        describe: '350克'
      },
      {
        title: '芝士片',
        describe: '2片'
      },
      {
        title: '盐',
        describe: '2克'
      },
      {
        title: '黑胡椒粉',
        describe: '3克'
      },
    ],
    score: Random.float(0, 4, 1, 1),
    productionTime: Random.pick(timeArr),
    LikesNumber: Random.integer(100, 5000),
    collectorsNumber: Random.integer(20, 1000),
    composition: [
      {
        title: '卡路里',
        percentage: Random.float(0, 99, 0, 1)
      },
      {
        title: '碳水化合物',
        percentage: Random.float(0, 99, 0, 1)
      },
      {
        title: '脂肪',
        percentage: Random.float(0, 99, 0, 1)
      },
      {
        title: '蛋白质',
        percentage: Random.float(0, 99, 0, 1)
      },
      {
        title: '钙',
        percentage: Random.float(0, 99, 0, 1)
      },
      {
        title: '铁',
        percentage: Random.float(0, 99, 0, 1)
      },
    ],
    shuming:[Random.pick(zuofa), Random.pick(kouwei), Random.pick(timeArr), Random.pick(reliang), Random.pick(rumen)],
    stepData: [
      {
        stepTitle: '步骤一',
        stepContent: '牛扒用盐和黑胡椒粉腌制20分钟'
      },
      {
        stepTitle: '步骤二',
        stepContent: '烤盘上铺上锡纸，放上牛扒，放进预热好220度的烤箱烤8分钟'
      },
      {
        stepTitle: '步骤三',
        stepContent: '拿出来翻面，铺上两片芝士片，然后在放进烤箱里烤5分钟即可'
      },
    ]
  },
  {
    id: 'CEbFB92A-Acf1-BECf-3e4D-d5F39eedaAd3',
    subClassCode: [Random.pick(timeCodeArr), 'tanggeng','zaocan','yexiao','zhou', 'haixian','baobaofushi', 'zhu','yiren','biandang' ],
    imageSrc: '/home/01f78c5d831817a801211d53c37800.png',
    title: '海鲜粥',
    xuanchuanContent: '原滋味，好滋味！',
    content: [
      {
        title: '大米',
        describe: '20克'
      },
      {
        title: '糯米',
        describe: '20克'
      },
      {
        title: '姜末',
        describe: '5克'
      },
      {
        title: '香菇',
        describe: '20克'
      },
      {
        title: '鲜虾',
        describe: '120克'
      },
      {
        title: '肥蛤',
        describe: '20克'
      },
      {
        title: '盐',
        describe: '2克'
      },
    ],
    score: Random.float(0, 4, 1, 1),
    productionTime: Random.pick(timeArr),
    LikesNumber: Random.integer(100, 5000),
    collectorsNumber: Random.integer(20, 1000),
    composition: [
      {
        title: '卡路里',
        percentage: Random.float(0, 99, 0, 1)
      },
      {
        title: '碳水化合物',
        percentage: Random.float(0, 99, 0, 1)
      },
      {
        title: '脂肪',
        percentage: Random.float(0, 99, 0, 1)
      },
      {
        title: '蛋白质',
        percentage: Random.float(0, 99, 0, 1)
      },
      {
        title: '钙',
        percentage: Random.float(0, 99, 0, 1)
      },
      {
        title: '铁',
        percentage: Random.float(0, 99, 0, 1)
      },
    ],
    shuming:[Random.pick(zuofa), Random.pick(kouwei), Random.pick(timeArr), Random.pick(reliang), Random.pick(rumen)],
    stepData: [
      {
        stepTitle: '步骤一',
        stepContent: '姜切末，香菇切丝，鲜虾去头去虾线'
      },
      {
        stepTitle: '步骤二',
        stepContent: '将大米，糯米淘洗干净'
      },
      {
        stepTitle: '步骤三',
        stepContent: '锅中加水、粥米，中火煮20分钟'
      },
      {
        stepTitle: '步骤四',
        stepContent: '倒入鲜虾，肥蛤，姜末，大火煮沸转小火煮5分钟'
      },
      {
        stepTitle: '步骤五',
        stepContent: '加盐，香菇，大火煮沸转小火煮5分钟'
      },
    ]
  },
  {
    id: 'BFDDd6d7-8f6b-9D4a-be2F-2fFeefA5CCdC',
    subClassCode: [Random.pick(timeCodeArr), 'zaocan','wucan','wancan','shiliaoyangsheng', 'zheng', 'yiren' ],
    imageSrc: '/home/0161fe5d831816a801211d53fb30eb.png',
    title: '传奇蒸蛋',
    xuanchuanContent: '吃了它，这个春天才算没白过',
    content: [
      {
        title: '鸡蛋',
        describe: '2个'
      },
      {
        title: '海胆黄',
        describe: '20克'
      },
      {
        title: '清水',
        describe: '20毫升'
      },
    ],
    score: Random.float(0, 4, 1, 1),
    productionTime: Random.pick(timeArr),
    LikesNumber: Random.integer(100, 5000),
    collectorsNumber: Random.integer(20, 1000),
    composition: [
      {
        title: '卡路里',
        percentage: Random.float(0, 99, 0, 1)
      },
      {
        title: '碳水化合物',
        percentage: Random.float(0, 99, 0, 1)
      },
      {
        title: '脂肪',
        percentage: Random.float(0, 99, 0, 1)
      },
      {
        title: '蛋白质',
        percentage: Random.float(0, 99, 0, 1)
      },
      {
        title: '钙',
        percentage: Random.float(0, 99, 0, 1)
      },
      {
        title: '铁',
        percentage: Random.float(0, 99, 0, 1)
      },
    ],
    shuming:[Random.pick(zuofa), Random.pick(kouwei), Random.pick(timeArr), Random.pick(reliang), Random.pick(rumen)],
    stepData: [
      {
        stepTitle: '步骤一',
        stepContent: '碗中打入鸡蛋，打散 ，过滤'
      },
      {
        stepTitle: '步骤二',
        stepContent: '覆盖保鲜膜，牙签扎小孔'
      },
      {
        stepTitle: '步骤三',
        stepContent: '锅中放入蛋液隔水，大火煮熟'
      },
      {
        stepTitle: '步骤四',
        stepContent: '加上海胆黄'
      },
    ]
  },
  {
    id: '4bD56eeB-C2C1-5ADF-EB89-Cc6BDAfeBe3f',
    subClassCode: [Random.pick(timeCodeArr), 'jiachangcai','sushi','wancan','wancan', 'yexiao', 'recai', 'wenbuquhan','quhui', 'erren', 'biandang' ],
    imageSrc: '/home/0115fa5d83187fa8012060beeea58c.png',
    title: '姜汁豆腐',
    xuanchuanContent: '食尚和健康结合的完美结合',
    content: [
      {
        title: '南豆腐',
        describe: '350克'
      },
      {
        title: '胡萝卜',
        describe: '50克'
      },
      {
        title: '西兰花',
        describe: '100克'
      },
    ],
    score: Random.float(0, 4, 1, 1),
    productionTime: Random.pick(timeArr),
    LikesNumber: Random.integer(100, 5000),
    collectorsNumber: Random.integer(20, 1000),
    composition: [
      {
        title: '卡路里',
        percentage: Random.float(0, 99, 0, 1)
      },
      {
        title: '碳水化合物',
        percentage: Random.float(0, 99, 0, 1)
      },
      {
        title: '脂肪',
        percentage: Random.float(0, 99, 0, 1)
      },
      {
        title: '蛋白质',
        percentage: Random.float(0, 99, 0, 1)
      },
      {
        title: '钙',
        percentage: Random.float(0, 99, 0, 1)
      },
      {
        title: '铁',
        percentage: Random.float(0, 99, 0, 1)
      },
    ],
    shuming:[Random.pick(zuofa), Random.pick(kouwei), Random.pick(timeArr), Random.pick(reliang), Random.pick(rumen)],
    stepData: [
      {
        stepTitle: '步骤一',
        stepContent: '南豆腐片成厚片，粘上玉米淀粉；平底锅热油，每粘好一块，放一块下锅内小火煎'
      },
      {
        stepTitle: '步骤二',
        stepContent: '直至煎至两面金黄色，盛出备用；锅内剩下的油，放入蒜蓉、姜爆香'
      },
      {
        stepTitle: '步骤三',
        stepContent: '放入煎好的豆腐块；倒入生抽2大勺、砂糖2小勺、蚝油1/2大勺、料酒1大勺、高汤1/3杯'
      },
      {
        stepTitle: '步骤四',
        stepContent: '大火煮开后，转小火煮煮制，不需加锅盖；另起一锅烧开水，放入胡萝卜烫熟'
      },
      {
        stepTitle: '步骤五',
        stepContent: '再放入西兰花烫至半熟；倒入锅内适量的水淀粉(玉米淀粉2小勺、清水3大勺)待平底锅内的豆腐汤汁煮至浓稠'
      },
      {
        stepTitle: '步骤六',
        stepContent: '加入烫过的西兰花及胡萝卜即可出锅'
      },
    ]
  },
  {
    id: '784cc9aD-DDBf-de2F-FCce-EFc997c3De4b',
    subClassCode: [Random.pick(timeCodeArr), 'roushi','wancan','luwei','jiangliao', 'lu', 'yuezi', 'yanggan','zheng', 'guai', 'quhui' ],
    imageSrc: '/home/0135965d831817a801211d533e1142.png',
    title: '酱汁蒸菇鸡',
    xuanchuanContent: '原生态食品，你hold住吗？',
    content: [
      {
        title: '鸡',
        describe: '半只'
      },
      {
        title: '香菇(干)',
        describe: '7朵'
      },
      {
        title: '酱油',
        describe: '2汤匙'
      },
      {
        title: '老抽',
        describe: '1/2汤匙'
      },
      {
        title: '料酒',
        describe: '1汤匙'
      },
      {
        title: '盐',
        describe: '1小匙'
      },
      {
        title: '水淀粉',
        describe: '1汤匙'
      },
      {
        title: '细砂糖',
        describe: '2小匙'
      },
    ],
    score: Random.float(0, 4, 1, 1),
    productionTime: Random.pick(timeArr),
    LikesNumber: Random.integer(100, 5000),
    collectorsNumber: Random.integer(20, 1000),
    composition: [
      {
        title: '卡路里',
        percentage: Random.float(0, 99, 0, 1)
      },
      {
        title: '碳水化合物',
        percentage: Random.float(0, 99, 0, 1)
      },
      {
        title: '脂肪',
        percentage: Random.float(0, 99, 0, 1)
      },
      {
        title: '蛋白质',
        percentage: Random.float(0, 99, 0, 1)
      },
      {
        title: '钙',
        percentage: Random.float(0, 99, 0, 1)
      },
      {
        title: '铁',
        percentage: Random.float(0, 99, 0, 1)
      },
    ],
    shuming:[Random.pick(zuofa), Random.pick(kouwei), Random.pick(timeArr), Random.pick(reliang), Random.pick(rumen)],
    stepData: [
      {
        stepTitle: '步骤一',
        stepContent: '香菇提前用热水泡发'
      },
      {
        stepTitle: '步骤二',
        stepContent: '鸡洗净后斩成块'
      },
      {
        stepTitle: '步骤三',
        stepContent: '泡发好的香菇洗净切成片'
      },
      {
        stepTitle: '步骤四',
        stepContent: '将所有调料混合均匀调成酱汁备用'
      },
      {
        stepTitle: '步骤五',
        stepContent: '调好的酱汁加入鸡肉里腌制'
      },
      {
        stepTitle: '步骤六',
        stepContent: '拌匀后腌制20分钟'
      },
      {
        stepTitle: '步骤七',
        stepContent: '将切好的香菇片和腌好的鸡肉拌匀码入盘中'
      },
      {
        stepTitle: '步骤八',
        stepContent: '锅中倒入适量水烧开'
      },
      {
        stepTitle: '步骤九',
        stepContent: '水开后将鸡肉放入锅中'
      },
      {
        stepTitle: '步骤十',
        stepContent: '盖好锅盖，隔水蒸20分钟至鸡肉熟透即可关火'
      },
      {
        stepTitle: '步骤十一',
        stepContent: '出锅后即可食用'
      },
    ]
  },
  {
    id: 'Ed3d5f1E-dBec-DCE9-ffAb-Eb0493604c11',
    subClassCode: [Random.pick(timeCodeArr),'roushi','wucan','wancan', 'yexiao', 'recai', 'hui','guai', 'quhui'],
    imageSrc: '/home/017b2c5d831881a8012060be0d83e7.png',
    title: '蟹粉狮子头',
    xuanchuanContent: '风吹柳花满店香，吴姬压酒劝客尝',
    content: [
      {
        title: '五花肉',
        describe: '600克'
      },
      {
        title: '大闸蟹',
        describe: '2只'
      },
      {
        title: '大白菜',
        describe: '4瓣'
      },
      {
        title: '猪皮',
        describe: '1张'
      },
      {
        title: '油菜(小)',
        describe: '5根'
      },
    ],
    score: Random.float(0, 4, 1, 1),
    productionTime: Random.pick(timeArr),
    LikesNumber: Random.integer(100, 5000),
    collectorsNumber: Random.integer(20, 1000),
    composition: [
      {
        title: '卡路里',
        percentage: Random.float(0, 99, 0, 1)
      },
      {
        title: '碳水化合物',
        percentage: Random.float(0, 99, 0, 1)
      },
      {
        title: '脂肪',
        percentage: Random.float(0, 99, 0, 1)
      },
      {
        title: '蛋白质',
        percentage: Random.float(0, 99, 0, 1)
      },
      {
        title: '钙',
        percentage: Random.float(0, 99, 0, 1)
      },
      {
        title: '铁',
        percentage: Random.float(0, 99, 0, 1)
      },
    ],
    shuming:[Random.pick(zuofa), Random.pick(kouwei), Random.pick(timeArr), Random.pick(reliang), Random.pick(rumen)],
    stepData: [
      {
        stepTitle: '步骤一',
        stepContent: '五花肉肥瘦分开，分别切成细丝，然后切成石榴米状小粒'
      },
      {
        stepTitle: '步骤二',
        stepContent: '先将肥肉剁几下，然后加入瘦肉一起再稍微剁一会，即所谓的细切粗斩'
      },
      {
        stepTitle: '步骤三',
        stepContent: '大闸蟹蒸熟'
      },
      {
        stepTitle: '步骤四',
        stepContent: '剔出蟹肉、蟹膏、蟹黄，将蟹肉、蟹膏切碎待用'
      },
      {
        stepTitle: '步骤五',
        stepContent: '葱姜切段切片，放入清水中用手捏几下后放置半小时，制成葱姜水，将葱姜水分次打入肉末，再放入盐和胡椒粉搅拌上劲，拌入蟹肉、蟹膏碎'
      },
      {
        stepTitle: '步骤六',
        stepContent: '手上沾些水淀粉，取一部分肉在手掌，双手来回甩打形成肉圆，炖锅底部铺上猪肉皮，没有可铺白菜叶，将肉圆摆放在上面，在肉圆上放一块蟹黄点缀'
      },
      {
        stepTitle: '步骤七',
        stepContent: '沿锅边倒入高汤或清水，肉圆上盖上白菜叶防止变色'
      },
      {
        stepTitle: '步骤八',
        stepContent: '中火煮开后转微火炖2小时以上，也可清蒸，去除白菜叶和肉皮，汤里调入适量盐，最后放入汆熟的小油菜即可'
      },
    ]
  },
  {
    id: '5F82a6E8-B354-F9d4-A66f-D9b6bB2f3EeE',
    subClassCode: [Random.pick(timeCodeArr), 'jiachangcai','sushi','wancan','lengcai', 'sucai', 'biandang', 'sushe'],
    imageSrc: '/home/download-1.jpg',
    title: '小葱拌豆腐',
    xuanchuanContent: '清爽平和地穿过你的喉咙',
    content: [
      {
        title: '小葱',
        describe: '1把'
      },
      {
        title: ' 豆腐',
        describe: '1块'
      },
      {
        title: '盐',
        describe: '1勺'
      },
      {
        title: '香油',
        describe: '少许'
      },
      {
        title: '鸡粉',
        describe: '1小勺'
      },
    ],
    score: Random.float(0, 4, 1, 1),
    productionTime: Random.pick(timeArr),
    LikesNumber: Random.integer(100, 5000),
    collectorsNumber: Random.integer(20, 1000),
    composition: [
      {
        title: '卡路里',
        percentage: Random.float(0, 99, 0, 1)
      },
      {
        title: '碳水化合物',
        percentage: Random.float(0, 99, 0, 1)
      },
      {
        title: '脂肪',
        percentage: Random.float(0, 99, 0, 1)
      },
      {
        title: '蛋白质',
        percentage: Random.float(0, 99, 0, 1)
      },
      {
        title: '钙',
        percentage: Random.float(0, 99, 0, 1)
      },
      {
        title: '铁',
        percentage: Random.float(0, 99, 0, 1)
      },
    ],
    shuming:[Random.pick(zuofa), Random.pick(kouwei), Random.pick(timeArr), Random.pick(reliang), Random.pick(rumen)],
    stepData: [
      {
        stepTitle: '步骤一',
        stepContent: '豆腐用开水烫下，用勺子压碎。'
      },
      {
        stepTitle: '步骤二',
        stepContent: '越碎越好吃，可以戴上一次性手套下手抓匀。'
      },
      {
        stepTitle: '步骤三',
        stepContent: '小葱洗净控干水分 切碎'
      },
      {
        stepTitle: '步骤四',
        stepContent: '放碗内加入盐。'
      },
      {
        stepTitle: '步骤五',
        stepContent: '加入香油适量。'
      },
      {
        stepTitle: '步骤六',
        stepContent: '再加鸡粉1小勺，搅拌均匀就好了。'
      },
    ]
  },
  {
    id: '2c2C9fe8-e91B-cA9E-BDB5-F5FBb7fd4Ec7',
    subClassCode: [Random.pick(timeCodeArr), 'sushi','zaocan','tanggeng','yexiao', 'jing', 'jianpikaiwei', 'shiliaoyangsheng', 'tian', 'guo', 'biandang', 'sushe'],
    imageSrc: '/home/0161215d831880a801211d53f42050.png',
    title: '南瓜汤',
    xuanchuanContent: '它是液体的狂欢',
    content: [
      {
        title: '南瓜',
        describe: '半个'
      },
      {
        title: ' 淡奶油',
        describe: '1勺'
      },
      {
        title: '白糖',
        describe: '1勺'
      },
    ],
    score: Random.float(0, 4, 1, 1),
    productionTime: Random.pick(timeArr),
    LikesNumber: Random.integer(100, 5000),
    collectorsNumber: Random.integer(20, 1000),
    composition: [
      {
        title: '卡路里',
        percentage: Random.float(0, 99, 0, 1)
      },
      {
        title: '碳水化合物',
        percentage: Random.float(0, 99, 0, 1)
      },
      {
        title: '脂肪',
        percentage: Random.float(0, 99, 0, 1)
      },
      {
        title: '蛋白质',
        percentage: Random.float(0, 99, 0, 1)
      },
      {
        title: '钙',
        percentage: Random.float(0, 99, 0, 1)
      },
      {
        title: '铁',
        percentage: Random.float(0, 99, 0, 1)
      },
    ],
    shuming:[Random.pick(zuofa), Random.pick(kouwei), Random.pick(timeArr), Random.pick(reliang), Random.pick(rumen)],
    stepData: [
      {
        stepTitle: '步骤一',
        stepContent: '对半切开，里面是金黄金黄的，看着粉糯粉糯的；'
      },
      {
        stepTitle: '步骤二',
        stepContent: '把南瓜，去籽，切成小块；'
      },
      {
        stepTitle: '步骤三',
        stepContent: '放入破壁机的热杯中；'
      },
      {
        stepTitle: '步骤四',
        stepContent: '加入一勺的淡奶油；'
      },
      {
        stepTitle: '步骤五',
        stepContent: '再加入一勺的白糖，南瓜也有点甜味的，可以不加；'
      },
      {
        stepTitle: '步骤六',
        stepContent: '加入适量的水；不要超过热饮功能；'
      },
      {
        stepTitle: '步骤七',
        stepContent: '启动浓汤功能；30分钟；'
      },
      {
        stepTitle: '步骤八',
        stepContent: '程序结束，金黄金黄的南瓜头，还有淡淡的奶香；加点淡奶油装饰酒可以了；'
      },
    ]
  },
  {
    id: 'DB5c7C56-89f0-353a-dBDF-dbbc68dd94DC',
    subClassCode: [Random.pick(timeCodeArr), 'bing','dianxin','hongpei','guo', 'yiren', 'biandang', 'sushe'],
    imageSrc: '/home/015c5d5d831815a8012060be859c4b.png',
    title: '冰皮月饼',
    xuanchuanContent: '剥开皮，里面是美味和健康',
    content: [
      {
        title: '冰皮月饼粉',
        describe: '240克'
      },
      {
        title: '红曲粉',
        describe: '1克'
      },
      {
        title: '抹茶粉',
        describe: '5克'
      },
      {
        title: '纯净水',
        describe: '100克'
      },
      {
        title: '白油',
        describe: '25克'
      },
      {
        title: '蔓越莓馅',
        describe: '80克'
      },
      {
        title: '抹茶馅',
        describe: '80克'
      },
      {
        title: '豆沙馅',
        describe: '80克'
      },
    ],
    score: Random.float(0, 4, 1, 1),
    productionTime: Random.pick(timeArr),
    LikesNumber: Random.integer(100, 5000),
    collectorsNumber: Random.integer(20, 1000),
    composition: [
      {
        title: '卡路里',
        percentage: Random.float(0, 99, 0, 1)
      },
      {
        title: '碳水化合物',
        percentage: Random.float(0, 99, 0, 1)
      },
      {
        title: '脂肪',
        percentage: Random.float(0, 99, 0, 1)
      },
      {
        title: '蛋白质',
        percentage: Random.float(0, 99, 0, 1)
      },
      {
        title: '钙',
        percentage: Random.float(0, 99, 0, 1)
      },
      {
        title: '铁',
        percentage: Random.float(0, 99, 0, 1)
      },
    ],
    shuming:[Random.pick(zuofa), Random.pick(kouwei), Random.pick(timeArr), Random.pick(reliang), Random.pick(rumen)],
    stepData: [
      {
        stepTitle: '步骤一',
        stepContent: '将冰皮月饼粉和纯净水称到打蛋盆中'
      },
      {
        stepTitle: '步骤二',
        stepContent: '将冰皮月饼粉和纯净水混合成面团，将面团慢慢揉约5分钟，至无颗粒光滑状态'
      },
      {
        stepTitle: '步骤三',
        stepContent: '在面团中加入白油'
      },
      {
        stepTitle: '步骤四',
        stepContent: '将加入白油的面团揉约3分钟至光滑状态'
      },
      {
        stepTitle: '步骤五',
        stepContent: '将面团分为3等份，其中一等份放入打蛋盆中，加入1克红曲粉'
      },
      {
        stepTitle: '步骤六',
        stepContent: '将加入红曲粉的面团揉匀即可，备用'
      },
      {
        stepTitle: '步骤七',
        stepContent: '同理，在另一等份的面团中加入5克抹茶粉揉匀，备用'
      },
      {
        stepTitle: '步骤八',
        stepContent: '剩下的一等份面团是原味的'
      },
      {
        stepTitle: '步骤九',
        stepContent: '分别将制作好的3等份的面团分成30克一个的小面团'
      },
      {
        stepTitle: '步骤十',
        stepContent: '准备好月饼馅料，分别是蔓越莓、抹茶、豆沙口味，每个20克'
      },
      {
        stepTitle: '步骤十一',
        stepContent: '将月饼皮子用手稍稍按扁，包入月饼馅料'
      },
      {
        stepTitle: '步骤十二',
        stepContent: '将包好的月饼粘少许冰皮月饼粉，用模具按出形状即可'
      },
      {
        stepTitle: '步骤十三',
        stepContent: '开始吃了，卡通造型的冰皮月饼，很吸引人吧'
      },
    ]
  },
  {
    subClassCode: [Random.pick(timeCodeArr), 'jiachangcai','roushi','wucan','wancan', 'recai', 'chuan', 'chao', 'suan', 'quhui'],
    id: '8e5bf6E2-D591-57ef-Dd1c-269321f6Ed5f',
    imageSrc: '/random/src=http___cbu01.alicdn.com_img_ibank_.jpg',
    title: '酸笋牛肉',
    xuanchuanContent: '酸爽又开胃！最适合夏天吃的一道肉',
    content: [
      {
        title: '牛肉',
        describe: '250克'
      },
      {
        title: '酸笋',
        describe: '100克'
      },
      {
        title: '生姜',
        describe: '1小块'
      },
      {
        title: '花生油',
        describe: '50克'
      },
      {
        title: '盐',
        describe: '1小勺'
      },
      {
        title: '淀粉',
        describe: '适量'
      },
      {
        title: '生抽',
        describe: '1小勺'
      },
      {
        title: '料酒',
        describe: '1小勺'
      },
      {
        title: '酱油',
        describe: '2勺'
      },
    ],
    score: Random.float(0, 4, 1, 1),
    productionTime: Random.pick(timeArr),
    LikesNumber: Random.integer(100, 5000),
    collectorsNumber: Random.integer(20, 1000),
    composition: [
      {
        title: '卡路里',
        percentage: Random.float(0, 99, 0, 1)
      },
      {
        title: '碳水化合物',
        percentage: Random.float(0, 99, 0, 1)
      },
      {
        title: '脂肪',
        percentage: Random.float(0, 99, 0, 1)
      },
      {
        title: '蛋白质',
        percentage: Random.float(0, 99, 0, 1)
      },
      {
        title: '钙',
        percentage: Random.float(0, 99, 0, 1)
      },
      {
        title: '铁',
        percentage: Random.float(0, 99, 0, 1)
      },
    ],
    shuming:[Random.pick(zuofa), Random.pick(kouwei), Random.pick(timeArr), Random.pick(reliang), Random.pick(rumen)],
    stepData: [
      {
        stepTitle: '步骤一',
        stepContent: '牛肉切丝'
      },
      {
        stepTitle: '步骤二',
        stepContent: '酸笋用水清洗控干'
      },
      {
        stepTitle: '步骤三',
        stepContent: '热锅凉油爆香姜丝，放入牛肉丝煸炒'
      },
      {
        stepTitle: '步骤四',
        stepContent: '加入少许料酒和生抽，'
      },
      {
        stepTitle: '步骤五',
        stepContent: '断生后加入酸笋，翻炒两分钟，'
      },
      {
        stepTitle: '步骤六',
        stepContent: '放入适量食盐。'
      },
      {
        stepTitle: '步骤七',
        stepContent: '起锅'
      },
    ]
  },
  {
    subClassCode: [Random.pick(timeCodeArr), 'sushi','zaocan','tanggeng','yexiao', 'zhou', 'yiqibuxie', 'wenbuquhan', 'shiliaoyangsheng', 'yuezi', 'zhu', 'yiren'],
    id: '9c38CfFb-BF8d-dB35-2DEb-e1Ac4fBAfDBa',
    imageSrc: '/random/0128955c262f40a80121df90357af1.jpg',
    title: '莲子红豆粥',
    xuanchuanContent: '最幸福的时刻便是享受自己做的美食',
    content: [
      {
        title: '红豆',
        describe: '30克'
      },
      {
        title: '莲子',
        describe: '30克'
      },
      {
        title: '小米',
        describe: '50克'
      },
      {
        title: '水',
        describe: '1.2升'
      },
    ],
    score: Random.float(0, 4, 1, 1),
    productionTime: Random.pick(timeArr),
    LikesNumber: Random.integer(100, 5000),
    collectorsNumber: Random.integer(20, 1000),
    composition: [
      {
        title: '卡路里',
        percentage: Random.float(0, 99, 0, 1)
      },
      {
        title: '碳水化合物',
        percentage: Random.float(0, 99, 0, 1)
      },
      {
        title: '脂肪',
        percentage: Random.float(0, 99, 0, 1)
      },
      {
        title: '蛋白质',
        percentage: Random.float(0, 99, 0, 1)
      },
      {
        title: '钙',
        percentage: Random.float(0, 99, 0, 1)
      },
      {
        title: '铁',
        percentage: Random.float(0, 99, 0, 1)
      },
    ],
    shuming:[Random.pick(zuofa), Random.pick(kouwei), Random.pick(timeArr), Random.pick(reliang), Random.pick(rumen)],
    stepData: [
      {
        stepTitle: '步骤一',
        stepContent: '红豆浸泡一夜。'
      },
      {
        stepTitle: '步骤二',
        stepContent: '将红豆，莲子，小米清洗干净，一起倒入电饭煲。'
      },
      {
        stepTitle: '步骤三',
        stepContent: '加入适量的水，约1.2升。'
      },
      {
        stepTitle: '步骤四',
        stepContent: '开始煮粥键等待结束。'
      },
    ]
  },
  {
    subClassCode: [Random.pick(timeCodeArr), 'roushi','jing','zheng','biandang'],
    id: '5FE6cBee-D0ab-DabF-FFd2-bafcc7ac5aa0',
    imageSrc: '/random/01521d5ec0cd24a8012148140a2144.jpg',
    title: '香肠腊肉',
    xuanchuanContent: '无竹令人俗，无肉使人瘦。不俗又不瘦，香肠焖猪肉',
    content: [
      {
        title: '烤肠',
        describe: '2根'
      },
      {
        title: '厚百叶',
        describe: '50克'
      },
      {
        title: '盐',
        describe: '1克'
      },
      {
        title: '料酒',
        describe: '3克'
      },
      {
        title: '蒸鱼豉油',
        describe: '5克'
      },
      {
        title: '姜丝',
        describe: '2克'
      },
      {
        title: '葱',
        describe: '适量'
      },
    ],
    score: Random.float(0, 4, 1, 1),
    productionTime: Random.pick(timeArr),
    LikesNumber: Random.integer(100, 5000),
    collectorsNumber: Random.integer(20, 1000),
    composition: [
      {
        title: '卡路里',
        percentage: Random.float(0, 99, 0, 1)
      },
      {
        title: '碳水化合物',
        percentage: Random.float(0, 99, 0, 1)
      },
      {
        title: '脂肪',
        percentage: Random.float(0, 99, 0, 1)
      },
      {
        title: '蛋白质',
        percentage: Random.float(0, 99, 0, 1)
      },
      {
        title: '钙',
        percentage: Random.float(0, 99, 0, 1)
      },
      {
        title: '铁',
        percentage: Random.float(0, 99, 0, 1)
      },
    ],
    shuming:[Random.pick(zuofa), Random.pick(kouwei), Random.pick(timeArr), Random.pick(reliang), Random.pick(rumen)],
    stepData: [
      {
        stepTitle: '步骤一',
        stepContent: '将厚百叶洗净，切细丝。'
      },
      {
        stepTitle: '步骤二',
        stepContent: '烤肠解冻，切成薄片。'
      },
      {
        stepTitle: '步骤三',
        stepContent: '准备一个盘子，将百叶丝铺在底部。'
      },
      {
        stepTitle: '步骤四',
        stepContent: '然后将烤肠片铺在百叶上面。'
      },
      {
        stepTitle: '步骤五',
        stepContent: '倒入适量料酒。'
      },
      {
        stepTitle: '步骤六',
        stepContent: '撒上一点点盐。因为烤肠本身有盐味，蒸熟后味道也会渗入到百叶中，所以不要加太多。热水上锅，大火蒸8分钟。'
      },
      {
        stepTitle: '步骤七',
        stepContent: '最后倒入适量蒸鱼豉油，再焖1分钟，即可出锅。别忘记撒上葱花哦！'
      },
    ]
  },
  {
    subClassCode: [Random.pick(timeCodeArr), 'roushi','jiachangcai','wucan','recai', 'chao', 'la', 'quhui'],
    id: '8A1ECBB4-51FB-EcEB-FcDc-ab4e4FfAE90c',
    imageSrc: '/random/01858d5e6f29bda801216518bf230d.jpg',
    title: '胡萝卜焖猪肚',
    xuanchuanContent: '待他自熟莫催他，火候足时他自美。',
    content: [
      {
        title: '猪肚',
        describe: '500克'
      },
      {
        title: '胡萝卜',
        describe: '200克'
      },
      {
        title: '洋葱',
        describe: '200克'
      },
      {
        title: '生姜',
        describe: '10克'
      },
      {
        title: '料酒',
        describe: '20毫升'
      },
      {
        title: '青椒',
        describe: '30克'
      },
      {
        title: '盐',
        describe: '2克'
      },
      {
        title: '生抽',
        describe: '20毫升'
      },
    ],
    score: Random.float(0, 4, 1, 1),
    productionTime: Random.pick(timeArr),
    LikesNumber: Random.integer(100, 5000),
    collectorsNumber: Random.integer(20, 1000),
    composition: [
      {
        title: '卡路里',
        percentage: Random.float(0, 99, 0, 1)
      },
      {
        title: '碳水化合物',
        percentage: Random.float(0, 99, 0, 1)
      },
      {
        title: '脂肪',
        percentage: Random.float(0, 99, 0, 1)
      },
      {
        title: '蛋白质',
        percentage: Random.float(0, 99, 0, 1)
      },
      {
        title: '钙',
        percentage: Random.float(0, 99, 0, 1)
      },
      {
        title: '铁',
        percentage: Random.float(0, 99, 0, 1)
      },
    ],
    shuming:[Random.pick(zuofa), Random.pick(kouwei), Random.pick(timeArr), Random.pick(reliang), Random.pick(rumen)],
    stepData: [
      {
        stepTitle: '步骤一',
        stepContent: '猪肚去掉杂质后放入锅中，加入料酒和姜片,煮至猪肚能用筷子戳动后捞出切片'
      },
      {
        stepTitle: '步骤二',
        stepContent: '锅中放油，烧热后下入胡萝卜炒软后捞出'
      },
      {
        stepTitle: '步骤三',
        stepContent: '另起一锅，放油，加花椒炸香'
      },
      {
        stepTitle: '步骤四',
        stepContent: '下姜标和洋葱炒香'
      },
      {
        stepTitle: '步骤五',
        stepContent: '下入切好的猪肚片'
      },
      {
        stepTitle: '步骤六',
        stepContent: '淋入生抽'
      },
      {
        stepTitle: '步骤七',
        stepContent: '加入胡萝卜和盐同炒 最后加入青椒炒匀即可'
      },
    ]
  },
  {
    subClassCode: [Random.pick(timeCodeArr), 'zaocan','dianxin','yiren','erren', 'biandang', 'sushe'],
    id: '37D8e6d5-76d5-eCfd-d55C-63c4eCA48F0F',
    imageSrc: '/random/01e9255e6f29c3a80120a895f81085.jpg',
    title: '青团子',
    xuanchuanContent: '软软香香的，是最好的安慰自己或犒劳自己的小礼物！',
    content: [
      {
        title: '艾叶',
        describe: '适量'
      },
      {
        title: '粘米粉',
        describe: '40克'
      },
      {
        title: '水磨糯米粉',
        describe: '100克'
      },
      {
        title: '豆沙馅儿',
        describe: '400克'
      },
      {
        title: '猪油',
        describe: '一小勺'
      },
      {
        title: '白糖',
        describe: '一小勺'
      },
      {
        title: '小苏打',
        describe: '适量'
      },
    ],
    score: Random.float(0, 4, 1, 1),
    productionTime: Random.pick(timeArr),
    LikesNumber: Random.integer(100, 5000),
    collectorsNumber: Random.integer(20, 1000),
    composition: [
      {
        title: '卡路里',
        percentage: Random.float(0, 99, 0, 1)
      },
      {
        title: '碳水化合物',
        percentage: Random.float(0, 99, 0, 1)
      },
      {
        title: '脂肪',
        percentage: Random.float(0, 99, 0, 1)
      },
      {
        title: '蛋白质',
        percentage: Random.float(0, 99, 0, 1)
      },
      {
        title: '钙',
        percentage: Random.float(0, 99, 0, 1)
      },
      {
        title: '铁',
        percentage: Random.float(0, 99, 0, 1)
      },
    ],
    shuming:[Random.pick(zuofa), Random.pick(kouwei), Random.pick(timeArr), Random.pick(reliang), Random.pick(rumen)],
    stepData: [
      {
        stepTitle: '步骤一',
        stepContent: '这个每个地方叫法不一样，我们那里叫艾蒿 网上有新鲜的卖的，到的时候还挺新鲜，少部分蔫了 我提前水里泡了一下，喝饱水的叶子就像在土壤里一样，变得很精神 不喜欢这个味道的用菠菜也一样哦'
      },
      {
        stepTitle: '步骤二',
        stepContent: '我们开始来摘菜，去掉茎部和死叶子 这样成品的颜色也会更完美哈'
      },
      {
        stepTitle: '步骤三',
        stepContent: '全部弄好真的是一个费时间力气的活儿'
      },
      {
        stepTitle: '步骤四',
        stepContent: '提前准备好冰水，煮过的叶子放在越凉的水里叶子就会越绿呀'
      },
      {
        stepTitle: '步骤五',
        stepContent: '锅里倒入稍微多一点的清水，因为我今天弄得菜有一点多 注意的是尽量不要用铁锅煮哦【降低叶子变黑的几率，虽然不绝对】我是用砂锅煮的 放入适量的小苏打，具体的也没有称过 水多艾蒿多的话就稍稍多一点'
      },
      {
        stepTitle: '步骤六',
        stepContent: '水开以后放入清洗干净的艾蒿'
      },
      {
        stepTitle: '步骤七',
        stepContent: '用筷子快速拨均匀，而且要快速不停的搅拌哦 保证每片叶子焯到水 露在外面没有焯到水的颜色会深一些 有些还会氧化变黑'
      },
      {
        stepTitle: '步骤八',
        stepContent: '时间不能煮的太久，大概一两分钟左右，出锅以后先放到凉水里过一遍'
      },
      {
        stepTitle: '步骤九',
        stepContent: '在马上放到刚才准备好的冰水里，用手拨均匀 彻底凉到就好啦'
      },
      {
        stepTitle: '步骤十',
        stepContent: '用手挤掉水份，不需要即得太干，放入到榨汁机里 也可以放适量凉白开，觉得不好打的话 如果打算用泥的话打得越碎越好 打成泥状 【有原汁机最方便了】'
      },
      {
        stepTitle: '步骤十一',
        stepContent: '后面用了纱布过滤，'
      },
      {
        stepTitle: '步骤十二',
        stepContent: '弄好以后放入到干净的碗里，记得盖上保鲜膜哦，防止氧化 你们可以一次性多弄一点分袋放在冰箱冷冻 想吃的时候拿一小袋出来也很方便 大半年应该没有问题的'
      },
      {
        stepTitle: '步骤十三',
        stepContent: '准备一个大一点的容器放入准备好的糯米粉，粘米粉，白糖'
      },
      {
        stepTitle: '步骤十四',
        stepContent: '用温水和面最好，慢慢倒入，差不多的时候用手揉成团 一定要软硬适中 这个就用手自己去感觉哈'
      },
      {
        stepTitle: '步骤十五',
        stepContent: '取一个深一点的盘子，铺一层油纸，防止粘黏，揉好的糯米面团压扁压平'
      },
      {
        stepTitle: '步骤十六',
        stepContent: '放进锅里，水开手蒸25分钟左右 时间不绝对，可以用筷子插进去看看有木有白点 没有就是熟透了'
      },
      {
        stepTitle: '步骤十七',
        stepContent: '蒸的时候我们来准备馅儿 今天用的是红豆沙，直接买来的，你们也可以自己做，倒也不是很难，最近状态不好所以懒得动手'
      },
      {
        stepTitle: '步骤十八',
        stepContent: '搓成40g左右一个'
      },
      {
        stepTitle: '步骤十九',
        stepContent: '蒸好的面团拿出来放进一个大一点的碗里，赶紧加入一小勺猪油，不能太多 戴上手套赶紧揉，有点儿烫哈'
      },
      {
        stepTitle: '步骤二十',
        stepContent: '差不多的时候把艾蒿泥放进去，耐心一点慢慢揉吧'
      },
      {
        stepTitle: '步骤二十一',
        stepContent: '直到全部揉匀成这样就好啦 记得盖上保鲜膜'
      },
      {
        stepTitle: '步骤二十二',
        stepContent: '你们可以看一下我大概每份30g左右 多一点少一点都没事的哈 取一个按扁，然后放上刚刚搓好的豆沙馅儿'
      },
      {
        stepTitle: '步骤二十三',
        stepContent: '虎口收紧，即使包上保鲜膜一个个放起来就好啦 记得戴手套如果直接用手会感觉好粘的'
      },
      {
        stepTitle: '步骤二十四',
        stepContent: '真的很好吃，做完之后自己马上吃了两个'
      },
    ]
  },
  {
    subClassCode: [Random.pick(timeCodeArr), 'jiachangcai','sushi','wancan','recai', 'chao', 'yiren', 'biandang'],
    id: '4FAfefeC-D0db-FafA-7b1D-dD4729EB9Ef8',
    imageSrc: '/random/014b8e5ebaad56a801214814842879.jpg',
    title: '爆炒藕片',
    xuanchuanContent: '食为天性，静静地咀嚼，轻轻地回味，非比寻常的韵致',
    content: [
      {
        title: '藕',
        describe: '125g'
      },
      {
        title: '食盐',
        describe: '适量'
      },
      {
        title: '姜',
        describe: '适量'
      },
      {
        title: '调和油',
        describe: '适量'
      },
      {
        title: '柿子椒',
        describe: '适量'
      },
    ],
    score: Random.float(0, 4, 1, 1),
    productionTime: Random.pick(timeArr),
    LikesNumber: Random.integer(100, 5000),
    collectorsNumber: Random.integer(20, 1000),
    composition: [
      {
        title: '卡路里',
        percentage: Random.float(0, 99, 0, 1)
      },
      {
        title: '碳水化合物',
        percentage: Random.float(0, 99, 0, 1)
      },
      {
        title: '脂肪',
        percentage: Random.float(0, 99, 0, 1)
      },
      {
        title: '蛋白质',
        percentage: Random.float(0, 99, 0, 1)
      },
      {
        title: '钙',
        percentage: Random.float(0, 99, 0, 1)
      },
      {
        title: '铁',
        percentage: Random.float(0, 99, 0, 1)
      },
    ],
    shuming:[Random.pick(zuofa), Random.pick(kouwei), Random.pick(timeArr), Random.pick(reliang), Random.pick(rumen)],
    stepData: [
      {
        stepTitle: '步骤一',
        stepContent: '将青椒切块，藕切片'
      },
      {
        stepTitle: '步骤二',
        stepContent: '将姜切末，热锅冷油，将姜末放入锅内熬一会儿'
      },
      {
        stepTitle: '步骤三',
        stepContent: '然后倒入青椒爆炒一会儿'
      },
      {
        stepTitle: '步骤四',
        stepContent: '然后将藕片倒入锅内，爆炒片刻即可，如果太干就稍微加点水'
      },
    ]
  },
  {
    subClassCode: [Random.pick(timeCodeArr), 'wucan','wancan','yexiao','chaofan', 'chao', 'yiren', 'sushe'],
    id: '2205EAdd-aD60-99D1-dB74-2659d822B0Fe',
    imageSrc: '/random/01ca3c5ca1abd1a801214168511d6a.jpg',
    title: '扬州炒饭',
    xuanchuanContent: '初游唐安饭薏米，炊成不减雕胡美。大如苋实白如玉，滑欲流匙香满屋',
    content: [
      {
        title: '鸡蛋',
        describe: '适量'
      },
      {
        title: '黄瓜',
        describe: '适量'
      },
      {
        title: '香肠',
        describe: '适量'
      },
      {
        title: '胡萝卜',
        describe: '适量'
      },
      {
        title: '盐',
        describe: '适量'
      },
      {
        title: '鸡精',
        describe: '适量'
      },
    ],
    score: Random.float(0, 4, 1, 1),
    productionTime: Random.pick(timeArr),
    LikesNumber: Random.integer(100, 5000),
    collectorsNumber: Random.integer(20, 1000),
    composition: [
      {
        title: '卡路里',
        percentage: Random.float(0, 99, 0, 1)
      },
      {
        title: '碳水化合物',
        percentage: Random.float(0, 99, 0, 1)
      },
      {
        title: '脂肪',
        percentage: Random.float(0, 99, 0, 1)
      },
      {
        title: '蛋白质',
        percentage: Random.float(0, 99, 0, 1)
      },
      {
        title: '钙',
        percentage: Random.float(0, 99, 0, 1)
      },
      {
        title: '铁',
        percentage: Random.float(0, 99, 0, 1)
      },
    ],
    shuming:[Random.pick(zuofa), Random.pick(kouwei), Random.pick(timeArr), Random.pick(reliang), Random.pick(rumen)],
    stepData: [
      {
        stepTitle: '步骤一',
        stepContent: '锅内放入一点点食用油，倒入打散的鸡蛋液翻炒'
      },
      {
        stepTitle: '步骤二',
        stepContent: '倒入米饭，慢慢的尽量炒散'
      },
      {
        stepTitle: '步骤三',
        stepContent: '将米饭炒匀后，加入黄瓜、香肠、胡萝卜、鸡精、盐翻炒，就大功告成啦！'
      },
    ]
  },
  {
    subClassCode: [Random.pick(timeCodeArr), 'zaocan','tanggeng','qingfeizhike','meirongyangyan', 'guo', 'tian', 'yiren'],
    id: '4ddaDfF3-D8BF-1A8F-d69C-45eBB0BBf39e',
    imageSrc: '/random/019a635f0d6a26a801215aa0f11de3.jpg',
    title: '冰糖炖雪梨',
    xuanchuanContent: '人世间，酸甜苦辣，若长良川',
    content: [
      {
        title: '雪梨',
        describe: '2个'
      },
      {
        title: '冰糖',
        describe: '10克'
      },
      {
        title: '红枣',
        describe: '8克'
      },
      {
        title: '枸杞',
        describe: '6克'
      },
      {
        title: '清水',
        describe: '适量'
      },
    ],
    score: Random.float(0, 4, 1, 1),
    productionTime: Random.pick(timeArr),
    LikesNumber: Random.integer(100, 5000),
    collectorsNumber: Random.integer(20, 1000),
    composition: [
      {
        title: '卡路里',
        percentage: Random.float(0, 99, 0, 1)
      },
      {
        title: '碳水化合物',
        percentage: Random.float(0, 99, 0, 1)
      },
      {
        title: '脂肪',
        percentage: Random.float(0, 99, 0, 1)
      },
      {
        title: '蛋白质',
        percentage: Random.float(0, 99, 0, 1)
      },
      {
        title: '钙',
        percentage: Random.float(0, 99, 0, 1)
      },
      {
        title: '铁',
        percentage: Random.float(0, 99, 0, 1)
      },
    ],
    shuming:[Random.pick(zuofa), Random.pick(kouwei), Random.pick(timeArr), Random.pick(reliang), Random.pick(rumen)],
    stepData: [
      {
        stepTitle: '步骤一',
        stepContent: '雪梨3/1处切开'
      },
      {
        stepTitle: '步骤二',
        stepContent: '将梨掏空备用'
      },
      {
        stepTitle: '步骤三',
        stepContent: '红枣去核备用'
      },
      {
        stepTitle: '步骤四',
        stepContent: '将红枣、冰糖、枸杞放入梨中，再倒入适量清水'
      },
      {
        stepTitle: '步骤五',
        stepContent: '盖上梨盖，移入蒸锅'
      },
      {
        stepTitle: '步骤六',
        stepContent: '沸水蒸30分钟即可'
      },
    ]
  },
  {
    subClassCode: [Random.pick(timeCodeArr), 'jiachangcai','roushi','wucan','recai', 'lu', 'chuan', 'yue', 'tian', 'biandang', 'quhui'],
    id: '6411ceB6-D9c8-df67-d8aD-db4De4C5dfE8',
    imageSrc: '/random/0127f15bf560faa80121ab5d2a4bc0.jpg',
    title: '糖醋里脊',
    xuanchuanContent: '特别好吃的猪肉！肉质很紧、韧、润，鲜美！',
    content: [
      {
        title: '里脊肉',
        describe: '250克'
      },
      {
        title: '鸡蛋',
        describe: '1个'
      },
      {
        title: '面粉',
        describe: '适量'
      },
      {
        title: '京葱',
        describe: '1/4根'
      },
      {
        title: '番茄酱',
        describe: '2-3大匙'
      },
      {
        title: '白胡椒粉',
        describe: '1茶匙'
      },
      {
        title: '白糖',
        describe: '1汤匙'
      },
      {
        title: '盐',
        describe: '1/2茶匙'
      },
      {
        title: '白醋',
        describe: '2茶匙'
      },
      {
        title: '料酒',
        describe: '2大匙'
      },
      {
        title: '水淀粉',
        describe: '少许'
      },
    ],
    score: Random.float(0, 4, 1, 1),
    productionTime: Random.pick(timeArr),
    LikesNumber: Random.integer(100, 5000),
    collectorsNumber: Random.integer(20, 1000),
    composition: [
      {
        title: '卡路里',
        percentage: Random.float(0, 99, 0, 1)
      },
      {
        title: '碳水化合物',
        percentage: Random.float(0, 99, 0, 1)
      },
      {
        title: '脂肪',
        percentage: Random.float(0, 99, 0, 1)
      },
      {
        title: '蛋白质',
        percentage: Random.float(0, 99, 0, 1)
      },
      {
        title: '钙',
        percentage: Random.float(0, 99, 0, 1)
      },
      {
        title: '铁',
        percentage: Random.float(0, 99, 0, 1)
      },
    ],
    shuming:[Random.pick(zuofa), Random.pick(kouwei), Random.pick(timeArr), Random.pick(reliang), Random.pick(rumen)],
    stepData: [
      {
        stepTitle: '步骤一',
        stepContent: '里脊肉用刀背两面拍松；'
      },
      {
        stepTitle: '步骤二',
        stepContent: '里脊肉切成条状，中间打一个蛋进去，加入料酒、盐、白胡椒粉；'
      },
      {
        stepTitle: '步骤三',
        stepContent: '抓匀备用，腌制10-15分钟；'
      },
      {
        stepTitle: '步骤四',
        stepContent: '里脊肉裹适量面粉，抖掉多余的面粉，排好备用；'
      },
      {
        stepTitle: '步骤五',
        stepContent: '锅中加适量油烧至六成热转小火，下裹好面衣的里脊肉炸透，呈淡黄色捞出沥油，油不要关火接着烧至九成热下锅复炸，火稍稍调大，炸至呈金黄色，有酥脆的硬度即可；'
      },
      {
        stepTitle: '步骤六',
        stepContent: '捞出炸好的里脊放在油纸上沥油备用；'
      },
      {
        stepTitle: '步骤七',
        stepContent: '接着锅中留少许油，加入番茄酱、白醋、盐、糖、少许水、水淀粉调成糖醋汁，接着下炸好的里脊快速翻炒均匀；'
      },
      {
        stepTitle: '步骤八',
        stepContent: '出锅撒上少许白芝麻，搭配京葱丝就可以享用了。'
      },
    ]
  },
  ...data100
]


module.exports = {
  bannerListData,
  recommendData,
  keyWordData,
  randomRecipesData,
  allRecipesData
}