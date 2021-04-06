import Taro from '@tarojs/taro'



//获取缓存
export const getStorage = (key: string)=> {
  if(!key) throw new Error('key不能为空')
  
  let res = Taro.getStorageSync(key)
  if(res) {
    try {
      let res2 = JSON.parse(res) 
      return res2
    } catch (error) {
      // console.error(error)
      return res
    }
  } else {
    return null
  }
}

//存储缓存
export const setStorage = (key: string, value:string)=> {
  if(!key) throw new Error('key不能为空')
  
  try {
    if(typeof value === 'object'){
      const newValue = JSON.stringify(value)
      Taro.setStorageSync(key, newValue)
    }else{
      Taro.setStorageSync(key, value)
    }
  } catch (error) {
    console.error(error)
  }
}