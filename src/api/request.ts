import Taro from '@tarojs/taro'
import {handleGetRequestAndReturnData, handlePostRequestAndReturnData} from '../mockServer/server'



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
  .catch(()=>{
    // console.log('错误信息：', e)
    //由于没有服务器，于是在这里mock数据
    return handleGetRequestAndReturnData(url)
  })
  .finally(()=>{
    setTimeout(() => {
      Taro.hideLoading()
    }, 400)
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
  .catch(()=>{
    // console.log('错误信息：', e)
    //由于没有服务器，于是在这里mock数据
    return handlePostRequestAndReturnData(url, data)
  })
  .finally(()=>{
    setTimeout(() => {
      Taro.hideLoading()
    }, 400)
  })
}