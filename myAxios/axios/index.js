import Axios from "./core/axios.js";


function createInstance(defaultConfig) {

  const context = new Axios(defaultConfig);
  console.log(context)
  // 主要是调用request方法,函数调用
  let instance = Axios.prototype.request.bind(context)
  // 在instance上添加get,post方法
  Object.keys(Axios.prototype).forEach(method => {
    instance[method] = Axios.prototype[method].bind(context)
  })
  console.log(instance)
  // return context;
  return instance
}

const axios = createInstance()


export default axios