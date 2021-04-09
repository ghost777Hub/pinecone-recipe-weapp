/**
 * 
 * @param {*} fn 执行的函数
 * @param {*} delay  延迟调用的时间
 */
export function debounce(fn, delay = 800) {
  let timer:any = null

  return function () { 
    if (timer) {
      clearTimeout(timer)
    }

    timer = setTimeout(function(){
      fn.apply(this, arguments) 
      timer = null
    },delay)
  }
}