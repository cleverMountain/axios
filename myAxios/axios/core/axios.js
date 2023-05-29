
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
  dispatchRequest(config)
}

Array.from(['get', 'post']).forEach(method => {
  Axios.prototype[method] = Axios.prototype.request
})

export default Axios