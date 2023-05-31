import Axios from "./core/axios.js";
import CancelToken from "./cancel/CancelToken.js"

function createInstance(defaultConfig) {

  const context = new Axios(defaultConfig);
  console.dir(context)
  // 主要是调用request方法,函数调用
  let instance = Axios.prototype.request.bind(context)
  // 在instance上添加get,post方法
  Object.keys(Axios.prototype).forEach(method => {
    instance[method] = Axios.prototype[method].bind(context)
  })
  // 添加interceptors，defaults属性
  Object.keys(context).forEach(prop => {
    instance[prop] = context[prop]
  })

  return instance
}

const axios = createInstance()
axios.CancelToken = CancelToken;
 
export default axios