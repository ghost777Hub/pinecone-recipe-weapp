//定义
interface ALLURLPATHType {
  /**get /home/banner 首页轮播图*/
  HOMEBANNER: string;
  /**get /home/recommend 首页推荐卡*/
  HOMERECOMMEND: string;
  /**get /random/keyword 随机页关键词*/
  RANDOMWORD: string;
  /**get /random/recipes 随机页生成食谱*/
  RANDOMRECIPES: string;
}


//数据
export const ROOTPATH: string = 'http://localhost:6001/api' //服务器请求跟目录
export const ALLURLPATH: ALLURLPATHType  = {
  HOMEBANNER: ROOTPATH + '/home/banner',
  HOMERECOMMEND: ROOTPATH + '/home/recommend',
  RANDOMWORD: ROOTPATH + '/random/keyword',
  RANDOMRECIPES: ROOTPATH + '/random/recipes',
}