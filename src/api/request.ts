import Taro from '@tarojs/taro'



//get请求封装
export function getRequest(url:string, data?:object){
  Taro.showLoading()
  return Taro.request({
    method: 'GET',
    url,
    data,
  })
  .then((res:any)=>{
    return res
  })
  .catch((e: any)=>{
    console.log('错误信息：', e)
  })
  .finally(()=>{
    Taro.hideLoading()
  })
}

//post请求封装
export function postRequest(url:string, data?:object){
  Taro.showLoading()
  return Taro.request({
    header:{
      'content-type': 'application/json'
    },
    method: 'POST',
    url,
    data,
  })
  .then((res:any)=>{
    return res
  })
  .catch((e: any)=>{
    console.log('错误信息：', e)
  })
  .finally(()=>{
    Taro.hideLoading()
  })
}