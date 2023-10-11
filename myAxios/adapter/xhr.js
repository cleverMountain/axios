import CancelToken from "../cancel/CancelToken.js"


function xhrAdapter(config) {

  const { url, method, params, cancelToken } = config
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if ((xhr.status >= 200 && xhr.status < 300)) {
          resolve(1)
        }
      }
    }
    xhr.open(method, url, false)
    xhr.send()
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