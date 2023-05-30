function xhrAdapter(config) {
  const {url, method} = config
  return new Promise((resolve, reject) => {
    // let xhr = new XMLHttpRequest()
    // xhr.onreadystatechange = function () {
    //   if (xhr.readyState === 4) {
    //     if ((xhr.status >= 200 && xhr.status < 300)) {
    //       resolve(1)
    //     }
    //   }
    // }
    // xhr.open(method, url, false)
    // xhr.send()
    const response = {
      data: {a: 1}
    }
    setTimeout(() => {
      resolve(response)
    });
  
  })
};


export default xhrAdapter