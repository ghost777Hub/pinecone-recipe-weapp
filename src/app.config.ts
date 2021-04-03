import { useGlobalIconFont } from './components/iconfont/helper' //iconfont插件



export default {
  usingComponents: Object.assign(useGlobalIconFont()),
  pages: [
    'pages/home/home',
    'pages/classificationMenu/classificationMenu',
    'pages/randomFood/randomFood',
    'pages/individualUser/individualUser',
    'pages/recipeList/recipeList',
    'pages/recipeDetail/recipeDetail',
  ],
  tabBar:{
    list:[
      {
        'iconPath': './assets/images/tabBar/home_icon.png',
        'selectedIconPath': './assets/images/tabBar/home_icon_hit.png',
        pagePath: 'pages/home/home',
        text: '首页'
      },
      {
        'iconPath': './assets/images/tabBar/class_icon.png',
        'selectedIconPath': './assets/images/tabBar/class_icon_hit.png',
        pagePath: 'pages/classificationMenu/classificationMenu',
        text: '食谱大全'
      },
      {
        'iconPath': './assets/images/tabBar/random_icon.png',
        'selectedIconPath': './assets/images/tabBar/random_icon_hit.png',
        pagePath: 'pages/randomFood/randomFood',
        text: '随机食谱'
      },
      {
        'iconPath': './assets/images/tabBar/my2_icon.png',
        'selectedIconPath': './assets/images/tabBar/my2_icon_hit.png',
        pagePath: 'pages/individualUser/individualUser',
        text: '我的' 
      },
    ],
    'backgroundColor': '#FFFFFF',
    "color": "#ccc",
    "selectedColor": "#FFC75F",
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
}
