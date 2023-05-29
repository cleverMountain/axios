function xhrAdapter(config) {
  const {url, method} = config
  return new Promise(function dispatchXhrRequest(resolve, reject) {
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
  })
};


export default xhrAdapter