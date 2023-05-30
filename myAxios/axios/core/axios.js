
import dispatchRequest from "./dispatchRequest.js"

function Axios(instanceConfig) {
  //实例对象上的 defaults 属性为配置对象
  this.defaults = instanceConfig;
  //实例对象上有 interceptors 属性用来设置请求和响应拦截器
  this.interceptors = {
    request: {},
    response: {}
  };


}

// 通过request发起请求
Axios.prototype.request = function (config) {
  // 判断参数并合并
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }
  // 必定是成功的回调
  let promise = Promise.resolve(config)
  //  [成功, 失败]
  let dispatchChain = [dispatchRequest, undefined]
  // let a = dispatchRequest(config)
  // console.log(a)
  // 第一个promise一定为真，链式赋值promise，成功返回第一个promise，失败返回第二个
  while (dispatchChain.length > 0) {
    promise = promise.then(dispatchChain.shift(), dispatchChain.shift())
  
  }
  // 
  return promise
}

Array.from(['get', 'post']).forEach(method => {
  Axios.prototype[method] = Axios.prototype.request
})

export default Axios