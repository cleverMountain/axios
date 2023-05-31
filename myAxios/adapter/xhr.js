import CancelToken from "../cancel/CancelToken.js"


function xhrAdapter(config) {

  const { url, method, params, cancelToken } = config
  return new Promise((resolve, reject) => {

    const response = {
      data: { a: 1 }
    }

    console.log(this)
    // 模拟数据返回
    console.log('发送请求')
    let timer = setTimeout(() => {
      resolve(response)
    }, 2000);
    // 取消请求，把cancelToken实例放在config里
    if (cancelToken) {
      cancelToken.promise.then(() => {
        console.log('取消请求')
        clearTimeout(timer)
      })
    }
  })
};


export default xhrAdapter