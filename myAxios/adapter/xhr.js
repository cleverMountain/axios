import CancelToken from "../cancel/CancelToken.js"


function xhrAdapter(config) {
  let xhr
  const { url, method, params, cancelToken } = config

  return new Promise((resolve, reject) => {
    xhr = new XMLHttpRequest()
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

    // 取消请求，把cancelToken实例放在config里
    if (cancelToken) {
 console.log(cancelToken)
 
      cancelToken.promise.then(() => {
      
        console.log('取消请求')
        xhr.abort()
      }, () => {
        debugger
      })
    }
  })
};


export default xhrAdapter